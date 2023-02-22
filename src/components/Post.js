import React from 'react'
import Card from './Card'

function Post() {
    const img = "https://images.unsplash.com/photo-1485359466996-ba9d9b4958b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

    return (
        <section className='w-screen'>
            <div className='lg:w-[80vw] md:w-[80vw] w-[90vw] mx-auto grid lg:grid-cols-2 gap-5'>
                <Card
                    cardCategory={"Novel"}
                    cardTitle={"This is a Novel"}
                    cardDate={"Feb 17th"}
                    cardContent={"Written by: Esuola Daniel"}
                    image={img}
                />
                <Card
                    cardCategory={"Novel"}
                    cardTitle={"This is a Novel"}
                    cardDate={"Feb 17th"}
                    cardContent={"Written by: Esuola Daniel"}
                    image={img}
                />
            </div>
        </section>
    )
}

export default Post