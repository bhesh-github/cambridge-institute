import { useState } from "react";
import { useParams } from "react-router-dom";
import GalleryCarousel from "./GalleryCarousel";
import OtherBanner from "../../../forAll/OtherBanner";
import { VscClose } from "react-icons/vsc";
import oneImg from "../../../../images/news/n7.png";
import bannerImg from "../../../../images/banner/gallery.jpg";

const GalleryImages = ({ images }) => {
  const { galleryName = "" } = useParams();
  const [isSliderOverlay, setIsSliderOverlay] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState();

  const slugText = galleryName.replace("-", " ");

  return (
    <div className="gallery-images-page">
      <OtherBanner bannerImg={bannerImg && bannerImg} text="Images" />

      <div className="content">
        <h1 className="gallery-head">{slugText && slugText} - Images</h1>
        <div className="images-wrapper">
          {images &&
            images.map((item, idx) => {
              return (
                <div
                  className="card-wrapper"
                  key={idx}
                  onClick={() => {
                    setIsSliderOverlay(true);
                    setCurrentImageIdx(idx);
                  }}
                >
                  <div
                    className="image-card"
                    style={{
                      backgroundImage: `url(${item})`,
                    }}
                  ></div>
                </div>
              );
            })}
        </div>
      </div>

      {isSliderOverlay && (
        <div className="overlay-outer">
          <div
            className="slider-overlay"
            onClick={() => {
              setIsSliderOverlay(false);
            }}
          >
            <div className="btn-wrapper">
              <VscClose
                className="close-btn"
                onClick={() => {
                  setIsSliderOverlay(false);
                }}
              />
            </div>
          </div>
          <div className="silder-comp">
            <GalleryCarousel
              currentImageIdx={currentImageIdx && currentImageIdx}
              imagesList={images && images}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
GalleryImages.defaultProps = {
  images: [oneImg, oneImg, oneImg, oneImg, oneImg, oneImg, oneImg],
};
