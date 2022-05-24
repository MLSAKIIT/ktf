import React from 'react'

interface Props {
    name?: string;
}

export const OcTeamMember = ({name}: Props) => {
  return (
    <div className="flex flex-col items-center gap-4">
        <img src="https://source.unsplash.com/random" className="w-44 h-44 rounded-full" />
        <h3 className="font-semibold text-lg">{name||"Name"}</h3>
    </div>
  )
}
