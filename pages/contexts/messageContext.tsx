import { createContext, useState, ReactElement, useId } from "react";
import { GenericMessage } from "../components";

export interface MessageContextType {
  messageHistory: ReactElement[];
  updateMessageHistory: (message: ReactElement | string) => void;
  resetHistory: () => void;
}

export const MessageContext = createContext<MessageContextType | null>(null);

export function MessageProvider({ children }: { children: ReactElement }) {
  const { messageHistory, updateMessageHistory, resetHistory } =
    useMessageContext();

  return (
    <MessageContext.Provider
      value={{ messageHistory, updateMessageHistory, resetHistory }}
    >
      {children}
    </MessageContext.Provider>
  );
}

export const useMessageContext = () => {
  const id = useId();
  const [messageHistory, setMessageHistory] = useState<Array<ReactElement>>([
    <GenericMessage key={id}>
      <p>Type help or -h to see the commands</p>
    </GenericMessage>,
  ]);
  
  const uniqueKey = useId();
  function updateMessageHistory(message: ReactElement | string) {
    setMessageHistory([
      ...messageHistory,
      <GenericMessage key={uniqueKey}>{message}</GenericMessage>,
    ]);
  }

  function resetHistory() {
    setMessageHistory([]);
  }

  return {
    messageHistory,
    updateMessageHistory,
    resetHistory,
  };
};
