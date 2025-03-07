const Etoiles = ({ reviews }) => {
    if (!reviews || reviews.length === 0) return null;

    // 🔹 Calcul de la moyenne des avis sur 6 étoiles
    const moyenneSur5 = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
    const noteSur6 = (moyenneSur5 / 5) * 6; // Convertir en note sur 6

    return (
        <div>
            {[...Array(6)].map((_, index) => (
                <i
                    key={index}
                    className={`fa-solid fa-star ${index < Math.round(noteSur6) ? "text-warning" : "text-secondary"}`}
                ></i>
            ))}
        </div>
    );
};

export default Etoiles;