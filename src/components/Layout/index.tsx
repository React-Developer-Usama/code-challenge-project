import React, { ReactNode } from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
interface Props {
    children: ReactNode;
}
const index = ({ children }: Props) => {
    return (
        <div>
            <NavBar />
            <section >{children}</section>
            <Footer />
        </div>
    )
}

export default index