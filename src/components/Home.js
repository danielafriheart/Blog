import React from 'react'

function Home() {



    return (
        <section className='w-screen lg:py-10 py-5'>
            <div className='lg:w-[80vw] md:w-[80vw] w-[90vw] mx-auto h-[45vh] p-10 bg-slate-700 bg-[url("https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")] bg-cover'>
                <header className='lg:w-1/2 flex flex-col h-full justify-evenly'>
                    <h1 className='lg:text-5xl text-3xl'>Welcome to Library</h1>
                    <p className='font-thin text-lg'>
                        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.
                    </p>
                </header> 
            </div>
        </section>
    ) 
}

export default Home