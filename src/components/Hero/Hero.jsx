export default function Hero() {
    return (
        <section className="w-full min-h-[80vh] flex items-center justify-center bg-gray-100">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Valéria Palheiros Gourmet
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6">
                    Sabores artesanais feitos com carinho para momentos especiais
                </p>
                <a
                    href="https://wa.me/5535997240095"
                    target="_blank"
                    className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                    Fazer Pedido no WhatsApp
                </a>
        </div>
    </section>
	)
}
