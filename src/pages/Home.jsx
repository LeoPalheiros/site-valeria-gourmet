import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Cardapio from "../components/Cardapio/Cardapio"
import Sobre from "../components/Sobre/Sobre"
import Depoimentos from "../components/Depoimentos/Depoimentos"
import PedidoCTA from "../components/PedidoCTA/PedidoCTA"
import Footer from "../components/Footer/Footer"

export default function Home() {
    return (
        <div className="pt-24">
            <Header />
            <Hero />
            <Cardapio />
            <Sobre />
            <Depoimentos />
            <PedidoCTA />
            <Footer />
        </div>
    )
}

