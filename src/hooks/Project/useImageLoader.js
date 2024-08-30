// src/hooks/useImageLoader.js
import { useState, useEffect } from 'react';

const useImageLoader = (imageSrc) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = imageSrc;

        img.onload = () => setIsLoading(false);
        img.onerror = () => setIsLoading(false);
    }, [imageSrc]);

    return isLoading;
};

export default useImageLoader;
