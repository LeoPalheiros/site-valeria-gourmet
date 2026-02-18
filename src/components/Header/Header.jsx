import logo from "../../assets/images/logo.png"

export default function Header() {
    return (
        <header className="w-full bg-[#f8f5f2] shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <img
                    src={logo}
                    alt="Valéria Gourmet"
                    className="h-12"
                />

                <nav className="hidden md:flex gap-8 font-medium text-gray-700">
                    <a href="#cardapio" className="hover:text-black transition">Cardápio</a>
                    <a href="#sobre" className="hover:text-black transition">Sobre</a>
                    <a href="#depoimentos" className="hover:text-black transition">Depoimentos</a>
                </nav>

                <a
                    href="https://wa.me/5535997240095"
                    target="_blank"
                    className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
                >
                    Fazer Pedido
                </a>

            </div>
        </header>
    )
}
