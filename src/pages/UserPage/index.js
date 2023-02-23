import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MainHeader } from "../../components/MainHeader";
import { MainNavbar } from "../../components/MainNavbar";
import { MainTemplate } from "../../components/MainTemplate";
import UserPageWrapper from "./UserPageWrapper";
import { Dropdown } from "react-bootstrap";
import { SlBasket } from "react-icons/sl";
import { BsFillArrowUpCircleFill, BsSearch } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Basket } from "../../components/Basket";
import { BasketModal } from "../../components/Basket/BasketModal";

export const UserPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <UserPageWrapper>
      <header className="shadow">
        <div className="container">
          <div className="logo">
            <Link to="/">Logo</Link>
          </div>
          <div className="searchbar">
            <input className="form-control" type="text" placeholder="Search" />
            <BsSearch className="search-icon" />
          </div>
          <div className="user-login">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <TfiUser className="user-avatar" size={35} />
                <p className="user-name">Axror</p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="//action-1">
                  <FiUser className="me-2" size={20} /> Профиль
                </Dropdown.Item>
                <Dropdown.Item href="//action-2">
                  <HiOutlineClipboardList className="me-2" size={20} />
                  Мои заказы
                </Dropdown.Item>
                <Dropdown.Item href="//action-3">
                  <SlBasket className="me-2" size={20} /> Корзина
                </Dropdown.Item>
                <Dropdown.Item href="//action-4">Выйти</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="main container">
        <main>
          <MainHeader />
          <MainNavbar />
          <MainTemplate>
            <Outlet />
          </MainTemplate>
          <Link to={"/user"} className="top-to-btm">
            {showTopBtn && (
              <BsFillArrowUpCircleFill
                size={50}
                className="icon-position icon-style"
                onClick={goToTop}
              />
            )}
          </Link>
        </main>
      </div>
      <div className="container basket pb-3">
        <Basket />
      </div>
      <footer className="py-5">
        <div className="container d-flex gap-5">
          <div className="card-footer">
            <p>© 2023 Express 24</p>
            <div className="icons">
              <a href="/" target={"_blank"}>
                <FaFacebookF className="icon" />
              </a>
              <a href="/" target={"_blank"}>
                <FaInstagram className="icon" />
              </a>
              <a href="/" target={"_blank"}>
                <FaTelegramPlane className="icon" />
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <a href="/">About</a>
              <a href="/">User comply</a>
              <a href="/">Contact</a>
              <a href="/">Answers and Questions</a>
              <a href="/">Application to partnership</a>
            </div>
          </div>
        </div>
      </footer>
      <BasketModal />
    </UserPageWrapper>
  );
};