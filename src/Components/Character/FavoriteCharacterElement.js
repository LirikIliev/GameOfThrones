export function Character({ name, title, image, id, removeFromFavorite }) {

    return (
        <article className="character">
            <h2 className="character-name">{name}</h2>
            {title ? <h3 className="character-title">{title}</h3> : ''}
            <img
                src={image}
                alt="character image"
                className="character-image"
            />
            <button onClick={() => removeFromFavorite(id)}>Remove</button>
        </article>
    );
}