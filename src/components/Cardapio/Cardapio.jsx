import ninho from "../../assets/images/produtos/ninho.jpg";
import chocolate from "../../assets/images/produtos/chocolate.jpg";
import coloridas from "../../assets/images/produtos/coloridas.jpg";

const numero = "5535997240095";

const produtos = [
    {
        nome: "Pipoca Gourmet de Ninho",
        descricao: "Pipoca caramelizada com leite Ninho",
        preco: "R$ 60,00 (1kg)",
        imagem: ninho,
    },
    {
        nome: "Pipoca Gourmet de Chocolate",
        descricao: "Pipoca caramelizada com chocolate especial",
        preco: "R$ 60,00 (1kg)",
        imagem: chocolate,
    },
    {
        nome: "Pipoca Doce Colorida",
        descricao: "Pipoca doce tradicional colorida",
        preco: "R$ 30,00 (1kg)",
        imagem: coloridas,
    },
];

export default function Cardapio() {
    return (
        <section id="cardapio" className="py-24 bg-gray-50 fade-in">
        <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Nosso Cardápio
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {produtos.map((produto, index) => (
                <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 p-6 flex flex-col"
                >
                <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="rounded-xl mb-5 w-full h-60 object-cover"
                />

                <h3 className="text-xl font-semibold mb-2">
                    {produto.nome}
                </h3>

                <p className="text-gray-500 mb-4 flex-grow">
                    {produto.descricao}
                </p>

                <p className="font-bold text-green-600 text-lg mb-6">
                    {produto.preco}
                </p>

                <a
                    href={`https://wa.me/${numero}?text=${encodeURIComponent(
                    `Olá, quero pedir ${produto.nome}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-center bg-green-500 text-white py-3 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition duration-300"
                >
                    Pedir no WhatsApp
                </a>
                </div>
            ))}
            </div>

        </div>
        </section>
    );
}