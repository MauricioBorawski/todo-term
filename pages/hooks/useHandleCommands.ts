import { useState, useReducer, useEffect } from "react";

type HelpCommands = "help" | "-h";
type Commands = HelpCommands;
export type CommandList = Array<Commands>;

export interface UseHandleCommandsReturn {
  commandList: CommandList;
  isError: boolean;
  setError: () => void;
}

export function useHandleCommands(command: string): UseHandleCommandsReturn {
  //TODO: Investigate moving this to a reducer
  const [commandHistory, setCommandHistory] = useState<CommandList>([]);
  let isError = false;

  function setError() {
    isError = !isError;
  }

  useEffect(() => {
    switch (command) {
      case "help":
      case "-h":
        setCommandHistory([...commandHistory, command]);
        break;

      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command]);

  return {
    commandList: commandHistory,
    isError,
    setError,
  };
}
