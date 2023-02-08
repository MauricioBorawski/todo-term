import { createContext, ReactElement, useState } from "react";
import { CommandList, Commands } from "../types/types";

export interface CommandContextType {
  commandHistory: CommandList;
  updateCommandHistory: (command: Commands) => void;
}

export const CommandContext = createContext<CommandContextType | null>(null!);

export const CommandContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [commandHistory, setCommandHistory] = useState<CommandList>([]);

  function updateCommandHistory(command: Commands) {
    setCommandHistory([...commandHistory, command]);
  }

  return (
    <CommandContext.Provider
      value={{
        commandHistory,
        updateCommandHistory,
      }}
    >
      {children}
    </CommandContext.Provider>
  );
};
