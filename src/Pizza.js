import "./Pizza.css";

function Pizza({pizzaObj}) {
    const { name, ingredients, price, photoName, soldOut } = pizzaObj;

    return (
        <div className="Pizza">
            <img src={photoName} alt={name} />
            <li>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span> {soldOut && "Sold Out"}
            </li>
        </div>
    );
}

export default Pizza;
