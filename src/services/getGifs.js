const APY_KEY = 'k0WUNnR1P5buYYsugmhELhe7uPLW7L17';

export default function getGifs({keyword = 'morty'} = {}){
    const API_GIFS =`https://api.giphy.com/v1/gifs/search?api_key=${APY_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(API_GIFS)
      .then(res => res.json())
      .then(response =>{
        const {data = []} = response;
        if(Array.isArray(data)){
            const infoGifs = data.map(image => {
                const {id,title} = image;
                const {url} = image.images.downsized_medium;
                return { id, title, url};
            })
            return infoGifs;
        }
      })
};