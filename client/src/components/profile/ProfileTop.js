import React from 'react'
import PropTypes from 'prop-types'
import { FaGlobe, FaTwitter, FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa'

const ProfileTop = ({ 
    profile: {
        status,
        company,
        location,
        website,
        social,
        user: { name, avatar }
    } 
}) => {
    return (
        <div className="profile-top bg-primary p-2">
            <img
                className="round-img my-1"
                src={ avatar }
                alt=""
            />
            <h1 className="large">{ name }</h1>
            <p className="lead">{ status } { company && <span>at { company }</span> } </p>
            <p>{ location }</p>
            <div className="icons my-1">
                { website && 
                    <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="fa-2x" />
                    </a> }
                { social && social.twitter && 
                    <a href={`https://www.twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="fa-2x" />
                    </a> }
                { social && social.facebook && 
                    <a href={`https://www.facebook.com/${social.facebook}`} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="fa-2x" />
                    </a> }
                { social && social.linkedIn && 
                    <a href={`https://wwww.linkedin.com/${social.linkedIn}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="fa-2x" />
                    </a> }
                { social && social.youtube && 
                    <a href={`https://www.youtube.com/${social.youtube}`} target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="fa-2x" />
                    </a> }
                { social && social.instagram && 
                    <a href={`https://wwww.instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="fa-2x" />
                    </a> }
            </div>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileTop
