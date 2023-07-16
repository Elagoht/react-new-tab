import { ReactNode } from "react";

export interface IChildrenComponent {
  children: ReactNode
}

export type searchEngine = {
  name: string,
  icon: string,
  link: string,
}

interface IPage {
  index?: number
  name: string
  link: string
}
