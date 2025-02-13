import { Card } from "./card"
import { useRef } from "react"
import "./nouveauProduit.css"

export function Nouveauproduit({produits}){
    
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
        <div className="position-relative mt-2" style={{ maxWidth: "100%", overflow: "hidden" }}>
            <button className="scroll-btn left" onClick={scrollLeft}>❮</button>
            
            <div ref={scrollRef} className="d-flex gap-4 scroll-container">
                {produits.map((produit) => (
                    <div className="flex-shrink-0 card-container" key={produit.id}>
                        <Card produit={produit} />
                    </div>
                ))}
            </div>

            <button className="scroll-btn right" onClick={scrollRight}>❯</button>
        </div>
    </>
}