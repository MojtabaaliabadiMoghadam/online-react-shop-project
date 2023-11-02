const Card = ({ title, price, img }) => {
  return (
    <>
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div class="shoping-card">
          <div class="img-sec">
            <img src={img} alt="" />
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="title">{title}</div>
          <div class="buttons">
            <div class="right">
              <span class="price">{price}</span>
            </div>
            <div class="left">
              <div class="extend-btn">
                <a id="text" class="b-text" href="">
                  {" "}
                  علاقه{" "}
                </a>
                <a class="b-icone" href="">
                  <i class="fas fa-heart"></i>
                </a>
              </div>
              <div class="extend-btn">
                <a class="b-text" href="">
                  {" "}
                  خرید
                </a>
                <a class="b-icone" href="">
                  <i class="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
