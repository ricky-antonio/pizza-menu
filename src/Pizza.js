import "./Pizza.css";

function Pizza(props) {
    const { name, ingredients, price, photoName, soldOut } = props;

    return (
        <div className="Pizza">
            <div>
                <img className="Pizza-img" src={photoName} alt={name} />
                <h3>{name}</h3>
                <p>{ingredients}</p>
            </div>
        </div>
    );
}

export default Pizza;
