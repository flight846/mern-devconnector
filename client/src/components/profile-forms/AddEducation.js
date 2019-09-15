import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { FaCodeBranch, } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profileActions'

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    })

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = e => {
        e.preventDefault()
        addEducation(formData, history);
    }

    return (
        <Fragment>
            <h1 class="large text-primary"> Add Your Education </h1>
            <p class="lead">
                <FaCodeBranch /> Add any school or bootcamp you have attended
            </p>
            <small>* = required field</small>
            <form class="form" onSubmit={(e) => handleSubmit(e)}>
                <div class="form-group">
                    <input type="text" placeholder="* School or Institute" name="school" value={school} onChange={(e) => handleChange(e)} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="* Degree or Certificate" name="degree" value={degree} onChange={(e) => handleChange(e)} required />
                </div>
                <div class="form-group">
                    <input type="text" placeholder="Field of Study" name="fieldofstudy" value={fieldofstudy} onChange={(e) => handleChange(e)} />
                </div>
                <div class="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="from" value={from} onChange={(e) => handleChange(e)} />
                </div>
                <div class="form-group">
                    <p>
                        <input
                            type="checkbox"
                            name="current"
                            value={current}
                            checked={current}
                            onChange={() => {
                                setFormData({ ...formData, current: !current });
                                toggleDisabled(!toDateDisabled);
                            }}
                        />{' '}Current Study
                    </p>
                </div>
                <div class="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="to" value={to} onChange={(e) => handleChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div class="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={(e) => handleChange(e)}
                    ></textarea>
                </div>
                <input type="submit" class="btn btn-primary my-1" value="submit" />
                <Link class="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </Fragment>
    )
}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
