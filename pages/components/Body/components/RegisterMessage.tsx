import { useContext, useEffect, useState } from "react";
import {
  MessageContext,
  MessageContextType,
} from "../../../contexts/messageContext";
import { UserRegisterData } from "../../../types/types";

export function RegisterMessage({
  userInput,
  dispatch,
}: {
  userInput: string;
  dispatch: (command: string) => void;
}) {
  const [userData, setUserData] = useState<UserRegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const { updateMessageHistory } = useContext(
    MessageContext
  ) as MessageContextType;

  const messages = {
    email: "Enter your email:",
    password: "Enter your password:",
    confirm: `Press Y to confirm if the data is correct: Username: ${userData.name}  Email: ${userData.email}`,
    error: "Sorry something went wrong",
    loading: "Your request is being processed please wait a minute",
  };

  function registerUserData(userData: UserRegisterData) {
    fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then(() => {
        updateMessageHistory(messages.loading);
      })
      .catch(() => {
        updateMessageHistory(messages.error);
      })
      .finally(() => {
        dispatch("finish_register_process");
      });
  }

  useEffect(() => {
    if (userData.name === "" && userInput !== "register") {
      setUserData({ ...userData, name: userInput });
      updateMessageHistory(messages.email);
    }

    if (userData.name && !userData.email) {
      setUserData({ ...userData, email: userInput });
      updateMessageHistory(messages.password);
    }

    if (userData.email && !userData.password) {
      setUserData({ ...userData, password: userInput });
      updateMessageHistory(messages.confirm);
    }

    if (userData.email && userData.name && userData.password) {
      //TODO: Call here to the BE for register an user
      if (userInput === "Y") {
        registerUserData(userData);
      }
      if (userInput === "n") {
        dispatch("finish_register_process");
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  return (
    <div>
      <p>Enter your username:</p>
    </div>
  );
}
