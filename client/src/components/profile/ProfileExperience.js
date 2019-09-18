import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({ experience: {
    company,
    title,
    location,
    current,
    to,
    from,
    description
} }) => {
    return (
        <Fragment>
            <div className="my-1">
                <h3 className="text-dark">{ company }</h3>
                <p><Moment format='YYYY/MM/DD'>{ from }</Moment> - { !to ? 'current' : <Moment format='YYYY/MM/DD'>{ to }</Moment> }</p>
                <p><strong>Position: </strong>{ title }</p>
                <p><strong>Description: </strong>{ description }</p>
            </div>
        </Fragment>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,
}

export default ProfileExperience
