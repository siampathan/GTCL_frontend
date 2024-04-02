import "./testmoniCard.css";

const TestimoniCard = ({ description, title, url }) => {
  return (
    <div className="item item_wrap">
      <div className="testimoni">
        <blockquote>{description}</blockquote>
        <p className="testimoni__author">
          <a href="#">{title}</a>
        </p>
        <a href="#" className="testimoni__avatar">
          <img
            src={url}
            className="testimoni__avatar-image"
            alt="Alexandro Oddol"
          />
        </a>
      </div>
    </div>
  );
};

export default TestimoniCard;
