export default function QuestionsPage() {
    return (
        <>
            <section className="flex items-center justify-center ">
                <div>
                    <p className="text-4xl mt-10 font-bold itali">How can we help</p>

                </div>
            </section>
            <div className="w-full flex justify-center mt-8 gap-8 mb-8">
                <section className="">
                    <ul className="grid grid-cols-4 gap-10 ">
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white w-full mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali">The basics</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Budgeting</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Cash</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Instant</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Saving</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Investing</h4>
                            <p className="block-item-description"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Protect</h4>
                            <p className="block-item-description font-bold itali"></p>
                        </li>
                        <li className="bg-green-600 h-24 w-24 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white  w-full  mt-4 mb-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>

                            <h4 className="text-center text-white font-bold itali ">Advice</h4>
                            <p className="block-item-description"></p>
                        </li>
                    </ul>

                </section>
            </div>

            <section className="mt-8 mb-8">
                <h3 className="text-4xl bold flex items-center justify-center font-bold itali">Commonly asked questions</h3>
                <ul className=" flex items-center justify-center justify-around mt-8">
                    <li className="font-bold itali">
                        Resetting your password

                    </li>

                    <li className="font-bold itali">Getting set up</li>
                    <li className="font-bold itali">What can I ask Genius</li>
                </ul>
            </section>

        </>


    )
}