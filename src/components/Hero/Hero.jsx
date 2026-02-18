import heroBg from "../../assets/images/hero/hero-bg.jpg"

export default function Hero() {
    return (
        <section
            className="relative w-full h-[85vh] flex items-center justify-center text-center"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 px-6 max-w-3xl text-white">

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Valéria Palheiros Gourmet
                </h1>

                <p className="text-lg md:text-xl text-gray-200 mb-8">
                    Sabores artesanais feitos com carinho para momentos especiais
                </p>

                <a
                    href="https://wa.me/5535997240095"
                    target="_blank"
                    className="inline-block bg-green-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition"
                >
                    Fazer Pedido no WhatsApp
                </a>

            </div>
        </section>
    )
}
