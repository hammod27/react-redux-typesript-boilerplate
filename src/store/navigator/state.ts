export enum NavigationAction {
    none = "none",
    back = "back",
    forward = "forward",
    replace = "replace",
    clearAndReplace = "clear"
  }
  
  export interface INavigatorState {
    nonce: number;
    location: string;
    action: NavigationAction;
    depth: number;
  }
  