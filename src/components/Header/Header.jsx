import { useState } from "react";
import logo from "../../assets/images/logo-vp.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-[#f8f5f2] shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <img
            src={logo}
            alt="Valéria Palheiros Gourmet"
            className="h-14 md:h-16 object-contain"
            />

            <nav className="hidden md:flex gap-8 font-medium text-gray-700">
            <a href="#cardapio" className="hover:text-black transition">
                Cardápio
            </a>
            <a href="#sobre" className="hover:text-black transition">
                Sobre
            </a>
            <a href="#depoimentos" className="hover:text-black transition">
                Depoimentos
            </a>
            </nav>

            <a
            href="https://wa.me/5535997240095"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
            >
            Fazer Pedido
            </a>

            <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            >
            ☰
            </button>
        </div>

        {menuOpen && (
            <div className="md:hidden bg-[#f8f5f2] shadow-md px-6 pb-6 flex flex-col gap-4 text-gray-700 font-medium">
            <a href="#cardapio" onClick={() => setMenuOpen(false)}>
                Cardápio
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
                Sobre
            </a>
            <a href="#depoimentos" onClick={() => setMenuOpen(false)}>
                Depoimentos
            </a>
            <a
                href="https://wa.me/5535997240095"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white text-center py-2 rounded-full"
            >
                Fazer Pedido
            </a>
            </div>
        )}
        </header>
    );
}