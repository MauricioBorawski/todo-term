import { createContext, useState, ReactElement, useContext } from "react";

export const MessageContext = createContext<Array<ReactElement>>([]);

export function MessageProvider({ children }: { children: ReactElement }) {
  const { messageHistory } = useMessageContext();

  return (
    <MessageContext.Provider value={messageHistory}>
      {children}
    </MessageContext.Provider>
  );
}

export const useMessageContext = () => {
  const test = useContext(MessageContext);
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
