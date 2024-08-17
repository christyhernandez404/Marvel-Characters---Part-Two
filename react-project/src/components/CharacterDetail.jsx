import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function CharacterDetail() {
    const {id} = useParams();
    const [hero, setHero] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchHero = async () => {
        try{

        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d33c0b97e209d2bad157f9fe7fd76b8f&hash=6f81279c9d2690cf7280ef207a3dc7bb`);

        console.log(response.data);
        setHero(response.data.data.results[0]);
        setLoading(false);
        } catch (error){
        console.error("error fetching heroes", error);
        }
    }

        fetchHero();
    }, [id])

    if(loading){
        return <h3>Loading...please wait</h3>
    }

    return (
        <div>
            <br/>
            <Link to={'/characters'}>Go Back to Characters</Link>
            <br/>

            <div>
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    width="200" alt={hero.name}/>

                <h3>{hero.name}</h3>

                {hero.description &&
                    <div>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </div>
                }

                <h4>Comics:</h4>
                {hero.comics.items.map(comic => (
                    <div key={comic.resourceURI}>
                        {comic.name}
                    </div>
                ))}
            </div>
        </div>
    )



}

export default CharacterDetail;