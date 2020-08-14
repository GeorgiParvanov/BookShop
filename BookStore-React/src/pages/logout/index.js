import React, { useContext } from 'react'
import { useHistory } from "react-router-dom"
import PageLayout from '../../components/page-layout'
import UserContext from '../../Context'

const LogoutPage = () => {
    const context = useContext(UserContext)
    const history = useHistory()

    const logOut = () => {
        context.logOut()
        history.push('/')
    }

    return (
        <PageLayout>
            {logOut()}
        </PageLayout>
    )
}

export default LogoutPage