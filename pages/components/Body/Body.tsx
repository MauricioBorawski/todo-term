import { useContext } from "react";
import {
  MessageContext,
  MessageContextType,
} from "../../contexts/messageContext";

export function Body() {
  const { messageHistory } = useContext(MessageContext) as MessageContextType;

  return (
    <div className="h-full w-fit flex flex-col justify-end items-start mb-6 text-gray-400">
      {messageHistory.map((message) => message)}
    </div>
  );
}
