import React from "react";
import Main from "./View/Main";
import {Routes, Route} from "react-router-dom";
import Layout from "./Components/Layout"

const App = () => {
    return (
        <Layout>

            <Routes>
                <Route exact path="/" element={<Main/>}/>

            </Routes>
        </Layout>

    );
};

export default App;