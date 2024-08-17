import { useEffect } from "react";
import "./ProductMain.css";
// import data from "../../utils/collections2.json";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const API_BASE_URI = import.meta.env.VITE_API_BASE_URI;

const ProductMain = ({ data, refetch }) => {
  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <div class="second-section">
      <div class="container">
        <div className="heading">
          <p>
            All Sofa<span className="span-title">Sorted by:</span>
            <span className="active none">Best-seller</span>
          </p>
        </div>
        <div className="sortFlex">
          <span>Relevance</span>
          <span className="active">Best Selling</span>
          <span>Price: Low to high</span>
          <span>Price: High to Low</span>
          <span>Date: Old to New</span>
          <span>Date: New to Old</span>
          <span>Featured</span>
        </div>
        <div class="grid-class3 media-flex2">
          {data.map((card) => (
            <Link
              to="/details/1"
              className="border"
              // data-aos="fade-up"
              // data-aos-delay={card.aosDelay}
            >
              <div key={card.id} className="flexColStart r-card">
                <img src={`${API_BASE_URI}/images/` + card.image} alt="home" />
                <div className="wishlist">
                  <span className="">{card.name}</span>
                  <CiHeart />
                </div>
                <span className="">{card.short}</span>
                <span className="r-price">
                  <div className="old-price">
                    <del>
                      <span>$</span>
                      <span>{card.oldPrice}</span>
                    </del>
                  </div>

                  <div>
                    <span>$</span>

                    <span>{card.newPrice}</span>
                  </div>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div class="container paginate-div">
        <span className="prev">
          <span className="arrow">&larr;</span>Previous
        </span>
        <span class="paginate active-page">1</span>
        <span class="paginate">2</span>
        <span class="paginate">3</span>
        <span class="paginate">...</span>
        <span class="paginate">9</span>
        <span class="paginate">10</span>
        <span className="next">
          Next <span className="arrow">&rarr;</span>
        </span>
      </div>
    </div>
  );
};

export default ProductMain;
