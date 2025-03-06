import "./Pizza.css";

function Pizza(props) {
    const {name, ingredients, price, photoName, soldOut} = props;

    return (
        <div className="Pizza">
            <h2>{name}</h2>
            <img className="Pizza-img" src={photoName} alt={name}/>
        </div>
    )
};

export default Pizza;