import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import profilePic from './Images/profile-pic.png'; // Replace with your profile picture

function Profile() {
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'Anime lover and aspiring pirate king!',
        favorites: ['Demon Slayer', 'One Piece'],
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('User Info Updated:', userInfo);
    };

    return (
        <div className="profile-page">
            <div id="pad"></div>
            <div className="profile-section">
                <img src={profilePic} alt="Profile" className="profile-pic" />
                <h2>{userInfo.name}</h2>
                <p>{userInfo.email}</p>
                <p>{userInfo.bio}</p>
                <h3>Favorites</h3>
                <ul>
                    {userInfo.favorites.map((anime, index) => (
                        <li key={index}>{anime}</li>
                    ))}
                </ul>
                <Link to="/" className="back-to-home">Back to Home</Link>
            </div>
            <div className="account-details">
                <h3>Update Your Information</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Bio:
                        <textarea
                            name="bio"
                            value={userInfo.bio}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={userInfo.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Update Info</button>
                </form>
            </div>
        </div>
    );
}

export default Profile;
