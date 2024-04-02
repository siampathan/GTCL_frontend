const NotFound = () => {
  const styles = {
    content: {
      margin: "60px auto",
      height: "50vh",
    },

    text: {
      padding: "20px 0",
      textAlign: "center",
    },
  };

  return (
    // <div className="container shadow border rounded mt-5 d-flex align-items-center">
    //   <div className="row">
    //     <div className="col-lg-12 col-md-6 p-4">
    //       <h3 className="text-center">Page Not Found | 404</h3>
    //     </div>
    //   </div>
    // </div>
    <div className="row">
      <div className="container">
        <div className="col-lg-6 rounded" style={styles.content}>
          <h3 style={styles.text} className="shadow">
            Not Found | 404
          </h3>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
