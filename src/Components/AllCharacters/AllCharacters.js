import './AllCharacters.css';
import { useState, useEffect } from 'react';

import { Character } from '../Character/CharacterElement';
import { Pagination } from '../Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, removeCharacterFromAllCollection } from '../../redux/allPersons';
import { addCharacter } from '../../redux/favoritePersons';

export function AllCharacters() {
    let [currentPage, setCurrentPage] = useState(1);
    let [postPerPage] = useState(4);

    let { characters } = useSelector((state) => state.counter);
    let { favoriteCharacters } = useSelector((state) => state.favorites);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://api.got.show/api/show/characters')
            .then(res => res.json())
            .then(result => {
                result.forEach((el, i) => el.index = i);
                for (const ch of favoriteCharacters) {
                    result = result.filter(el => el.id !== ch.id);
                };
                dispatch(setCharacters(result));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    // get current post 
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = characters.slice(indexOfFirstPost, indexOfLastPost);

    // change page
    function pagination(pageNumber) {
        setCurrentPage(pageNumber)
    };

    function addToFavorite(data) {
        let currentCharacter = characters.find(char => char.id == data)
        dispatch(addCharacter(currentCharacter));
        dispatch(removeCharacterFromAllCollection(data));
    };

    return (
        <section className="all-characters">
            <h2 className="all-characters-title">All Characters</h2>
            <section className="all-characters-container">
                {characters.length > 0 ? currentPosts.map((char) => <Character name={char.name} title={char.titles} image={char.image} key={char.id} id={char.id} addToFavorite={addToFavorite} />) : <h2>Loading....</h2>}
            </section>
            <section className="all-character-pagination-buttons">
                {characters.length >= 4 ? <Pagination postPerPage={postPerPage} totalPosts={characters.length} paginate={pagination} /> : ""}
            </section >
        </section >
    );
};