import "../style/Suggestion.scss";
const dataArray = [
  {
    imgURL: "https://cf.shopee.vn/file/539c893d1942c57d489f610d0a4b12bd_tn",
  },
  {
    imgURL: "https://cf.shopee.vn/file/sg-11134201-22110-8iyzx54vfljvdc_tn",
  },{
    imgURL: "https://cf.shopee.vn/file/sg-11134201-23020-tv7yhb78mhnv45_tn",
  },{
    imgURL: "	https://cf.shopee.vn/file/52353aed1d06ac622b89d70e612cbed8_tn",
  },{
    imgURL: "https://cf.shopee.vn/file/sg-11134201-22110-5co0i2evafkve8_tn",
  },{
    imgURL: "https://cf.shopee.vn/file/539c893d1942c57d489f610d0a4b12bd_tn",
  }
];
export default function Suggestion(params) {
  return (
    <div className="suggestion">
      <div className="suggestion__nav">
        <nav className="stardust-tabs-header-wrapper">
          <ul className="stardust-tabs-header">
            <li className="stardust-tabs-header__tab stardust-tabs-header__tab--active">
              <div className="gjTwjy +83iUp"></div>
              <div className="_8rBYkP">
                <span>GỢI Ý HÔM NAY</span>
              </div>
            </li>
          </ul>
          <i className="stardust-tabs-header__tab-indicator"></i>
        </nav>
      </div>
      <div>
        <section className="suggestion-tab">
          <div className="suggestion-tab__container">
            {dataArray.map((item) => (
              <div className="suggestion-tab__item">
                <a href="#">
                  <div className="suggestion-tab__item__container">
                    <div className="suggestion-tab__item__detail">
                      <div className="suggestion-tab__item__detail__img">
                        <div
                          style={{
                            width: "100%",
                            paddingTop: "100%",
                            position: "relative",
                          }}
                        >
                          <img src={item.imgURL} />
                        </div>
                        <div className="suggestion-tab__item__detail__img__discount">
                          <div className="suggestion-tab__item__detail__img__discount__detail">
                            <span>50%</span>
                            <span style={{ color: "#fff" }}>giảm</span>
                          </div>
                        </div>
                      </div>

                      <div className="suggestion-tab__item__detail__title">
                        <div className="suggestion-tab__item__detail__title__text">
                          <div style={{ flexGrow: 1, minHeight: "1.75rem" }}>
                            <div className="suggestion-tab__item__detail__title__text__para">
                              Mô hình lắp ráp 12 con giáp, Mô hình lắp ghép mini
                              3D cho bé !
                            </div>
                          </div>
                        </div>
                        <div className="suggestion-tab__item__detail__title__price">
                          <div className="suggestion-tab__item__detail__title__price__number">
                            <span className="I94EH9">₫</span>
                            <span>4.000</span>
                          </div>
                          <div
                            style={{
                              color: "rgba(0,0,0,.54)",
                              fontSize: "0.75rem",
                              lineHeight: "0.875rem",
                            }}
                          >
                            Đã bán 2,8k
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
