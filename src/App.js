import "./App.css";
import pizzaData from "./data";
import Pizza from "./Pizza";

function App() {
    return (
        <div className="App">
            <h1>working</h1>
            {pizzaData.map((pizza) => {
                return <Pizza
                            name={pizza.name}
                            ingredients={pizza.ingredients}
                            price={pizza.price}
                            photoName={pizza.photoName}
                            soldOut={pizza.soldOut}
                        />;
            })}
        </div>
    );
}

export default App;
