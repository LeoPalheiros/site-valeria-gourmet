export default function PedidoCTA() {
    return (
        <section className="py-24 bg-green-500 text-white">

            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Faça seu pedido agora mesmo
                </h2>

                <p className="text-lg md:text-xl mb-10 opacity-90">
                    Produção artesanal, ingredientes selecionados e muito carinho em cada pacote.
                    Peça pelo WhatsApp e receba nossas pipocas gourmet fresquinhas.
                </p>

                <a
                    href="https://wa.me/5535997240095"
                    target="_blank"
                    className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition"
                >
                    Fazer Pedido no WhatsApp
                </a>

            </div>

        </section>
    )
}
