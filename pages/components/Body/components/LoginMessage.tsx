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

  function resetState() {
    setMessage(messages.email);
    setUserData({ email: "", password: "" });
  }

  useEffect(() => {
    if (userData.email === "" && userInput !== "login") {
      setUserData({ ...userData, email: userInput });
      setMessage(messages.password);
    }
    if (userData.email && !userData.password && userInput !== userData.email) {
      setUserData({ ...userData, password: userInput });
    }
    if (userData.email && userData.password) {
      fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(userData),
      }).then(async (data) => {
        // ? Handle the error manually by checking if ok. Fetch doesnt see 400 - 500 as errors
        if (data.ok) {
        } else {
          const res = await data.json();
          if (res.error === "password") {
            setMessage(
              "Bad credentials please. Either email or password were invalid."
            );
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInput, userData]);

  return <div>{message}</div>;
}
