import { useEffect, useState } from "react";
import { UserRegisterData } from "../../../types/types";

export function RegisterMessage({
  userInput,
  dispatch,
}: {
  userInput: string;
  dispatch: (command: string) => void;
}) {
  const [message, setMessage] = useState<string>("Enter your username:");
  const [userData, setUserData] = useState<UserRegisterData>({
    name: "",
    email: "",
    password: "",
  });

  const messages = {
    email: "Enter your email:",
    password: "Enter your password:",
    confirm: `Press Y to confirm if the data is correct: Username: ${userData.name}  Email: ${userData.email} Password: ${userData.password}`,
  };

  useEffect(() => {
    if (userData.name === "" && userInput !== "register") {
      setUserData({ ...userData, name: userInput });
      setMessage(messages.email);
    }

    if (userData.name && !userData.email) {
      setUserData({ ...userData, email: userInput });
      setMessage(messages.password);
    }

    if (userData.email && !userData.password) {
      setUserData({ ...userData, password: userInput });
      setMessage(messages.confirm);
    }

    if (userData.email && userData.name && userData.password) {
      //TODO: Call here to the BE for register an user
      dispatch("finish_register_process");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
