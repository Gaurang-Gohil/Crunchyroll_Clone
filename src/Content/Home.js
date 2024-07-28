import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import importedMainImg from './Images/KimetsuNoYaibaWallpaper.jpg';
import demonSlayer_logo from "./Images/Demon-slayer-logo.png";
import onePiece from './Images/One_piece_bg.jpg';
import onePiece_logo from "./Images/One-piece-logo.png";
import Button from '@mui/material/Button';
import left_arrow from './Images/Arrow-back.png';
import right_arrow from './Images/Arrow-forward.png';



function Home() {
    const [divNum, setDivNum] = React.useState(0);

    const imgSrc = [
        [demonSlayer_logo, importedMainImg, "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself....."],
        [onePiece_logo, onePiece, "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!"]
    ];

    const handleChange = (direction) => {
        if (direction === 'minusOne' && divNum > 0) {
            setDivNum(divNum - 1);
        } else if (direction === 'plusOne' && divNum < imgSrc.length - 1) {
            setDivNum(divNum + 1);
        }
    };

    const IntroAnimes = (props) => (
        <div id="mainScrollingItems">
            <div id="Details">
                <img height="50%" width="50%" src={props.logo} alt="No Image" />
                <br />
                <p id="detail">{props.detail}</p>
                <br />
                <Button className="Z-index--1 anim-border" disabled={false} loading={false} onClick={() => { }} id="btn">Watch S1 E1</Button>
            </div>
            <div id="mainImg">
                <img height="600px" width="700px" src={props.mainImg} alt="Image" />
            </div>
        </div>
    );

    const  TopPicsTemplate = (props) => (
        <div id="TopPicsTemplate" className='anim-border inner'>
            <Link to="/Series/DemonSlayer" className='Crousel-temp-link'>
                <img src={props.src} width="20%" />
                <section>{props.name}</section>
                <section id="lightColor">{props.availabilityType}</section>
            </Link>
        </div>
    );

        const carouselRef = useRef(null);

        const scrollLeft = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({
                    left: -carouselRef.current.clientWidth,
                    behavior: 'smooth'
                });
            }
        };

        const scrollRight = () => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({
                    left: carouselRef.current.clientWidth,
                    behavior: 'smooth'
                });
            }
        };
    

        return (

            <div className="OverAllLook">
                <div id="pad">myname</div>
                    <div id="MainDiv">
                    <div className='swipe'>
                        <div className="individual-swipe-home">
                            <Button className="Z-index--1" variant="plain" onClick={() => handleChange('minusOne')} id="left-click">
                                <img height="100px" width="100px" src="https://cdn-icons-png.freepik.com/256/3550/3550501.png?ga=GA1.1.871420525.1718428533&semt=ais_hybrid" alt="Left arrow" />
                            </Button>
                        </div>
                        <div width="90%">
                            <IntroAnimes mainImg={imgSrc[divNum][1]} logo={imgSrc[divNum][0]} detail={imgSrc[divNum][2]} />
                        </div>
                        <div className='individual-swipe-home'>
                            <Button className="Z-index--1" variant="plain" onClick={() => handleChange('plusOne')}>
                                <img height="100px" width="100px" src="https://cdn-icons-png.freepik.com/256/3550/3550513.png?ga=GA1.1.871420525.1718428533&semt=ais_hybrid" alt="Right arrow" />
                            </Button>
                        </div>
                    </div>
                    <h2 className='text' id="topPicsText">Top picks for you</h2>
                    <br />
                    <div className='swipe no-pad'>
                    
                    <div className="individual-swipe-home">
                            <Button variant="plain" onClick={scrollLeft} id="left-click">
                            <img height="50px" width="50px" src={left_arrow}/>
                            </Button>
                        </div>
                    <div id="topPics" className='center carousel' ref={carouselRef}>

                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Sub|Dub" />
    
                    </div>
                    <div className="individual-swipe-home">
                            <Button variant="plain" onClick={scrollRight} id="right-click">
                            <img height="50px" width="50px" src={right_arrow}/>
                            </Button>
                        </div>
                    {/* <Button variant="text" onClick={scrollRight} className="scroll-btn right"><img src={right_arrow}/></Button> */}
                    </div>
                    <div id="crousel" className='center anim-border'>
                        <Link to="">
                            <img width="100%" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=2700/cr/desktop_large/314d70a8-ae01-45a1-8d17-7ab78bb323f7.png"></img>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

export default Home;
