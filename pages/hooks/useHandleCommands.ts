import { useReducer } from "react";
import { CommandList, Commands, InitialState } from "../types/types";
export interface UseHandleCommandsReturn {
  commandList: CommandList;
  dispatch: (command: string) => void;
}

const initialState: InitialState = {
  commands: [],
};

function reducer(
  state: InitialState,
  action: { type: Commands | string }
): InitialState {
  switch (action.type) {
    case "-h":
    case "help":
      return { ...state, commands: [...state.commands, "help"] };
    case "clear":
      return { ...state, commands: [...state.commands, "clear"] };
    case "register":
      return { ...state, commands: [...state.commands, "register"] };
    case "finish_register_process":
      return {
        ...state,
        commands: [...state.commands, "finish_register_process"],
      };
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
