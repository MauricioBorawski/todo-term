import { useState, useRef, MutableRefObject, useEffect } from "react";

export function Input() {
  const [inputValue, setInputValue] = useState<string>(
    "Type your command here..."
  );

  const inputElement = useRef(null);

  function handleOnClickInputDisplay(
    ref: MutableRefObject<HTMLElement> | MutableRefObject<null>
  ) {
    if (ref.current) {
      ref.current.focus();
    }
    return undefined;
  }

  useEffect(() => {
    if (inputValue === "") {
      setInputValue("Type your command here...");
    }
  }, [inputValue]);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log("Submited")
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
        className="w-fit text-slate-300 px-2 border-r-8"
        onClick={() => {
          handleOnClickInputDisplay(inputElement);
        }}
      >
        {inputValue}
      </div>
    </>
  );
}
