
import Home from '../Pages/Home'
import Details from '../Pages/Details'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Index = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:slug/:id" element={<Details />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Index