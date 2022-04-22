import React from "react";
import Main from "./View/Main";
import {Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout"
import AboutUs from "./View/AboutUs";
import Collections from "./View/Collections";
import Collection2020 from "./View/Collection2020";
import EveningDress from "./View/AboutDress";
import News from "./View/News";
import Help from "./View/Help";
import PublicOffer from "./View/PublicOffer";
import Cart from "./View/Cart";
import AboutDress from "./View/AboutDress";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="collection2020" element={<Collection2020/>}/>
                <Route path="about_dress" element={<AboutDress/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="help" element={<Help/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="public_offer" element={<PublicOffer/>}/>
            </Routes>
        </Layout>

    );
};

export default App;