declare module '@terminalfreaks/clover' {
  type Clover<T extends object> = (args: string) => { [x in keyof T]: T };
  export = Clover;
}