import { Body, Input } from "./components";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-bold underline text-slate-50">
          To Do Term
        </h1>
        <div className="flex flex-col-reverse h-custom">
          <Input />
          <Body />
        </div>
      </div>
    </main>
  );
}
