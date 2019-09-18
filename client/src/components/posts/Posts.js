import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPosts } from '../../actions/postActions'
import Spinner from '../layout/Spinner'

const Posts = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts()
    }, [getPosts])

    return (
        <div>
            <Spinner />
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.posts
})

export default connect(mapStateToProps, { getPosts })(Posts)