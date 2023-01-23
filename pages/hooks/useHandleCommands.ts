import { useReducer } from "react";

//TODO: Move a to a type file
type HelpCommands = "help" | "-h";
type ClearCommand = "clear";
export type Commands = HelpCommands | ClearCommand;
export type CommandList = Array<Commands>;
export type InitialState = Record<"commands", CommandList>;

export interface UseHandleCommandsReturn {
  commandList: CommandList;
  dispatch: (command: string) => void;
}

const initialState: InitialState = {
  commands: [],
};

function reducer(state: InitialState, action: { type: Commands | string }) {
  switch (action.type) {
    case "-h":
    case "help":
      console.log("help");
      return state;
    case "clear":
      return state;
    default:
      return state;
  }
}

export function useHandleCommands(): UseHandleCommandsReturn {
  //TODO: Investigate moving this to a reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleCommand = (command: string) => {
    dispatch({ type: command });
  };

  return {
    commandList: state.commands,
    dispatch: handleCommand,
  };
}
