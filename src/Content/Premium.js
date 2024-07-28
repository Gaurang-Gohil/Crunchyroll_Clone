import react, { useRef } from "react";
import left_arrow from './Images/Arrow-back.png';
import right_arrow from './Images/Arrow-forward.png';
import "./Premium.css"
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Gojo from "./Images/file.png";

export default function Premium() {

    const TopPicsTemplate = (props) => (
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
        <div>
            <div id="pad" className="text">
                name
            </div>
            <div className="center">
                <div className="flex">
                    <div>

                <h1 className="text" id="heading-premium">
                    Upgrade Your Anime Experience <br />with Premium
                </h1>
                <Button className="Z-index--1 anim-border" disabled={false} loading={false} onClick={() => { }} id="btn">
                    <div className="flex">
                        <img height="30px" width="30px" src="https://cdn-icons-png.freepik.com/256/3567/3567834.png?ga=GA1.1.871420525.1718428533&semt=ais_hybrid" />
                        <p>START MEGA FAN MEMBERSHIP</p>
                    </div>
                </Button>
                <p className="text">Your account will automatically renew at ₹99.00 per month. You may cancel at <br />any time.</p>
                    </div>
                    <div >
                        <img id="Head-premium"  src={Gojo}></img>
                    </div>
                </div>

                <div id="first-watch" className="text">
                    <p id="center" className="text center premium-fonts">Be the First to Watch</p>
                    <br></br>
                    <p>Stream full seasons of the top anime, simulcasts, Crunchyroll <br />Originals, and more!</p>
                </div>

                <div className='swipe no-pad'>

                    <div className="individual-swipe-home">
                        <Button variant="plain" onClick={scrollLeft} id="left-click">
                            <img height="50px" width="50px" src={left_arrow} />
                        </Button>
                    </div>
                    <div id="topPics" className='center carousel' ref={carouselRef}>

                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                        <TopPicsTemplate src="https://i.pinimg.com/564x/93/12/3f/93123fec667421ea5db5b01c1c51057d.jpg" name="Demon Slayer: Kimetsu no Yaiba" availabilityType="Series" />
                    </div>
                    <div className="individual-swipe-home">
                        <Button variant="plain" onClick={scrollRight} id="right-click">
                            <img height="50px" width="50px" src={right_arrow} />
                        </Button>
                    </div>
                </div>

                <div id="Anime-without-ads">
                    <div>
                    <div className="text premium-fonts"><p id="abc">Anime Without Ads</p></div>
                    <p className="text">Watch on Smart TVs, Playstation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players, and more.</p>
                    </div>
                    <div id="imgs">
                        <img src="https://static.crunchyroll.com/cr-acquisition/assets/img/landing/anime-without-ads-section/screen.webp"/>
                        <img id="consols" src="https://static.crunchyroll.com/cr-acquisition/assets/img/landing/anime-without-ads-section/devices.webp"/>
                    </div>
                </div>

                <div id="Membership" className="premium-fonts">
                    <p id="abc">Pick Your Premium</p>
                    <div className="flex">
                        <div height="200px" width="150px" id="fan">
                    <MembershipTemplate  membershipType="FAN" price="$7.99/mo"/>
                        </div>
                        <div height="300px" width="150px" id="Mega-fan">
                    <MembershipTemplate membershipType="MEGA FAN" price="$11.99/mo"/>
                        </div>
                        <div height="250px" width="150px" id="Super-fan">
                    <MembershipTemplate membershipType="SUPER FAN" price="$15.99/mo"/>
                        </div>
                    </div>
                </div>
                <br/>
                <p id="first-watch" className="text abc">Free trial offer valid for new and eligible subscribers. Plan automatically renews after trial period at the <br/>price selected in the plan comparison. You may cancel at any time. Restrictions and other terms apply, including changes to prices,<br/> discounts, content and features.</p>
            </div>
        </div>
    )

    function MembershipTemplate (props){
        function plusContent(){
            if(props.membershipType === "FAN"){
                return(
                    <div id="add-text">
                        <p>Stream on 1 device at a time</p>
                    </div>
                )
            }
            if(props.membershipType === "MEGA FAN"){
                return(
                    <div id="add-text">
                        <p>Stream on up to 4 devices at a time</p>
                        <p>Offline Viewing</p>
                        <p>Access Crunchyroll Game Vault, a catalog of free games</p>
                    </div>
                )
            }
            if(props.membershipType === "SUPER FAN"){
                return(
                    <div id="add-text">
                        <p>Stream on up to 4 devices at a time</p>
                        <p>Offline Viewing</p>
                        <p>Access Crunchyroll Game Vault, a catalog of free games</p>
                        <p>16% discount on Monthly Plan (billed every 12-months)</p>
                    </div>
                )
            }
        }
        return(
            <div id="MembershipTemplate">
                <p className="big-size">{props.membershipType}</p>
                <p className="big-size">{props.price}</p>
                <p id="lighten"> VAT INCUSIVE </p>
                <Button className="Z-index--1 anim-border" disabled={false} loading={false} id="btn">Go Premium</Button>
                <p>Stream the entire Crunchyroll library ad-free and watch new episodes shortly after Japan*</p>
                <div className="flex">
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <p>plus</p>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                    <hr/>
                </div>

                {plusContent()}

            </div>
        )
    }
}