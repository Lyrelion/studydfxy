import * as components from "./index";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    StButton: typeof components.Button;
    StIcon: typeof components.Icon;
  }
}

export {};
