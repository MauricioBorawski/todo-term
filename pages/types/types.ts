const CommandTypes = [
  "help",
  "-h",
  "clear",
  "register",
  "finish_register_process",
  "login",
  "finish_login_process",
] as const;

export type Commands = typeof CommandTypes[number];

export type CommandList = Array<Commands>;

//Back End
//? Move this to a different file?

export type UserRegisterData = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginData = {
  email: string;
  password: string;
};

//TODO: Create UserData type from the PrimsaUser interface

// Typeguards

export function isValidCommand(userInput: string): userInput is Commands {
  return CommandTypes.includes(userInput as Commands);
}
