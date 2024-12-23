import { Link } from "react-router-dom";
import SectionHeaders from "../components/SectionHeaders";
import { useContext } from "react";
import { UserContext } from "../UserContext";


export default function IndexPage() {
    const { user } = useContext(UserContext)

    //pgjs
    return (
        <>
            <section className=" flex items-center mt-8 py-5 justify-around ">
                <div className="py-8 md:py-12">

                    <h1 className="text-3xl font-semibold"> Budgeting <br /> and tracking <br />made easy</h1>
                    <h3>create a custom budget,
                        monitor your <br />bills and spending , and save automatically.
                        <br /> fix your bad spending habits.</h3>
                    <p>let us help</p>
                    <div className="flex gap-4 text-md mt-6">

                        <button className="flex justify-center bg-green-500 uppercase flex items-center gap-4 text-white px-4 py-2 rounded-full">
                            {user ? (
                                <button className="flex justify-center bg-green-500 uppercase flex items-center gap-4 text-white px-4 py-2 rounded-full">
                                    <Link to="/account">Get started</Link>
                                </button>
                            ) : (
                                <button className="flex justify-center bg-green-500 uppercase flex items-center gap-4 text-white px-4 py-2 rounded-full">
                                    <Link to="/register">Join today</Link>
                                </button>
                            )}

                        </button>





                    </div>
                </div>


                <img className="w-72 h-72 rounded-md" src="/calculator.jpg" alt="calculator" />
            </section>

            <section className="text-center my-16" >
                <SectionHeaders
                    subHeader={'Dont hesitate'}
                    mainHeader={'Contact us'}

                />
                <div className="mt-8">
                    <SectionHeaders
                        subHeader={'Call'} />
                    <a className="text-4xl underline text-gray-500" href="tel:+23 898 5555">
                        +23 898 5555
                    </a>
                </div>
            </section>
        </>
    )
}