import { Icon } from "../../components"
const Input = ({name, label, ...props}) => (
    <div className="flex flex-col ">
            <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
            <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1" />
    </div>
)

export const Login = () => {
    return (
        <div>
            <header className="flex justify-center p-4 border-b border-b-red-300">
                <img src="/logo/logo-fundo-branco.svg" alt="" className="w-32 md:w-40" />
            </header>
            <main className="container max-w-xl p-4">
                <div className="p-4">
                    <Icon name="arrowLeft"/>
                    <h2 className="text-xl font-bold">
                        Entre na Sua Conta
                    </h2>
                </div>
                <form className="space-y-6">
                   <Input
                   type="text"
                   name="email"
                   label="Seu E-mail"
                   placeholder="Digite seu e-mail"
                   />

                    <Input
                        type="password"
                        name="password"
                        label="Digite sua senha"
                        placeholder="Digite sua senha"
                    />
                    <button className=" w-full text-white text-center bg-red-500  px-6 py-3 rounded-xl">
                            Criar minha conta
                    </button>
                </form>
            </main>

        </div>
    )
}