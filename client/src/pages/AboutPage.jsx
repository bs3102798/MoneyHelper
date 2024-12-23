import SectionHeaders from "../components/SectionHeaders";

export default function AboutPage() {
    return (
        <div>
            <section className=" flex items-center mt-8 py-5 justify-around ">
                <img className="w-72 h-72 rounded-md" src="/calculator.jpg" alt="calculator" />


                <div className="py-8 md:py-12">

                    <h1 className="text-3xl font-semibold"> Take control of <br /> Your Finances <br />with Confidence</h1>
                    <h3>Set personalized budgets, track expenses in real-time, <br />and achieve your savings goals effortlessly.
                        <br /> fix your bad spending habits.</h3>
                    <p>let us help</p>

                </div>


            </section>
            {/* <div className="bg-green-600  ">
                <h1 className="mt-8 mb-8 h-24 bold flex items-center justify-center font-bold itali">our valuse</h1>
                <section className="text-center justify-center my-16 " >
                    <p className="justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident, quas, nobis, temporibus asperiores facilis nam atque ad praesentium perspiciatis sapiente molestiae animi esse adipisci nisi inventore ab perferendis architecto.</p>
                </section>

            </div> */}
            <div className="bg-green-600">
                <div className="bg-green-600 flex items-center justify-center h-64 w-64 mx-auto rounded-md">
                    <section className="text-center text-white p-4">
                        <h1 className="text-3xl font-bold italic mb-4">Our Values</h1>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident, quas, nobis, temporibus asperiores facilis nam atque ad praesentium perspiciatis sapiente molestiae animi esse adipisci nisi inventore ab perferendis architecto.
                        </p>
                    </section>
                </div>
            </div>
            <section className=" flex items-center mt-8 py-5 justify-around ">
                <div className="py-8 md:py-12">
                    <h1 className="text-3xl font-semibold"> Take control of <br /> Your Finances <br />with Confidence</h1>
                    <h3>Set personalized budgets, track expenses in real-time, <br />and achieve your savings goals effortlessly.
                        <br /> fix your bad spending habits.</h3>
                    <p>let us help</p>

                </div>


                <img className="w-72 h-72 rounded-md" src="/calculator.jpg" alt="calculator" />
            </section>

        </div>
    )
}