type HelpCommands = "help" | "-h";
type Commands = HelpCommands;
type commandList = Array<Commands>;

export interface UseHandleCommandsReturn {
  commandList: commandList;
  isError: boolean;
  setError: () => void;
}

export function useHandleCommands(command: string): UseHandleCommandsReturn {
  const commandHistory: commandList = [];
  let isError = false;

  function setError() {
    isError = !isError;
  }

  switch (command) {
    case "help":
      commandHistory.push("help");
      break;

    case "-h":
      commandHistory.push("-h");
      break;

    default:
      setError();
      break;
  }

  return {
    commandList: commandHistory,
    isError,
    setError,
  };
}
