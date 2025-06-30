import React from "react";
import ArtistWorks from "./ArtistWorks";

export default function Works() {
    return (
        <div>
            <ArtistWorks name="Starry Night" image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/970px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" year="1889" />
            <ArtistWorks name="Sunflowers" image="https://media.overstockart.com/cache/data/product_images/VG8157-1000x1000.jpg" year="1888" />

        </div>
    );
}