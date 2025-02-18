import { CardNew } from "./card_new"
import { useRef } from "react"
import { motion } from "framer-motion"
import "./nouveauProduit.css"

export function Nouveauproduit({ produits }) {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return <>
        <div className="d-flex justify-content-center mt-5"><h3><strong>nouveautés</strong></h3></div>
        <motion.div
            className="position-relative mt-2"
            style={{ maxWidth: "100%", overflow: "hidden" }}

            initial={{ opacity: 0, x: 50 }} // Départ caché en bas
            whileInView={{ opacity: 1, x: 0 }} // Animation vers visible
            transition={{ duration: 0.6, ease: "easeOut" }} // Transition fluide
            viewport={{ once: true, amount: 0.3 }} // S'exécute une seule fois quand 30% de l'élément est visible
        >
            <button className="scroll-btn left" onClick={scrollLeft}>❮</button>

            <div ref={scrollRef} className="d-flex gap-4 scroll-container"
            >
                {produits.map((produit) => (
                    <div className="flex-shrink-0 card-container" key={produit.id}>
                        <CardNew produit={produit} />
                    </div>
                ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>❯</button>
        </motion.div>
    </>
}