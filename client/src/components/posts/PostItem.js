import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { FaThumbsUp, FaThumbsDown, FaTimes } from 'react-icons/fa'
import { addLike, removeLike, deletePost } from '../../actions/postActions'

const PostItem = ({ auth, post: { _id, text, name, avatar, user, likes, comments, date }, addLike, removeLike }) => {
    return (
        <div className="post bg-white p-1 my-1">
            <div>
                <Link to="/profile">
                    <img
                        className="round-img"
                        src={ avatar }
                        alt=""
                    />
                    <h4>{ name }</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    { text }
                </p>
                <p className="post-date">
                    Posted on { <Moment format="yyyy/mm/dd">{ date }</Moment> }
                </p>
                <button type="button" className="btn btn-light" onClick={e => addLike(_id)}>
                    <FaThumbsUp />{' '}
                    <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </button>
                <button type="button" className="btn btn-light" onClick={e => removeLike(_id)}>
                    <FaThumbsDown />{' '}
                </button>
                <Link to={`/post/${_id}`} className="btn btn-primary">
                    Discussion{' '}{comments.length > 0 && <span className='comment-count'>{comments.length}</span> }
                </Link>
                {!auth.loading && user === auth.user._id && 
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={e => deletePost(_id)}
                    >
                        <FaTimes />
                    </button>
                }
            </div>
        </div>
    )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)