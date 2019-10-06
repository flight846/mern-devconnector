import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAlert } from '../../actions/alertActions';
import { login } from '../../actions/authActions';

const Login = ({ setAlert, login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        if (!email.length || !password.length) {
            setAlert('Fill in all fields', 'danger', 5000)
        } else {
            login({ email, password })
        }
    }

    // Redirect if logged in
    if (isAuthenticated) return <Redirect to='/dashboard' /> 

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><FaUser /> Sign into Your Account</p>
            <p>Email: fred@gmail.com<br/>Password: 123456</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="email" placeholder="Email Address" onChange={e => onChange(e)} name="email" value={email} />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        onChange={e => onChange(e)}
                        value={password}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
            </form>
            <p className="my-1">
                Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, login })(Login)
