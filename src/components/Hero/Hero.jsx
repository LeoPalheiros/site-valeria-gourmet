import heroBg from "../../assets/images/hero/hero-bg.jpg";

export default function Hero() {
    return (
        <section
        id="home"
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center px-6 fade-in"
        style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl text-white">

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Valéria Palheiros Gourmet
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            Sabores artesanais feitos com carinho para momentos especiais
            </p>

            <a
            href="https://wa.me/5535997240095"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 hover:scale-105 transition duration-300"
            >
            Fazer Pedido no WhatsApp
            </a>

        </div>
        </section>
    );
}