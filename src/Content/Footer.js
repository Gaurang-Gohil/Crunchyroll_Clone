import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <div id="footerMain">
            <div id="moreLinks">
                <div>
                        <b>Navigation</b>
                        <section className="linkSection">
                        <p>Browse Populer</p>
                        <p>Brows Simulcast</p>
                        <p>Release Calander</p>
                        <p>News</p>
                        <p>Games</p>
                    </section>
                </div>

                <div>
                    <b>Contact With US</b>
                    <section className="linkSection">
                        <p>YouTube</p>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>TikTok</p>
                    </section>
                </div>

                <div>
                    <b>Account</b>
                    <section className="linkSection">
                        <p>Switch Profile</p>
                        <p>Watchlist</p>
                        <p>Crunchylist</p>
                        <p>History</p>
                        <p>My Account</p>
                        <p>Log Out</p>
                        <p>Community Guidelines</p>
                        <p>How our buisness works</p>
                    </section>
                </div>
            </div>
            <hr />

            <div id="endSection">
                <div className="help">
                <img width="180px" src="https://www.crunchyroll.com/build/assets/img/footer/sony_pictures_logo.png"/>
                    <p> | </p>
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>

                <p>&copy; Chrunchyroll, LLC</p>
                
            </div>
        </div>
    )
}