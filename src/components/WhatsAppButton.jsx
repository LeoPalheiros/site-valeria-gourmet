import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
    const numero = "5535997240095";

    return (
        <a
        href={`https://wa.me/${numero}`}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaWhatsapp size={28} />
        </a>
    );
}