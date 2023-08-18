import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ImageAnimation from "./Animation/ImageAnimation";
import Article from "./Article/Article";

function Home() {
    return (
        <div>
            <Header />
            <Article />
            <ImageAnimation />
            <Footer />
        </div>
    );

}
export default Home;