export default function SectionHeaders({ subHeader, mainHeader }) {
    return (
        <>
            <h1 className="uppercase text-gray-600 font-semibold leading-4">
                {subHeader}
            </h1>

            <h2 className="font-bold text-4xl">
                {mainHeader}
            </h2>
        </>
    )
}