export function Character({ name, title, image, id, removeFromFavorite }) {

    return (
        <article className="character">
            <h2 className="character-name">{name}</h2>
            {title.length > 0 ? <h3 className="character-title">{title.join(', ')}</h3> : <h3 className="character-title">Haven't title yet!</h3>}
            <img
                src={image}
                alt="character image"
                className="character-image"
            />
            <button onClick={() => removeFromFavorite(id)}>Remove</button>
        </article>
    );
}