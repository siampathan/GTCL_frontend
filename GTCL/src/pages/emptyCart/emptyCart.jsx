import NotFound from "../notFound/notFound";

const EmptyCart = ({ data }) => {
  return (
    <div>
      <NotFound data={data} />
    </div>
  );
};

export default EmptyCart;
