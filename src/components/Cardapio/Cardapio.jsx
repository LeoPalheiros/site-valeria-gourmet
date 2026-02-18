import ninho from "../../assets/images/produtos/ninho.jpg"
import chocolate from "../../assets/images/produtos/chocolate.jpg"
import coloridas from "../../assets/images/produtos/coloridas.jpg"

const produtos = [
    {
        nome: "Pipoca Gourmet de Ninho",
        descricao: "Pipoca caramelizada com leite Ninho",
        preco: "R$ 60,00 (1kg)",
        imagem: ninho
    },
    {
        nome: "Pipoca Gourmet de Chocolate",
        descricao: "Pipoca caramelizada com chocolate especial",
        preco: "R$ 60,00 (1kg)",
        imagem: chocolate
    },
    {
        nome: "Pipoca Doce Colorida",
        descricao: "Pipoca doce tradicional colorida",
        preco: "R$ 30,00 (1kg)",
        imagem: coloridas
    }
]

export default function Cardapio() {
    return (
        <section id="cardapio" className="py-20 bg-gray-50">

            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    Nosso Cardápio
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {produtos.map((produto, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow hover:shadow-xl transition p-5 flex flex-col"
                        >
                            <img
                                src={produto.imagem}
                                alt={produto.nome}
                                className="rounded-lg mb-4 w-full h-60 object-cover"
                            />

                            <h3 className="text-xl font-semibold mb-2">
                                {produto.nome}
                            </h3>

                            <p className="text-gray-500 mb-4">
                                {produto.descricao}
                            </p>

                            <p className="font-bold text-green-600 text-lg mb-6">
                                {produto.preco}
                            </p>

                            {/* Botão sempre alinhado */}
                            <a
                                href={`https://wa.me/5535997240095?text=Olá, quero pedir ${produto.nome}`}
                                target="_blank"
                                className="mt-auto block text-center bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 transition"
                            >
                                Pedir no WhatsApp
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
