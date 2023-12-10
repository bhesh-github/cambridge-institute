import React from "react";


const OtherBanner = ({ bannerImg = "", text = "" }) => {
    return (
        <div className="other-banner">
            <img src={bannerImg} alt="" className="banner-img" />
            <div className="overlay">
                <div className="text-wrapper">
                    <h2 className="page-name">{text}</h2>
                </div>
            </div>
        </div>
    );
};

export default OtherBanner;
