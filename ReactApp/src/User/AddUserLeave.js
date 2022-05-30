import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoaderDesign from '../Admin/LoaderDesign'
import Authenticate from '../Authenticate/Authenticate'
import DashboardTopContent from '../Components/DashboardTopContent'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import SideNavbar from '../Components/SideNavbar'
import UserLeaveForm from './UserLeaveForm'

const AddUserLeave = () => {
    const { tokens } = Authenticate();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (tokens === undefined) {
            navigate('/');
        } else {
            setLoading(false);
        }
    }, [])
    if (loading) {
        return <LoaderDesign />
    }

    return (
        <>

            <div className="content-wrapper">
                <DashboardTopContent heading="Add-Leave-Request" />
                <UserLeaveForm />
            </div>
        </>)
}

export default AddUserLeave