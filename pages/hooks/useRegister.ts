import { useState } from "react";
import { CommandList, UserRegisterData } from "../types/types";

export function useRegister(commandList: CommandList, userInput: string) {
  const [userData, setUserData] = useState<UserRegisterData>({
    name: "",
    password: "",
    email: "",
  });

  if (commandList[commandList.length - 1] === "register") {
    
  }
}
