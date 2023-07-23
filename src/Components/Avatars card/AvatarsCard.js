import React from 'react'

export default function AvatarsCard(props) {
  return (
    <div className='mx-auto'>
        <img src={props.src} alt="" className='w-80  '/>
        <div className="flex gap-5 mt-5">
            <img src={props.src2} alt="..." className='w-24 rounded-3xl'/>
            <img src={props.src3} alt="..." className='w-24 rounded-3xl'/>
            <img src={props.src4} alt="..." className='w-24 rounded-3xl'/>
        </div>
        <p className='font-bold text-white'>{props.title}</p>
        <div className="flex">
            <img src={props.src5} alt="..." className='w-6' />
            <p className='text-white'>{props.name}</p>
        </div>
    </div>
  )
}
