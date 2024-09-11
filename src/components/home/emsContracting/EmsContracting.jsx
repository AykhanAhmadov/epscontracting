import React from "react";
import emsContracting from "./emsContracting.module.css";

const EmsContracting = ({ data }) => {
  return (
    <section className={emsContracting.ems__contracting}>
      <div className="container">
        {data?.map((item) => (
          <div key={item?.id} className={`${emsContracting.d__flex} d-flex`}>
            <div className={emsContracting.contracting__img}>
              <img
                src={item?.img}
                alt="photo"
              />
            </div>
            <div className={emsContracting.contracting__right}>

                <h4>{item?.value}</h4>
                <h3>{item.small_text}</h3>
                <p>{item.long_text}</p>
                
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EmsContracting;
