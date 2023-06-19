import { Link } from "react-router-dom";
import HomeItem from "../HomeItem/HomeItem";
import './Home.css'
import Cabezera from "../Cabezera/Cabezera";
const Home = () => {
    return (
        <div className="homeCat">
            <Cabezera/>
            <div className="tituloContainer">
                <h1>Nuestros productos</h1>
            </div>
            <div className="catContainer">
                <HomeItem name="Pastas" categoria="1" img='/img/sorrentinossalchicha.jpg' />
                <HomeItem name="Tartas" categoria="2" img='/img/tarta.jpeg' />
                <HomeItem name="Tablas" categoria="3" img='/img/TablaCopia.jpg' />
                <HomeItem name="Pizzas y Empanadas" categoria="4" img='/img/pizza.jpg' />
            </div>
            
        </div>
    )
}

export default Home