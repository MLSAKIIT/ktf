import { ChildrenProps } from '@interfaces/index'
import React from 'react'

interface Props extends ChildrenProps {
    tier: "gold" | "silver"
}

export const TierBox = ({ children }: Props) => {
  return (
    <div className="">
        {children}
    </div>
  )
}
