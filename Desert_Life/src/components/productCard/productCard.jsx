import "./productCard.css";

const ProductCard = ({ items, key }) => {
  return (
    <div className="row" key={key}>
      <div className="col-lg-12">
        <div className="card_wrap">
          <img src={items} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
