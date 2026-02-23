import valeria from "../../assets/images/valeria/valeria.jpg";

export default function Sobre() {
    return (
        <section id="sobre" className="py-24 bg-white fade-in">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div className="flex justify-center">
            <img
                src={valeria}
                alt="Valéria Palheiros"
                className="rounded-2xl shadow-xl w-full max-w-md object-cover"
            />
            </div>

            <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sobre a Valéria
            </h2>

            <p className="text-gray-600 mb-5 leading-relaxed">
                A Valéria aprendeu a preparar pipocas gourmet através de receitas
                artesanais e descobriu ali uma verdadeira paixão pela confeitaria.
                O que começou como uma forma de complementar a renda se transformou
                em um negócio feito com dedicação e muito carinho.
            </p>

            <p className="text-gray-600 leading-relaxed">
                Cada pipoca é produzida com ingredientes selecionados, preparo
                cuidadoso e alto padrão de qualidade. O objetivo é entregar não
                apenas um produto, mas uma experiência especial em cada pacote.
            </p>

            <div className="mt-6 bg-gray-50 p-4 rounded-xl shadow-sm">
                <p className="text-green-600 font-semibold">
                ✔ Produção artesanal  
                <br />
                ✔ Ingredientes selecionados  
                <br />
                ✔ Qualidade garantida
                </p>
            </div>
            </div>

        </div>
        </section>
    );
}