import { useEffect, useContext } from "react";
import { CommandList, Commands } from "../../types/types";
import { HelpMessage, RegisterMessage, LoginMessage } from "./components";
import {
  MessageContext,
  MessageContextType,
} from "../../contexts/messageContext";

export interface BodyProps {
  commandList: CommandList;
  userInput: string;
  dispatch: (command: string) => void;
}

export function Body({ commandList, userInput, dispatch }: BodyProps) {
  const { messageHistory, updateMessageHistory, resetHistory } = useContext(
    MessageContext
  ) as MessageContextType;

  const lastCommand: Commands = commandList[commandList.length - 1];

  useEffect(() => {
    commandList.map((command, i) => {
      if (command === "help") {
        updateMessageHistory(<HelpMessage key={i} />);
      }
      if (command === "clear") {
        resetHistory();
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commandList]);

  return (
    <div className="h-full w-fit flex flex-col justify-end items-start mb-6 text-gray-400">
      {messageHistory.map((message, index) => {
        return (
          <div key={index} className="mb-4">
            {message}
          </div>
        );
      })}
      {lastCommand === "register" && (
        <RegisterMessage dispatch={dispatch} userInput={userInput} />
      )}
      {lastCommand === "login" && (
        <LoginMessage dispatch={dispatch} userInput={userInput} />
      )}
    </div>
  );
}
