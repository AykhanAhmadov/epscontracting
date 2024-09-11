import React, { useEffect } from 'react'
import "../backToTop/backToTop.css";
import { GoArrowUp } from "react-icons/go";



const BackToTop = () => {
    useEffect(() => {
        const switchBtn = document.querySelector(".switch");
        // const body = document.body;
        const progressWrap = document.querySelector(".progress-wrap");
        const progressPath = document.querySelector(".progress-wrap path");
        const fixed = document.querySelector(".header__bottom-bar");
    
        // const handleThemeSwitch = () => {
        //   if (body.classList.contains("light")) {
        //     body.classList.remove("light");
        //     switchBtn.classList.remove("switched");
        //   } else {
        //     body.classList.add("light");
        //     switchBtn.classList.add("switched");
        //   }
        // };
    
        const updateProgress = () => {
          if (progressPath) {
            const pathLength = progressPath.getTotalLength();
            progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
            progressPath.style.strokeDashoffset = pathLength;
    
            const scroll = window.scrollY;
            const docHeight =
              document.documentElement.scrollHeight - window.innerHeight;
            const progress = pathLength - (scroll * pathLength) / docHeight;
            progressPath.style.strokeDashoffset = progress;
          }
        };
    
        const handleScroll = () => {
          if (progressWrap) {
            if (window.scrollY > 80) {
              progressWrap.classList.add("active-progress");
            } else {
              progressWrap.classList.remove("active-progress");
            }
          }
        };
    
        const handleScrollTop = (e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
    
        if (switchBtn) {
          switchBtn.addEventListener("click", handleThemeSwitch);
        }
        if (progressWrap) {
          progressWrap.addEventListener("click", handleScrollTop);
        }
    
        updateProgress(); 
        window.addEventListener("scroll", updateProgress);
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          if (switchBtn) {
            switchBtn.removeEventListener("click", handleThemeSwitch);
          }
          if (progressWrap) {
            progressWrap.removeEventListener("click", handleScrollTop);
          }
          window.removeEventListener("scroll", updateProgress);
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      return (
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
          <GoArrowUp className="progress-icon" />
        </div>
       
      );
}

export default BackToTop