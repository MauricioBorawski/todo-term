import { useEffect, useState } from "react";

export function LoginMessage({
  userInput,
  dispatch,
}: {
  userInput: string;
  dispatch: (command: string) => void;
}) {
  const messages = {
    email: "Please enter your email:",
    password: "Please enter your password:",
    error: "Something with the credentials went wrong",
  };

  const [message, setMessage] = useState(messages.email);
  const [userData, setUserData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (userData.email === "" && userInput !== "login") {
      setUserData({ ...userData, email: userInput });
      setMessage(messages.password);
    }
    if (!userData.password) {
      setUserData({ ...userData, password: userInput });
    }
    if (userData.email && userData.password) {
      fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(userData),
      }).then((data) => {
        console.log(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput, userData]);

  return <div>{message}</div>;
}
