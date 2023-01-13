import { ReactElement, useEffect, useState } from "react";
import { CommandList } from "../../hooks";
import { Commands } from "../../hooks/useHandleCommands";
import { HelpMessage } from "./components";
// import { useHandleView } from "../../hooks";
export interface BodyProps {
  commandList: CommandList;
}

export function Body({ commandList }: BodyProps) {
  console.log(commandList);

  const lastCommand: Commands = commandList[commandList.length - 1];

  const [messageHistory, setMessageHistory] = useState<Array<ReactElement>>([]);

  const clearMessageHistory = () => {
    setMessageHistory([]);
  };

  useEffect(() => {
    commandList.map((command, i) => {
      if (command === "help") {
        setMessageHistory([...messageHistory, <HelpMessage key={i} />]);
      }
      if (command === "clear") {
        setMessageHistory([]);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commandList]);

  return (
    <div className="h-full w-fit flex flex-col justify-end items-start mb-6 text-gray-400">
      {messageHistory.map((message, i) => {
        return (
          <div key={i} className="mb-4">
            {message}
          </div>
        );
      })}
      {!lastCommand && <p>Type help or -h to see the commands</p>}
    </div>
  );
}
