import react from "react";
import "./Simulcast-season.css"

export default function Simulcast() {
    return (
        <div className="text center" >
            <div id="pad"></div>
            <div>
                <h2>Simulcast Anime</h2>
            </div>

            <div id="New-Anime">
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
                <Anime_template src="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg" name="Death Note" />
              

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