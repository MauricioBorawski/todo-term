import { useState, useRef, MutableRefObject } from "react";

export interface InputProps {
  setUserInput: (command: string) => void;
}

export function Input({ setUserInput }: InputProps) {
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

  function handleSubmitInput(
    ref: MutableRefObject<HTMLElement> | MutableRefObject<null>
  ) {
    if (ref.current) {
      ref.current.nodeValue = "";
    }
    return undefined;
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUserInput(inputValue);
          setInputValue("");
          handleSubmitInput(inputElement);
        }}
        className="w-0 h-0 opacity-0"
      >
        <input
          autoFocus
          ref={inputElement}
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
