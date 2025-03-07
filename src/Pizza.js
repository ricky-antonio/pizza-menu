import "./Pizza.css";

function Pizza({pizzaObj}) {
    const { name, ingredients, price, photoName, soldOut } = pizzaObj;

    return (
        <div className={`Pizza ${soldOut && "sold-out"}`}>
            <img src={photoName} alt={name} />
            <li>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{soldOut ? "SOLD OUT" : price}</span>
            </li>
        </div>
    );
}

export default Pizza;
