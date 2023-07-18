import { ReactNode } from "react";

export interface IChildrenComponent {
  children: ReactNode
}

export type searchEngine = {
  name: string,
  icon: string,
  link: string,
}
interface IPageIndexless {
  name: string
  link: string
}

interface IPage extends IPageIndexless {
  index: number
}

type ISettings = {
  background: {
    mouseInteraction: boolean
    type: 0 | 1 | 2
    color: string
    url: string
  },
  text: {
    custom: boolean
    customText: string
  },
  blur: 0 | 1 | 2 | 3
}