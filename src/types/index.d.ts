import { ReactNode } from "react";

export interface IChildrenComponent {
  children: ReactNode
}

export type searchEngine = {
  name: string,
  icon: string,
  link: string,
}
