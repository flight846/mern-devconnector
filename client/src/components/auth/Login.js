import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { login } from '../../actions/authActions';

const Login = ({ setAlert, login }) => {
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
            setFormData({
                email: '',
                password: '',
            })
            setAlert('Login success', 'success', 2000)
            // this.props.history.push('/login');
        }
    }

    return (
        <Fragment>
            <h1 className="large text-primary">Sign In</h1>
            <p className="lead"><FaUser /> Sign into Your Account</p>
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
                Don't have an acoount? <Link to="/register">Sign Up</Link>
            </p>
        </Fragment>
    )
}

export default connect(null, { setAlert, login })(Login)
