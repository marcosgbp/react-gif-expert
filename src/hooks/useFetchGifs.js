import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export default function useFetchGifs(category) {

        const [images, setImages] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        
        const getImages = async ()=> {
          const newImages = await getGifs(category);
          setImages(newImages);
          setIsLoading(false);
        }
    
        //En un useEffect no se puede usar async y await
        useEffect(()=>{
            getImages();
        }, []); 

    return {
        images,
        isLoading
    }
}
