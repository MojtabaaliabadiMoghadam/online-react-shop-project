import image1 from "./image/super-product.jpg";
import image2 from "./image/friday.jpg";
const SupperOffer = () => {
  let remainingTime = 70000;
  function setTime() {
    if (remainingTime == 0) return;
    let h = Math.floor(remainingTime / 3600);
    let m = Math.floor((remainingTime % 3600) / 60);
    let s = (remainingTime % 3600) % 60;
    document.querySelector("#hour").innerHTML = s;
    document.querySelector("#minute").innerHTML = m;
    document.querySelector("#second").innerHTML = h;
  }
  setInterval(() => {
    remainingTime -= 1;
    setTime();
  }, 1000);
  return (
    <>
      <section class="supper-offer-sec">
        <div class="row">
          <div class="col-lg-9 ">
            <div class="supper-offer-box">
              <span class="supper-offer-box-title">پیشنهاد شگفت انگیز</span>
              <div class="body">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="image-container">
                      <img src={image1} alt="" />
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="specofic">
                      <div class="price-row">
                        <div class="price">1 میلیون تومان</div>
                        <div class="off">60% تخفیف</div>
                      </div>
                      <div class="title">هدست گیمینگ ایسوس h-234u</div>
                      <div class="counter-down">
                        <span id="second">40</span>:<span id="minute">36</span>:
                        <span id="hour">19</span>
                      </div>
                      <div class="remining"> زمان باقیمانده تا پایان سفارش</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="banner">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupperOffer;
