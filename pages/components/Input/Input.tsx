import { useState, useRef, MutableRefObject, useContext } from "react";
import {
  CommandContext,
  CommandContextType,
} from "../../contexts/commandContext";
import { isValidCommand } from "../../types/types";

export interface InputProps {}

export function Input({}: InputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const { updateCommandHistory } = useContext(
    CommandContext
  ) as CommandContextType;

  const inputElement = useRef(null);

  function handleOnClickInputDisplay(
    ref: MutableRefObject<HTMLElement> | MutableRefObject<null>
  ) {
    if (ref.current) {
      ref.current.focus();
    }
    return undefined;
  }

  function validateCommand(userInput: string) {
    if (isValidCommand(userInput)) {
      updateCommandHistory(userInput);
    }
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          validateCommand(inputValue);
          setInputValue("");
        }}
        className="w-0 h-0 opacity-0"
      >
        <input
          autoFocus
          ref={inputElement}
          value={inputValue}
          className="outline-none  w-screen"
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
