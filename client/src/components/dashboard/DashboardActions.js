import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaBlackTie, FaGraduationCap } from 'react-icons/fa'

const DashboardActions = () => {
    return (
        <div class="dash-buttons">
            <Link to="/edit-profile" className="btn btn-light"><FaUserCircle color="#17a2b8"/> Edit Profile</Link>
            <Link to="/add-experience" className="btn btn-light"><FaBlackTie color="#17a2b8"/> Add Experience</Link>
            <Link to="/add-education" className="btn btn-light"><FaGraduationCap color="#17a2b8"/> Add Education</Link>
        </div>
    )
}

export default DashboardActions
