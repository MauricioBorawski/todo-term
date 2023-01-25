import { useState } from "react";
import { Body, Input } from "./components";
import { useHandleCommands } from "./hooks";
import { useRegister } from "./hooks";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");

  const { commandList, dispatch } = useHandleCommands();
  useRegister(commandList, userInput);

  return (
    <main>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold underline text-slate-50">Term</h1>
        <div className="flex flex-col-reverse h-custom">
          <Input
            lastCommand={commandList[commandList.length - 1]}
            dispatchCommand={dispatch}
            setUserInput={(userInput) => {
              setUserInput(userInput);
            }}
          />
          <Body
            commandList={commandList}
            dispatch={dispatch}
            userInput={userInput}
          />
        </div>
      </div>
    </main>
  );
}
