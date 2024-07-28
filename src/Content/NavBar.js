import react from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css"
import search from "./Images/search_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png"
import bookmark from "./Images/bookmark.png";
import profile from "./Images/Profile.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function NavBar() {

    const [anchorEl, setAnchorEl] = react.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div id="MainNavBar" className="flex-class">
            <div id="MainNavBarContent" className="flex-class">

                <div className="flex-class">
                    <Link to="/Home" className="link">
                        <div className="flex-class">
                            <img height="40px" width="40px" src="https://cdn-icons-png.freepik.com/256/15047/15047712.png?ga=GA1.1.871420525.1718428533&semt=ais_hybrid" />
                            <section id="Head" className="text exo-2">Crunchyroll</section>
                        </div>
                    </Link>
                    <div id="Browse" className="Select text">
                        <Button
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Browse
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleClose} component={Link} to="/Browse/Most-popular/Popular-anime">Popular</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/Browse/Most-popular/New-anime">New</MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/Browse/Most-popular/Simulcast-season">Simulcast Season</MenuItem>
                        </Menu>
                    </div>
                    <Link to="/Games" className="link">GAMES</Link>
                    
                </div>

                <div className="flex-class">
                    <Link to="/Premium" className="link">
                        <div className="flex-class">
                            <img height="30px" width="30px" src="https://cdn-icons-png.freepik.com/256/3126/3126495.png?ga=GA1.1.871420525.1718428533&semt=ais_hybrid"></img>
                            <div>
                                <section id="text_go">Go</section>
                                <section className="text">Premium</section>
                            </div>
                        </div>
                    </Link>
                    <div >
                        <img src={search} height="30px" width="30px" />
                    </div>
                    <div>
                        <img height="30px" width="30px" src={bookmark} />
                    </div>
                    <div>
                        <Link to="/Profile" className="link">
                            <img height="30px" width="30px" src={profile} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}