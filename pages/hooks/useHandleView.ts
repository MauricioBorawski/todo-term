import { ReactElement, useEffect, useState } from "react";

export interface UseHandleViewReturn {
  messageHistory: Array<ReactElement>;
  clearMessageHistory: () => void;
}

export function useHandleView(ui: ReactElement): UseHandleViewReturn {
  const [messageHistory, setMessageHistory] = useState<Array<ReactElement>>([]);

  const clearMessageHistory = () => {
    setMessageHistory([]);
  };

  useEffect(() => {
    setMessageHistory([...messageHistory, ui]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ui]);

  return { messageHistory, clearMessageHistory };
}
