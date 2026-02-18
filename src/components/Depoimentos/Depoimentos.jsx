const depoimentos = [
    {
        nome: "Maria Silva",
        comentario: "As pipocas são simplesmente maravilhosas! Qualidade impecável e sabor incrível.",
        imagem: "https://i.pravatar.cc/150?img=1"
    },
    {
        nome: "Juliana Souza",
        comentario: "Comprei para um evento e todos amaram. Com certeza comprarei novamente.",
        imagem: "https://i.pravatar.cc/150?img=5"
    },
    {
        nome: "Carlos Mendes",
        comentario: "Entrega rápida e produto perfeito. Recomendo demais!",
        imagem: "https://i.pravatar.cc/150?img=8"
    }
]

export default function Depoimentos() {
    return (
        <section id="depoimentos" className="py-20 bg-gray-50">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    O que nossos clientes dizem
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {depoimentos.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
                        >
                            <img
                                src={item.imagem}
                                alt={item.nome}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />

                            <h3 className="font-semibold text-lg">
                                {item.nome}
                            </h3>

                            <p className="text-yellow-400 mb-3">
                                ★★★★★
                            </p>

                            <p className="text-gray-600">
                                "{item.comentario}"
                            </p>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}
