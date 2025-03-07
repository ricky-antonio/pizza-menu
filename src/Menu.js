import "./Menu.css";
import pizzaData from "./data";
import Pizza from "./Pizza";

function Menu() {
    return (
        <div className="Menu">
            <h2>Menu</h2>
            <p>Authentic Italian cuisine. All from our stone ove, all organic, all delicious.</p>
            <ul className="Menu-pizzas">
            {pizzaData.map((pizza, i) => (
                <Pizza pizzaObj={pizza} key={i}/>
            ))}
            </ul>
        </div>
    )
}

export default Menu;