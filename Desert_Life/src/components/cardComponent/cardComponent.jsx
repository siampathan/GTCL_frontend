const CardComponent = ({ image, title }) => (
  <div className="card">
    <img src={image} alt={title} />
    <h4>{title}</h4>
  </div>
);

export default CardComponent;
