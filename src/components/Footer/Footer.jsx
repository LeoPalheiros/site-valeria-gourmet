export default function Footer() {
    const numero = "5535997240095";

    return (
        <footer className="bg-[#f8f5f2] pt-16 pb-10 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

            <h3 className="font-bold text-xl text-gray-800 mb-3">
            Valéria Palheiros Gourmet
            </h3>

            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Pipocas gourmet artesanais feitas com carinho para tornar seus momentos ainda mais especiais.
            </p>

            <a
            href={`https://wa.me/${numero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-green-600 font-semibold hover:underline transition"
            >
            Fale conosco pelo WhatsApp
            </a>

            <div className="border-t border-gray-300 mt-10 pt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Valéria Palheiros Gourmet — Todos os direitos reservados
            </div>

        </div>
        </footer>
    );
}