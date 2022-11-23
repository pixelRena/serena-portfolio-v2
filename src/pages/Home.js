export default function Home() {
    return(
        <div className="text-white grid place-items-center h-screen">
                <div className="circle-base relative h-48 w-48 rounded-full border-4 border-white shadow-lg shadow-gray-900 md:h-48 md:w-48 lg:h-128 lg:w-128">
                    <div className="circle-wave absolute top-0 left-0 w-full h-full bg-sky-500 rounded-full overflow-hidden border-4 border-sky-500"></div>
                </div>
                <div className="w-full flex justify-center items-center absolute text-5xl mix-blend-overlay md:text-5xl lg:text-8xl">devXserena</div>
        </div>
    )
};