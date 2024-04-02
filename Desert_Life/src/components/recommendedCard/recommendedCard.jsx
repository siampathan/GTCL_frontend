import "./recommendedCard.css";

const RecommendedCard = ({
  key,
  label,
  comment,
  cardTitle,
  imageLink,
  avater,
  postBy,
  date,
}) => {
  return (
    <div className="recommend_card">
      <div className="item" key={key}>
        <div className="article__card">
          <div className="article__card-heading">
            <a href="#" className="article__card-label">
              {label}
            </a>
            <a href="#" className="article__card-comment">
              <i className="fa fa-comments" /> {comment}
            </a>
            <h4 className="article__card-title">
              <a href="#">{cardTitle}</a>
            </h4>
          </div>
          <div className="article__card-image">
            <img src={imageLink} className="img-fluid" alt="Image article" />
          </div>
          <div className="article__card-footer">
            <div className="article__card-author">
              <img
                src={avater}
                className="article__card-avatar"
                alt="Author Avatar"
              />
              <p>
                <strong>Posted by :</strong> <i className="fa fa-user" />
                <a href="#">{postBy}</a>
              </p>
              <a href="#">{date}</a>
            </div>
            <a href="#" className="article__card-action btn-link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCard;
