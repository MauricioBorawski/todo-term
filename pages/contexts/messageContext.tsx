import { createContext, useState, ReactElement, useReducer } from "react";

export interface MessageContextType {
  messageHistory: ReactElement[];
  updateMessageHistory: (message: ReactElement) => void;
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
  const [messageHistory, setMessageHistory] = useState<Array<ReactElement>>([]);

  function updateMessageHistory(message: ReactElement) {
    setMessageHistory([...messageHistory, message]);
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
