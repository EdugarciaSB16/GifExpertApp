import {useEffect, useState} from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const [gifs, setGifs] = useState([])
    
    useEffect(() =>{
        getGifs()
    }, [])

    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=one+piece&api_key=pCJoVCalWZSXhpiLdTgKOEBDqCCzvOKN&limit=5`
        const res = await fetch( url )
        const { data } = await res.json()

        const gifsData = data.map( img => {
            return {
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
            }
        })

        setGifs(gifsData)
    }

    console.log(gifs)

    return (
        <div>
            <h3>{category}</h3>
                {
                    gifs.map( gif => (
                        <GifGridItem key={gif.id} {...gif}/>
                    ))
                }
        </div>
    );
};

export default GifGrid;