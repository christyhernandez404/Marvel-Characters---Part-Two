import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/CharacterList.css';

const CharacterList = () => {
    const [characters, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=4&ts=1&apikey=b97ba94173991a29c43d20160bc378b1&hash=c73d1dea3fa3833da7dd6b35c9b160b0');
                setHeroes(response.data.data.results); 
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchHeroes(); 
    }, []); 

    if (loading) {
        return <h3>Loading characters...please wait</h3>;
    }

    return (
        <div>
            <h3>Characters</h3>
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} className="grid-item">
                        <img 
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        width="200" 
                        alt={character.name} 
                        className="thumbnail"/>
                        <p>{character.name}</p>
                        <Link to={`/characters/${character.id}`}>View Details</Link>
                    </div>
            ))}
            </div>
        </div>
    );
};

export default CharacterList;
