export default function PedidoCTA() {
    const numero = "5535997240095";

    return (
        <section className="py-28 bg-gradient-to-r from-green-500 to-green-600 text-white fade-in">
        <div className="max-w-4xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Faça seu pedido agora mesmo
            </h2>

            <p className="text-lg md:text-xl mb-12 opacity-95 max-w-2xl mx-auto">
            Produção artesanal, ingredientes selecionados e muito carinho em cada pacote.
            Peça pelo WhatsApp e receba nossas pipocas gourmet fresquinhas.
            </p>

            <a
            href={`https://wa.me/${numero}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-110 transition duration-300"
            >
            Fazer Pedido no WhatsApp
            </a>

        </div>
        </section>
    );
}