import React, { Fragment } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
    return (
        <Fragment>
            <center>
                <h1 className="x-large text-primary">
                    <FaExclamationTriangle />{' '}Page Not Found</h1>
                <p className="large">Sorry, this page does not exist</p>
            </center>
        </Fragment>
    )
}

export default NotFound
