
import { Card, Icon, DateSelect  } from "../../components"





export const Profile =() => (
   <>


             <header className="bg-red-500 text-white">

                <div className="container max-w-3xl  flex justify-between p-4">

                <img src="/logo/logo-fundo-vermelho.svg" alt="" className="w-28 md:w-40" />
                
               

                </div>

            </header>

            <main className="space-y-6">

                <section id="header" className="bg-red-500 text-white ">
                <div className="container max-w-3xl space-y-2 p-4">
                    <a href="/dashboard">
                   <Icon name="arrowLeft" className="w-10"/>
                    </a>

                    <h3 className="text-2xl font-bold">Hugo Silva</h3>

                    </div>

                </section>
                <section id="content" className="container max-w-3xl p-4">
                <h2 className="text-xl font-bold text-red-500">Seus Palpites</h2>


                <DateSelect />

                

               


                    <div className="space-y-4">

                    <Card
                    timeA={{ slug: 'sui'}}
                    TimeB={{ slug: 'cam'}}
                    match={{time: '7:00'}}
                    
                    />

                <Card
                    timeA={{ slug: 'uru' }}
                    TimeB={{ slug: 'cor' }}
                    match={{ time: '10:00' }}
                    
                    />
                <Card
                    timeA={{ slug: 'por' }}
                    TimeB={{ slug: 'gan' }}
                    match={{ time: '13:00' }}
                    
                    />

                <Card
                    timeA={{ slug: 'bra' }}
                    TimeB={{ slug: 'ser' }}
                    match={{ time: '16:00' }}
                    
                    />
                    </div>


                </section>

                

            </main>

   </>
)