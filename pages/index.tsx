import { useState } from "react";
import { Body, Input } from "./components";
import { MessageProvider } from "./contexts/messageContext";

export default function Home() {
  return (
    <MessageProvider>
      <main>
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold underline text-slate-50">Term</h1>
          <div className="flex flex-col-reverse h-custom">
            <Input />
            <Body />
          </div>
        </div>
      </main>
    </MessageProvider>
  );
}
