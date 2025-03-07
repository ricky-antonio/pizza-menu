import "./Menu.css";
import pizzaData from "./data";
import Pizza from "./Pizza";

function Menu() {
    return (
        <div className="Menu">
            <h2>Menu</h2>
            <ul className="Menu-pizzas">
            {pizzaData.map((pizza, i) => (
                <Pizza pizzaObj={pizza} key={i}/>
            ))}
            </ul>
        </div>
    )
}

export default Menu;