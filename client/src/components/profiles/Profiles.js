import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../actions/profileActions';
import { FaConnectdevelop } from 'react-icons/fa'
import ProfileItem from './ProfileItem';

const Profiles = ({ profile: { profiles, loading }, getProfiles }) => {
    useEffect(() => {
        getProfiles();
    }, [getProfiles])

    return (
        <Fragment>
            {
                loading ? <Spinner /> : 
                <Fragment>
                    <h1 className="large text-primary">Developers</h1>
                    <p className="lead">
                        <FaConnectdevelop />{' '}Browse and connect with developers
                    </p>
                    <div className="profiles">
                        {
                            profiles.length > 0 ? (
                                profiles.map(profile => (
                                    <ProfileItem key={profile._id} profile={profile}/>
                                ))
                            ) : <h4>No profiles found...</h4>
                        }
                    </div>
                </Fragment>
            }
        </Fragment>
    )
}

Profiles.propTypes = {
    profile: PropTypes.object.isRequired,
    getProfiles: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles)
