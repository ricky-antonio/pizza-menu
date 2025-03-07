import "./Pizza.css";

function Pizza(props) {
    const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;

    return (
        <div className="Pizza">
            <img src={photoName} alt={name} />
            <li>
                <h3>{name}</h3>
                <p>{ingredients}</p>
                <span>{price}</span>
            </li>
        </div>
    );
}

export default Pizza;
