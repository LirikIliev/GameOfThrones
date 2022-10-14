import './Favorites.css';

import { Character } from '../Character/FavoriteCharacterElement';

import { Pagination } from '../Pagination/Pagination';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharAgain } from '../../redux/allPersons';
import { deleteCharacter } from '../../redux/favoritePersons';

export function Favorites(params) {
    let { favoriteCharacters } = useSelector((state) => state.favorites);

    let [currentPage, setCurrentPage] = useState(1);
    let [postPerPage] = useState(4);

    const dispatch = useDispatch();

    // remove some of the characters
    function removeFromFavorite(id) {
        let currentCharacter = favoriteCharacters.find(char => char.id == id);
        dispatch(addCharAgain(currentCharacter))
        dispatch(deleteCharacter(id))
    }

    // get current post 
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = favoriteCharacters.slice(indexOfFirstPost, indexOfLastPost);

    // change page
    function pagination(pageNumber) {
        setCurrentPage(pageNumber)
    };

    return (
        <section className="favorite-characters">
            <h2 className="favorites">My Favorites</h2>
            <section className="characters-container">
                {favoriteCharacters.length > 0 ? currentPosts.map(char => <Character key={char.id} name={char.name} title={char.title} image={char.image} id={char.id} removeFromFavorite={removeFromFavorite} />) : <p>You haven't favorites characters yet!</p>}
            </section>
            <section className="pagination-buttons">
                {favoriteCharacters.length >= 4 ? <Pagination postPerPage={postPerPage} totalPosts={favoriteCharacters.length} paginate={pagination} /> : ''}
            </section>
        </section>
    )
}