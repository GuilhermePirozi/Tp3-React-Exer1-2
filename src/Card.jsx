import React from 'react';
import "./Card.css"

const CardApp = ({ nome, descricao }) => {

    return (
        <section className="paiDeTodos">
            <div className="cardImg"></div>
            <div className="cardInfo">
                <h2 className="card-titulo">{nome}</h2>
                <p className="card-descricao">{descricao}</p>
            </div>
            <button style={{ backgroundColor: "darkBlue", border: "1px solid Black", borderRadius: "20px" }} onClick={(but) => but.target.style.backgroundColor = "cyan"}>Info</button>
        </section>
    );
};

export default CardApp;