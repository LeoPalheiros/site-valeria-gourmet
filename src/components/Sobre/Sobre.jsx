import valeria from "../../assets/images/valeria/valeria.jpg"

export default function Sobre() {
    return (
        <section id="sobre" className="py-20">

            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Foto */}
                <img
                    src={valeria}
                    alt="Valéria"
                    className="rounded-xl shadow-lg"
                />

                {/* Texto */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Sobre a Valéria
                    </h2>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        A Valéria começou a produzir pipocas gourmet após aprender receitas artesanais e descobrir sua paixão pela confeitaria. O que iniciou como uma atividade complementar rapidamente conquistou clientes pela qualidade e sabor.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Cada pipoca é preparada com ingredientes selecionados, cuidado artesanal e alto padrão de qualidade, garantindo um produto especial para cada cliente e ocasião.
                    </p>
                </div>

            </div>

        </section>
    )
}
