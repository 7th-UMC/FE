import React, { useState, useEffect } from 'react';
import PhotoNot from "../../components/Photo/PhotoNot";
import PhotoYes from "../../components/Photo/PhotoYes";

const Photo = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="pageContainer" style={{ display: "flex", justifyContent: "center" }}>
            {width <= 1023 ? <PhotoNot /> : <PhotoYes />}
        </div>
    );
};

export default Photo;
