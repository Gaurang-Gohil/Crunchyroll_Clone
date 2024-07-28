import react from "react";
import "./New-anime.css"

export default function New(){
    return(
        <div className="text center" >
            <div id="pad"></div>
            <div>
                <h2>Newly added Anime</h2>
            </div>

            <div id="New-Anime">
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/>
                <Anime_template src="https://imageio.forbes.com/specials-images/imageserve/668c0a7f5ab461943c8dc586/First-look-at--My-Hero-Academia--You-re-Next--/960x0.jpg?height=996&width=711&fit=bounds" name="My Hero Academia"/> 
            </div>
        </div>
    )

    function Anime_template(props){
        return(
            <div id="Anime_template">
                <img src={props.src} height="300px" width="200px"/>
                <div id="no-center">
                <p>{props.name}</p>
                <p id="lighten">SUB|DUB</p>
                </div>
            </div>
        )
    }
}