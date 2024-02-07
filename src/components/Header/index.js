import { Link } from "react-router-dom";
import './style.css';

const Woman = ({ title, description }) => (
    <header>
        <Link to={"https://google.com"}>
            <h1>{title}</h1>
        </Link>
        <h2>{description}</h2>
    </header>
);

export default Woman;
