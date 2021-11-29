import React from 'react'
import "./Cards.css"
import { Link } from 'react-router-dom';
const Cards = ({ results, page }) => {

    let display;

    if (results) {
        display = results.map((char) => {
            const { id, name, image, status, species, origin, location, type } = char

            const badgeStyle = function () {
                if (status === "Alive") {
                    return { background: "#6a994e" }
                }
                else if (status === "Dead") {
                    return { background: "#e63946" }
                }
                else {
                    return { background: "#343a40" }
                }
            }()


            return <Link
                to={`${page}${id}`}
                page={page}
                key={id}
                className="card-container">
                <span className="badge"
                    style={badgeStyle}
                >{status}</span>
                <img src={image} alt={name} className="card-image" />

                <div className="card-info">
                    <span className="triangle"></span>
                    <h2>{name} </h2>
                    <h4>Species:</h4> {type ? <span>{species} ({type})</span> : <span>{species}</span>}
                    <h4>origin:</h4> <span>{origin.name}</span>
                    <h4>Last seen:</h4> <span>{location.name}</span>

                </div>

            </Link>
        }

        )//results.map
    }
    else {
        display = "Unfortunately It will probably apear in next season."
    }


    return (
        <div className="cards-container">
            {display}
        </div>
    )
}

export default Cards
