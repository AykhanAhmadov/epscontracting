import React, { useEffect, useState } from "react";
import header from "../header/header.module.css";
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Header = () => {
  const [navData, setNavData] = useState([]);
  const [isMobNavActive, setIsMobNavActive] = useState(false);
  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNavData(data.navbar);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const humburger = document.querySelector(`.${header.humburger}`);
  const mobNav = document.querySelector(`.${header.mob__navbar}`);

  if (humburger && mobNav) {
    humburger.onclick = function () {
      humburger.classList.toggle(`${header.mob__active}`);
      mobNav.classList.toggle(`${header.active}`);
    };
  }

  const handleNavLinkClick = () => {
    setIsMobNavActive(false);
  };

  const handleHumburgerClick = () => {
    setIsMobNavActive(!isMobNavActive);
    if (!isMobNavActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 778 && isMobNavActive) {
        setIsMobNavActive(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobNavActive]);
  return (
    <>
      <header className={header.header}>
        <div className={header["header__top-bar"]}>
          <div className="container">
            <div className="d-flex">
              <div className={header.header__logo}>
                <Link to="/" >
                  <h1>
                    <img src={logo} alt="Company Logo" />
                  </h1>
                </Link>
              </div>
              <div className={`${header.nav__right} d-flex`}>
              <div className={header.social__media}>
                <Link to="#" className={header.social__icons}>
                  <FaFacebookF />
                </Link>
                <Link to="#" className={header.social__icons}>
                  <RiInstagramFill />
                </Link>
                <Link to="#" className={header.social__icons}>
                  <FaTwitter />
                </Link>
                <Link to="#" className={header.social__icons}>
                  <FaYoutube />
                </Link>
              </div>
                <div className={header.language}>
                <select name="" id="">
                  <option value="">En</option>
                  <option value="">Ru</option>
                  <option value="">Az</option>
                </select>
                </div>
                <div
                  className={`${header.humburger} ${
                    isMobNavActive ? header.mob__active : ""
                  }`}
                  onClick={handleHumburgerClick}
                >
                  {/* <FaBars className={header.bars} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={header["header__bottom-bar"]}>
          <div className="container">
            <div className="d-flex">
              <nav className={header.navbar}>
                <ul>
                  {navData?.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={`/${item.name.toLowerCase()}`}
                        className={({ isActive }) =>
                          isActive ? header.active : undefined
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="d-flex">
                <div className={header.header__search}>
                  <form className={header["header__search-form"]} method="GET">
                    <input type="search" required aria-label="Search" />
                    <IoSearch className={header["header__serach-icon"]} />
                    <span>Search...</span>
                    <i></i>
                  </form>
                </div>
                <select name="" id="">
                  <option value="">En</option>
                  <option value="">En</option>
                  <option value="">En</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${header.mob__navbar} ${
            isMobNavActive ? header.active : ""
          }`}
        >
          <ul>
            {navData?.map((item) => (
              <li className={header.nav__li} key={item.id}>
                <NavLink
                  to={`/${item.name.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? header.active : undefined
                  }
                  onClick={handleNavLinkClick}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={header.mob__social__media}>
            <Link to="#" className={header.mob__social__icons}>
              <FaFacebookF />
            </Link>
            <Link to="#" className={header.mob__social__icons}>
              <RiInstagramFill />
            </Link>
            <Link to="#" className={header.mob__social__icons}>
              <FaTwitter />
            </Link>
            <Link to="#" className={header.mob__social__icons}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
