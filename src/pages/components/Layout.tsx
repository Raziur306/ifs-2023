import React from 'react'
import ResponsiveDrawer from '../components/ResponsiveDrawer'
const Layout = (props:{children:any}) => {
    return (
        <>
        <ResponsiveDrawer/>
        {props.children}
        </>
    )
}

export default Layout