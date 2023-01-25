type HelpCommands = "help" | "-h";
type ClearCommand = "clear";
type RegisterCommand = "register" | "finish_register_process";
export type Commands = HelpCommands | ClearCommand | RegisterCommand;
export type CommandList = Array<Commands>;
export type InitialState = Record<"commands", CommandList>;

//Back End
export type UserRegisterData = {
    name: string,
    email: string,
    password: string,
}