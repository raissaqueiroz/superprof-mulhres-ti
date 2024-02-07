import Woman from "../components/Woman";
import Header from "../components/Header";

import ada from '../assets/images/AdaLove.jpg';
import { Link } from "react-router-dom";
//import dodo from '../assets/images/Dorothy.jpg';

const mulheres = [
    {
        title: "Ada Lovelace",
        image: ada,
        description: "Poque a primeira programadora do mundo foi uma mulher: Ada Lovelace"
    },
    {
        title: "Fulaninha de Tal",
        image: ada,
        description: "Poque a primeira programadora do mundo foi uma mulher: Ada Lovelace"
    },
    {
        title: "A Tal da Fulaninha",
        image: ada,
        description: "Poque a primeira programadora do mundo foi uma mulher: Ada Lovelace"
    },
];

export default function Home(){
    return <div>
                <Header 
                title="Reprograma Teans" 
                description="Vamos programar o mundo?" />
                <section class="box-container">
                    <article class="box">
                        <p>Oi, eu sou a Raissa!</p>
                        <p>
                            <strong>
                                <em>
                                    Serei uma futura programadora!
                                </em>
                            </strong>
                        </p>
                    </article>    
                </section>
                <section class="women">
                    {mulheres.map(index => <Woman
                        avatar={index.image}
                        name={index.title}
                        description={index.description}
                    />)}
                </section>
                <footer>
                    <h4> 
                        By <Link to="https://www.linkedin.com/in/raissaqueiroz/" target="_blank">Raissa Queiroz</Link>
                    </h4>
                </footer>
            </div>    
}