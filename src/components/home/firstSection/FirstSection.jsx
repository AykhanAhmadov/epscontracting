import React from "react";
import firstSection from "./firstSection.module.css";
import { Link } from "react-router-dom";

const FirstSection = ({ data }) => {
  return (
    <section className={firstSection.firstSection}>
      {data?.map((item) => (
        <div className={firstSection.first__photo} key={item?.id}>
          <img className={firstSection.firstImg} src={item?.img} alt="" />
          <div className={firstSection.img__overlay}></div>
          <div className="container">
            <div className={firstSection.first__text}>
              <h4>{item.small_text}</h4>
              <p>{item.long_text}</p>
              <Link className={firstSection.click__btn} to="#">
                    <span>Click!</span><span>{item.btn_value}</span>  
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FirstSection;
