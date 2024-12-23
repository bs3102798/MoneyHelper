export default function TeamPage() {
    return (
        <div>
            <section className="flex w-screen overflow-hidden mt-8 border-b border-light-gray-1 md:mt-32">
                <div className="mx-auto flex flex-col items-center justify-center ">
                    <div className="flex flex-col items-center justify-between space-y-16 sm:space-y-[80px] lg:space-x-[50px] lg:space-y-0 xl:space-x-[80px] lg:flex-row">
                        {/* Left Column - Button */}
                        <div className="flex w-full flex-1 shrink-0 flex-col space-y-4 sm:w-auto sm:space-y-6" >
                            {/* Expert Button */}
                            <div className="grid grid-cols-2 items-center justify-center gap-2 sm:gap-4">
                                <img className="w-60 h-60 rounded-md" src="/calculator.jpg" alt="calculator" />
                                <img className="w-60 h-60 rounded-md" src="/calculator.jpg" alt="calculator" />
                                <img className="w-60 h-60 rounded-md" src="/calculator.jpg" alt="calculator" />
                                <img className="w-60 h-60 rounded-md" src="/calculator.jpg" alt="calculator" />
                                <div className="flex w-full items-baseline justify-between rounded-full px-4 py-2 md:px-6 md:py-3 bg-genius-bar">
                                    <button className="primary text-base lg:text-xl">Ask an expert...</button>
                                </div>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-6 text-green-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>




                            </div>
                        </div>

                        {/* Right Column - Text and Link */}
                        <div className="itali">
                            <h2 className="font-bold text-4xl itali">Your team of finance experts</h2>
                            <p>Ask us anything money. Get personalized advice from our team of finance experts.</p>
                            <a href="/about/advice">
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}