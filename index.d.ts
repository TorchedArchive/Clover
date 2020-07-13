declare module '@terminalfreaks/clover' {
  type Clover<T extends object> = { [P in keyof T]?: T[P][]; };
  function clover<T extends object>(args: string): Clover<T>;

  export = clover;
}