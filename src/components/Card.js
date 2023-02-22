import React from 'react'

function Card({ cardTitle, cardContent, image, link, cardCategory, cardDate }) {
    return (
        <div className='border border-slate-300 flex h-[30vh]'>
            <div className='p-5 flex flex-col justify-evenly grow'>
               <p className='font-bold text-orange-500'>{cardCategory}</p>
               <h1 className='text-2xl'>{cardTitle}</h1>
               <em className='text-sm font-light'>{cardDate}</em>
               <p>{cardContent}</p>
            </div>
            <div className='bg-slate-500'>
                <img src={image} alt="" className='w-full h-full' />
            </div>
        </div>
    )
}

export default Card