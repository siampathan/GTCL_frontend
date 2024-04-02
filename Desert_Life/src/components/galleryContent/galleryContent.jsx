import GalleryContent from "../../data/data";
import Gallery from "../gallery/gallery";

const GalleryItems = () => {
  console.log(GalleryContent);
  return (
    <>
      {GalleryContent.map((data) => {
        <Gallery items={data} key={data.id} />;
      })}
    </>
  );
};

export default GalleryItems;
