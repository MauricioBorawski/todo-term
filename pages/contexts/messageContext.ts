import { createContext, useState, ReactElement } from "react";

const MessageContext = 

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
