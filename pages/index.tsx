import { Body, Input } from "./components";
import { useHandleCommands } from "./hooks";

export default function Home() {
  const { commandList, dispatch } = useHandleCommands();

  return (
    <main>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold underline text-slate-50">
          Term
        </h1>
        <div className="flex flex-col-reverse h-custom">
          <Input dispatchCommand={dispatch} />
          <Body commandList={commandList} />
        </div>
      </div>
    </main>
  );
}
