import { useState, useRef, MutableRefObject } from "react";
import { Commands } from "../../types/types";

export interface InputProps {
  dispatchCommand: (command: string) => void;
  setUserInput: (userInput: string) => void;
  lastCommand: Commands;
}

export function Input({
  dispatchCommand,
  setUserInput,
  lastCommand,
}: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const inputElement = useRef(null);

  function handleOnClickInputDisplay(
    ref: MutableRefObject<HTMLElement> | MutableRefObject<null>
  ) {
    if (ref.current) {
      ref.current.focus();
    }
    return undefined;
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (lastCommand !== "register") {
            dispatchCommand(inputValue);
          }
          setUserInput(inputValue);
          setInputValue("");
        }}
        className="w-0 h-0 opacity-0"
      >
        <input
          autoFocus
          ref={inputElement}
          value={inputValue}
          className="outline-none"
          placeholder="Type your command here..."
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </form>
      <div
        className="w-fit text-slate-300 px-2"
        onClick={() => {
          handleOnClickInputDisplay(inputElement);
        }}
      >
        {inputValue}
        <span className="border-r-8 animate-blink-caret"></span>
      </div>
    </>
  );
}
