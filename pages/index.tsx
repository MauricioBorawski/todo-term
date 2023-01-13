import { useState } from "react";
import { Body, Input } from "./components";
import { useHandleCommands } from "./hooks";

export default function Home() {
  const [userInput, setUserInput] = useState<string>("");

  const { commandList } = useHandleCommands(userInput);

  return (
    <main>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold underline text-slate-50">
          To Do Term
        </h1>
        <div className="flex flex-col-reverse h-custom">
          <Input setUserInput={setUserInput} />
          <Body commandList={commandList} />
        </div>
      </div>
    </main>
  );
}
