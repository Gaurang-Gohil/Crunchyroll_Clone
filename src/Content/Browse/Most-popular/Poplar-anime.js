import react from "react";
import "./Popular-anime.css"

export default function Popular() {
    return (
        <div className="text center" >
            <div id="pad"></div>
            <div>
                <h2>Most Popular Anime</h2>
            </div>

            <div id="New-Anime">
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />
                <Anime_template src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkyvkom3MAhlbva1Oh4cd16mD1KV0-4NESw&s" name="One Piece" />

            </div>
        </div>
    )

    function Anime_template(props) {
        return (
            <div id="Anime_template">
                <div >
                    <img id="img-border" src={props.src} height="300px" width="200px" />
                </div>
                <div id="no-center">
                    <p>{props.name}</p>
                    <p id="lighten">SUB|DUB</p>
                </div>
            </div>
        )
    }
}