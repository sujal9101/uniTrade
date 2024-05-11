import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#111212] font-[600] capitalize`}
        >
          Your <span className="text-[#fff]">Campus</span> <br />Market Hub
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#111212] ">
        Looking to buy or sell that must have textbook, trendy clothes, essential electronics, 
        or swap furniture for your dorm room? UniTrade is your go to destination.{" "}
        Connect with fellow students on your campus, trade safely, and ensure every transaction is a breeze.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
