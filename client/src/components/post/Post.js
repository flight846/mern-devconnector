import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/postActions';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id)
    }, [getPost])

    return loading || post === null ? <Spinner /> : (
        <Fragment>
            <Link to="/posts" className="btn">Back to Posts</Link>
            <PostItem post={ post } showActions={ false } />
            <div className="comments">
                {
                    post.comments.map(comment => (
                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
                    ))
                }
            </div>
            <CommentForm postId={ post._id } />
        </Fragment>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const MapStateToProps = state => ({
    post: state.post
})

export default connect(MapStateToProps, { getPost })(Post)