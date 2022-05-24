import React from 'react'
import { BiLeftArrow } from 'react-icons/bi'
import { OcTeamMember } from './OcTeamMember'
import { useNavigate } from 'react-router-dom'

export const Ktf = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center pt-8 text-white relative bg-about-ktf bg-cover bg-no-repeat">
        <div className="w-11/12 min-h-screen">
            <div className="flex relative justify-center items-center">
                <BiLeftArrow size={45} color="white" className="absolute left-0 cursor-pointer" onClick={() =>{
                    navigate('/home')
                }}/>
                <h1 className="text-4xl w-fit font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-teal-500">
                    KIIT TECH FEST
                </h1>
            </div>
            <h3 className="mt-12 text-xl font-semibold">What is KTF ?</h3>
            <div className="rounded-2xl bg-white/20 p-4 mt-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames pharetra amet suspendisse pellentesque. Massa odio lacus erat laoreet. Pulvinar pharetra facilisis vulputate facilisis fermentum pretium etiam. Nulla laoreet laoreet sit pharetra scelerisque magna eget placerat ac. A orci quam quam sagittis lobortis nunc. Gravida interdum amet neque ac ut turpis gravida feugiat augue. Semper iaculis amet, venenatis, ut quisque pretium, hendrerit venenatis. Quis scelerisque nisl mi justo eros consequat sed egestas.
                </p>
            </div>
            <h3 className="mt-12 text-xl font-semibold">OC TEAM</h3>
            <div className="rounded-2xl bg-white/20 p-4 px-8 mt-4 flex flex-wrap gap-12">
                <OcTeamMember/>
                <OcTeamMember/>
                <OcTeamMember/>
                <OcTeamMember/>
                <OcTeamMember/>
            </div>
            <h3 className="mt-12 text-xl font-semibold">COMMUNITY COLLABORATIONS</h3>
            <div className="rounded-2xl bg-white/20 p-4 mt-4">
                
            </div>
        </div>
    </div>
  )
}
