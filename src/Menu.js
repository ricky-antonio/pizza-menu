import "./Menu.css";
import pizzaData from "./data";
import Pizza from "./Pizza";

function Menu() {
    return (
        <div className="Menu">
            <h2>Menu</h2>
            {pizzaData.map((pizza) => (
                <Pizza
                    name={pizza.name}
                    ingredients={pizza.ingredients}
                    price={pizza.price}
                    photoName={pizza.photoName}
                    soldOut={pizza.soldOut}
                />
            ))}
        </div>
    )
}

export default Menu;