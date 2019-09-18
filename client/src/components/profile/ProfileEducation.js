import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({ education: {
    school,
    degree,
    fieldofstudy,
    current,
    to,
    from,
    description
} }) => {
    return (
        <Fragment>
            <div className="my-1">
                <h3 className="text-dark">{ school }</h3>
                <p><Moment format='YYYY/MM/DD'>{ from }</Moment> - { !to ? 'current' : <Moment format='YYYY/MM/DD'>{ to }</Moment> }</p>
                <p><strong>Degree: </strong>{ degree }</p>
                <p><strong>Field of Study: </strong>{ fieldofstudy }</p>
                <p><strong>Description: </strong>{ description }</p>
            </div>
        </Fragment>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.array.isRequired,
}

export default ProfileEducation
