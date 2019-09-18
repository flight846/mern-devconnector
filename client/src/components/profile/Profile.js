import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profileActions'
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'

const Profile = ({ match, getProfileById, profile: { profile, loading }, auth }) => {
    useEffect(() => {
        getProfileById(match.params.id)
    }, [getProfileById, match.params.id])

    return (
        <Fragment>
            { profile === null || loading ? (
                <Spinner />
            ) : (
                <Fragment>
                    <Link to="/profiles" className="btn btn-light">Back to profiles</Link>
                    { auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && <Link to="/edit-profile" className="btn btn-dark">Edit profile</Link> }
                    <div className="profile-grid my-1">
                        <ProfileTop profile={profile}/>
                        <ProfileAbout profile={profile}/>
                        { profile.experience.length > 0 ? (
                                <div className="profile-xp bg-white p-2">
                                    <h2 className="text-primary">Experience</h2>
                                    { profile.experience.map(exp => (
                                        <ProfileExperience key={exp._id} experience={exp}/>
                                    )) }
                                </div>
                            ) : (
                                null
                            ) 
                        }
                        { profile.education.length > 0 ? (
                                <div className="profile-xp bg-white p-2">
                                    <h2 className="text-primary">Education</h2>
                                    { profile.education.map(edu => (
                                        <ProfileEducation key={edu._id} education={edu}/>
                                    )) }
                                </div>
                            ) : (
                                null
                            ) 
                        }

                        { profile.githubusername && <ProfileGithub username={profile.githubusername}/> }
                    </div>
                </Fragment>
            ) }
        </Fragment>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
})

export default connect(mapStateToProps, { getProfileById } )(Profile)
    