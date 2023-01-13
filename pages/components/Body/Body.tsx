import { CommandList } from "../../hooks";

export interface BodyProps {
  commandList: CommandList;
}

export function Body({ commandList }: BodyProps) {
  console.log(commandList);

  return (
    <div className="h-full w-full flex justify-center items-end mb-4 text-gray-400">
      <p>Type help or -h to see the commands</p>
    </div>
  );
}
