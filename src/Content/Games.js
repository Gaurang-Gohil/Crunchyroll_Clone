import react from "react";
import { Link } from 'react-router-dom';
import "./Games.css"
import Button from '@mui/material/Button';
import left_arrow from './Images/Arrow-back.png';
import right_arrow from './Images/Arrow-forward.png';

export default function Games() {
    const [divNum, setDivNum] = react.useState(0);

    const imgSrc = [
        "https://img.tapimg.net/market/images/87f9f29b5a801d63432f7467fc5d28b1.jpg?imageView2/2/w/1080/h/1080/q/80/format/jpg/interlace/1/ignore-error/1",
        "https://pbs.twimg.com/media/GRU5TArXwAA3bRW.jpg:large"
    ];

    const handleChange = (direction) => {
        if (direction === 'minusOne' && divNum > 0) {
            setDivNum(divNum - 1);
        } else if (direction === 'plusOne' && divNum < imgSrc.length - 1) {
            setDivNum(divNum + 1);
        }
    };

    return (
        <div>
            <div id="pad"></div>
            <div id="Swipe">
                <div className="individual-swipe left-swipe">
                    <Button className="Z-index--1" variant="plain" onClick={() => handleChange('minusOne')} id="left-click">
                        <img height="100px" width="100px" src={left_arrow} alt="Left arrow" />
                    </Button>
                </div>

                <div id="mainImg">
                    <img src = {imgSrc[divNum]} width = "100%"/>
                </div>

                <div className='individual-swipe right-swipe'>
                    <Button className="Z-index--1" variant="plain" onClick={() => handleChange('plusOne')}>
                        <img height="100px" width="100px" src={right_arrow} alt="Right arrow" />
                    </Button>
                </div>
            </div>

            <div id="FilterSection" className="filter">
                <div id="filterText" className="text">
                <p><b>Anime meets Arcade at Crunchyroll Games!</b></p>
                </div>
                <div>
                    <div id="filter-options">
                    <Button variant="outlined" className="filter-btn">All</Button>
                    <Button variant="outlined" className="filter-btn">Free to play</Button>
                    <Button variant="outlined" className="filter-btn">Crunchyroll game vault</Button>
                    </div>

                    <div className="text">
                        <h2>Newest Games</h2>
                    </div>

                    <div id="games">
                        <GameTemplate src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Dawn_of_the_Monsters_cover_art.jpg/220px-Dawn_of_the_Monsters_cover_art.jpg" name="DAWN OF THE MONSTERS"></GameTemplate>
                        <GameTemplate src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Dawn_of_the_Monsters_cover_art.jpg/220px-Dawn_of_the_Monsters_cover_art.jpg" name="DAWN OF THE MONSTERS"></GameTemplate>
                        <GameTemplate src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Dawn_of_the_Monsters_cover_art.jpg/220px-Dawn_of_the_Monsters_cover_art.jpg" name="DAWN OF THE MONSTERS"></GameTemplate>
                        <GameTemplate src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/Dawn_of_the_Monsters_cover_art.jpg/220px-Dawn_of_the_Monsters_cover_art.jpg" name="DAWN OF THE MONSTERS"></GameTemplate>
                    </div>
                </div>
            </div>
        </div>
    )

    function GameTemplate(props){
        return(
            <div id="GameTemplate">
                <div className="templateBorder">
                <img src={props.src} id="img-border" width="350px" height="400px" className="templateBorder"/>
                </div>
                <p className="text">{props.name}</p>
            </div>
        )
    }
}