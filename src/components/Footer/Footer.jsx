export default function Footer() {
    return (
        <footer className="bg-[#f8f5f2] py-10 mt-20">
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">

                <p className="font-semibold text-lg mb-2">
                    Valéria Palheiros Gourmet
                </p>

                <p className="text-sm">
                    © {new Date().getFullYear()} Todos os direitos reservados
                </p>

            </div>
        </footer>
    )
}
