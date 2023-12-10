import React from "react";
import GalleryCard from "./GalleyCard";

const Gallery = () => {
  return (
    <div className="gallery">
      <h1 className="gallery-heading">Gallery</h1>
      <p className="gallery-desc">
        Here are some of the pictures of our team and events
      </p>
      <div className="gallery-card-wrapper">
        <GalleryCard />
        {/* <div style={{ height: "100%", backgroundColor: "green" }}></div>
        <div style={{ height: "100%", backgroundColor: "red" }}></div> */}
      </div>
    </div>
  );
};

export default Gallery;
