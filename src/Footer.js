import "./Footer.css";

function Footer() {
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    return (
        <footer className="Footer">
            {isOpen ? (
                <div className="order">
                    <p>We are now open!</p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>
                    We're happy to welcome you between {openHour}:00 and{" "}
                    {closeHour}:00.
                </p>
            )}
        </footer>
    );
}

export default Footer;
