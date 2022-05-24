import { ChildrenProps } from "@interfaces/index"
import { ReactNode } from "react"


export const Main = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full bg-gray-900">
        {children}
    </div>
  )
}
