export const Card = ({timeA,TimeB,match}) => (

    <section id="content" className="container max-w-3xl p-4">

        <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
            <span className="text-sm md:text-base text-gray-700 font-bold">{match.time}</span>

            <div className="flex space-x-4 justify-center items-center">
                <span className="uppercase">{timeA.slug}</span>
                <img src={`/bandeiras/${timeA.slug}.png`}/>

                <input type="number" name="" id="" className=" bg-red-300/[0.2] w-[55px] h-[55px]  text-red-700 text-xl font-bold text-center" />

                <span className="text-red-500 font-bold">X</span>

                <input type="number" name="" id="" className=" bg-red-300/[0.2] w-[55px] h-[55px] text-red-700 text-xl font-bold  text-center" />

                <img src={`/bandeiras/${TimeB.slug}.png`} />
                <span className="uppercase">{TimeB.slug}</span>

            </div>

        </div>


    </section>
)