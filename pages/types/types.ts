type HelpCommands = "help" | "-h";
type ClearCommand = "clear";
type RegisterCommand = "register" | "finish_register_process";
type LoginCommand = "login" | "finish_login_process";
export type Commands =
  | HelpCommands
  | ClearCommand
  | RegisterCommand
  | LoginCommand;
export type CommandList = Array<Commands>;
export type InitialState = Record<"commands", CommandList>;

//Back End
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