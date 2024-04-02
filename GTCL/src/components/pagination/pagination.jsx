const Pagination = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="pagination">
          <ul className="pagination-list">
            <li>
              <a href="#" className="page-number able left-arrow">
                PREV
              </a>
            </li>
            <li>
              <a href="#" className="page-number current">
                01
              </a>
            </li>
            <li>
              <a href="#" className="page-number">
                02
              </a>
            </li>
            <li>
              <a href="#" className="page-number">
                03
              </a>
            </li>
            <li>
              <a href="#" className="page-number able right-arrow">
                NEXT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
