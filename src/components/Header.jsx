import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../style/header.scss";

export default function Header(params) {
  return (
    <div className="header__container">
      <div className="navbar-wrapper header__wrapper">
        <nav className="header__wrapper__nav">
          <div className="d-flex align-items-center header__wrapper__nav__service">
            <a href="#" className="header__wrapper__nav__link">
              {" "}
              Kênh người bán
            </a>
            <div className=" header__wrapper__nav__item">
              <a href="#" className=" header__wrapper__nav__link">
                {" "}
                Trở thành Người bán Shopee{" "}
              </a>
            </div>
            <div className=" header__wrapper__nav__item">
              <a href="#" className="header__wrapper__nav__link">
                {" "}
                Tải ứng dụng
              </a>
            </div>
            <div className=" header__wrapper__nav__item">
              <a href="#" className="header__wrapper__nav__link">
                {" "}
                Kết nối
              </a>
            </div>
            {/* <FacebookIcon
              className="bg-white color-white rounded-3"
              color="#fff"
            />
            <InstagramIcon
              className="bg-white color-white rounded-3"
              color="#fff"
            /> */}
          </div>
          <div className="header__wrapper__nav__space"></div>
          <div className="header__wrapper__nav"></div>
        </nav>
      </div>
      <div className="header">
        <div className="header__logo col-2">
          <LocalMallIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">CN_shop</h2>
        </div>

        <div className="header__search col-8">
          <div className="header__search__container">
            <input
              className="header__search__searchInput"
              type="text"
              placeholder="Đăng ký và nhận voucher bạn mới đến 70k!"
            />
            <button className="header__search__button">
              <SearchIcon className="header__search__searchIcon" />
            </button>
          </div>
          <div class="d-flex ">
            <div class="header__search__link ">
              <a class="UPUwyq" href="/search?keyword=d%C3%A9p">
                Dép
              </a>
              <a class="UPUwyq" href="/search?keyword=%C3%A1o%20kho%C3%A1c">
                Áo Khoác
              </a>
              <a class="UPUwyq" href="/search?keyword=%C3%A1o%20croptop">
                Áo Croptop
              </a>
              <a class="UPUwyq" href="/search?keyword=%C3%A1o%20ph%C3%B4ng">
                Áo Phông
              </a>
              <a class="UPUwyq" href="/search?keyword=v%C3%A1y">
                Váy
              </a>
              <a
                class="UPUwyq"
                href="/search?keyword=t%C3%BAi%20x%C3%A1ch%20n%E1%BB%AF"
              >
                Túi Xách Nữ
              </a>
              <a class="UPUwyq" href="/search?keyword=%E1%BB%91p%20iphone">
                Ốp iPhone
              </a>
              <a class="UPUwyq" href="/search?keyword=tai%20nghe%20bluetooth">
                Tai Nghe Bluetooth
              </a>
            </div>
          </div>
        </div>
        <div className="header__nav col-2">
          <div className="header__nav__item">
            <ShoppingCartIcon
              fontSize="large"
              className="header__nav__itemBasket"
            />
            {/* <span className="header__nav__itemLineTwo header__nav__basketCount ">
              0
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}
