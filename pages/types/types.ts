export type HelpCommands = "help" | "-h";
export type Commands = HelpCommands;
export type CommandList = Array<Commands>;

//Back End
export type UserRegisterData = {
    name: string,
    email: string,
    password: string,
}