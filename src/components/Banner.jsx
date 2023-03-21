/* eslint-disable no-undef */
import Banner1 from "../image/1.png";
import Banner2 from "../image/sp3.jpg";
import Carousel from "react-bootstrap/Carousel";

import "../style/Banner.scss";
const dataOptions = [
  {
    imgURL: "https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi",
    title: "Gì Cũng Rẻ - Mua Là Freeship",
  },
  {
    imgURL:
      "https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi",
    title: "Mã Giảm Giá ",
  },
  {
    imgURL: "https://cf.shopee.vn/file/c7a2e1ae720f9704f92f72c9ef1a494a_xhdpi",
    title: "Miễn Phí Vận Chuyển",
  },
  {
    imgURL:
      "https://cf.shopee.vn/file/vn-50009109-1975fb1af4ae3c22878d04f6f440b6f9_xhdpi",
    title: "Bắt Trend-Gía Sốc",
  },
  {
    imgURL: "https://cf.shopee.vn/file/21a4856d1fecd4eda143748661315dba_xhdpi",
    title: "Voucher Từ 100.00 Xu",
  },
  {
    imgURL: "https://cf.shopee.vn/file/8d6d5ee795e7675fed39d31ba04c3b92_xhdpi",
    title: "Hàng Hiệu Gía Tốt",
  },
  {
    imgURL: "https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi",
    title: "Hàng Quốc Tế",
  },
  {
    imgURL: "https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi",
    title: "Nạp Điện Thoại & Thẻ Game",
  },
];
export default function Banner(params) {
  return (
    <div className="container1">
      <div className="banner-container">
        <div className="banner-container__img-left bg-red">
          <Carousel>
            <Carousel.Item className="banner-container__img-left__img">
              <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cf.shopee.vn/file/vn-50009109-8372fb1c64e971b815b44e5d145d096e_xxhdpi" +
                    " )",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
              ></div>
            </Carousel.Item>
            <Carousel.Item className="banner-container__img-left__img">
              <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cf.shopee.vn/file/vn-50009109-8372fb1c64e971b815b44e5d145d096e_xxhdpi" +
                    " )",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
              ></div>
            </Carousel.Item>
            <Carousel.Item className="banner-container__img-left__img">
              <div
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cf.shopee.vn/file/vn-50009109-c52d211b204e1eefb7862feeb2c6114f_xxhdpi" +
                    " )",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
              ></div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="banner-container__img-right">
          <div
            className="banner-container__img-right__item"
            style={{
              backgroundImage:
                "url(" +
                "https://cf.shopee.vn/file/vn-50009109-30002e735028feb7e31680e1b654772d_xhdpi" +
                " )",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="banner-container__img-right__item"
            style={{
              backgroundImage:
                "url(" +
                "https://cf.shopee.vn/file/vn-50009109-298a88188d80e6afd2af5491fa485bbb_xhdpi" +
                " )",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      <div className="hot-options">
        {dataOptions.map((item) => (
          <a href="#">
            <div className="hot-options__container">
              <div className="hot-options__img-container">
                <div
                  className="hot-options__img"
                  style={{
                    backgroundImage:
                      "url(" +
                      `${item.imgURL}` +
                      " )",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
            </div>
            <div className="hot-options__title">
              {item.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
