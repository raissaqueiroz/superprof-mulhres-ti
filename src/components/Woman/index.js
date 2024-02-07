import './style.css';

const Woman = ({avatar, name, description}) => (
    <figure>
        <img src={avatar} alt={name} />
        <figcaption>
            {description}
        </figcaption>
     </figure>
);

export default Woman;