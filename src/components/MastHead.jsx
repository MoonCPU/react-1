import React from "react";

const MastHead = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <video className='absolute w-full h-full object-cover' autoPlay loop muted>
                <source src="video1.mp4" type='video/mp4' />
            </video>
            <div className="p-12 font-bold text-center z-10 drop-shadow-[0_5px_3px_rgb(0,0,0,0.4)] flex flex-col items-center justify-center text-white">
                <h1 className="mb-6 text-4xl xl:text-5xl">Moon Hyuk Kang</h1>
                <h2 className="mb-2 text-2xl xl:text-3xl">19209988</h2>
            </div>
        </div>
    )
}

export default MastHead;