import { Card, Icon } from "../../components"

export const Dashboard =() => (
   <div className="">


             <header className="bg-red-500 text-white">

                <div className="container max-w-3xl  flex justify-between p-4">

                <img src="/logo/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
                
                <a href="/profile"> 
                <Icon name="profile" className="w-10" />                
                </a>

                </div>

            </header>

            <main>

                <section id="header" className="bg-red-500 text-white ">
                <div className="container max-w-3xl space-y-2 p-4">

                   <span>Olá Hugo</span>
                    <h3 className="text-2xl font-bold">Qual é o seu Palpite?</h3>

                    </div>

                </section>
                <section id="content" className="container max-w-3xl p-4">

                    <Card
                    timeA={{ slug: 'sui'}}
                    TimeB={{ slug: 'cam'}}
                    match={{time: '7:00'}}

                    />


                </section>

                

            </main>

   </div>
)