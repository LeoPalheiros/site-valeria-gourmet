const depoimentos = [
    {
        nome: "Maria Silva",
        comentario:
        "As pipocas são simplesmente maravilhosas! Qualidade impecável e sabor incrível.",
        imagem: "https://i.pravatar.cc/150?img=1",
    },
    {
        nome: "Juliana Souza",
        comentario:
        "Comprei para um evento e todos amaram. Com certeza comprarei novamente.",
        imagem: "https://i.pravatar.cc/150?img=5",
    },
    {
        nome: "Carlos Mendes",
        comentario:
        "Entrega rápida e produto perfeito. Recomendo demais!",
        imagem: "https://i.pravatar.cc/150?img=8",
    },
];

export default function Depoimentos() {
    return (
        <section id="depoimentos" className="py-24 bg-gray-50 fade-in">
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            O que nossos clientes dizem
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {depoimentos.map((item, index) => (
                <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 text-center"
                >
                <img
                    src={item.imagem}
                    alt={item.nome}
                    className="w-24 h-24 rounded-full mx-auto mb-5 object-cover shadow"
                />

                <h3 className="font-semibold text-lg mb-2">
                    {item.nome}
                </h3>

                {/* Estrelas */}
                <div className="flex justify-center mb-4 text-yellow-400 text-lg">
                    ★★★★★
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                    "{item.comentario}"
                </p>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}