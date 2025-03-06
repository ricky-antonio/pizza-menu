function Pizza(props) {
    return (
        <div className="Pizza">
            <h2>{props.name}</h2>
            <img src={props.photoName} alt={props.name}/>
        </div>
    )
};

export default Pizza;