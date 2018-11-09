declare module "@storybook/addon-actions" {
  export const actions: <T extends string>(
    ...args: T[]
  ) => { [key in T]: (...args: any[]) => void };
}
