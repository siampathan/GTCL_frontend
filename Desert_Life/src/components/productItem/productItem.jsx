const ProductItem = ({ data }) => {
  return (
    <div className="item">
      <img src={data} className="img-fluid" alt="App dashboard" />
    </div>
  );
};

export default ProductItem;
