import React from "react";
import Header from "../components/Header";
// import '../../src/assets/Rectangle.svg'
import groupIcon from "../../src/assets/Group.png";
import paystackIcon from "../../src/assets/paystack.svg";
import googleIcon from "../../src/assets/google.svg";
import kpmgIcon from "../../src/assets/kpmg.svg";
import heroImageIcon from "../../src/assets/hero-image.svg";

const Hero = () => {
  return (
    <div className="bg-[url('../../src/assets/Rectangle.svg')] bg-no-repeat ">
      <Header />
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col gap-4 py-[150px]">
          <div className="flex flex-col gap-3 px-10">
            <h1 className="font-[GT Walsheim Pro] font-[700] text-[48px]  leading-[54.96px]">
              Find a <span className="text-[#06942A]">job</span> easily
            </h1>
            <p className="font-[Graphik] font-[400] text-[16px]  leading-[32px] w-[472px]">
              With verified, up-to-date job listings directly from employer
              websites, we create a premium experience for job seekers,
              employers, and data <br /> seekers alike.
            </p>
          </div>
          <div className="">
            {/* <input type="text" className="" /><input type="text" className="" /><img src="" alt="" /> */}
            <img src={groupIcon} alt="" className="px-2" />
          </div>

          <div className="px-10 gap-4 flex flex-col">
            <p className="font-[Graphik] font-[500] text-[16px]  leading-[24px]">Trusted by:</p>
            <div className="flex gap-6 items-center ">
              <img src={paystackIcon} alt="" className="" />
              <img src={googleIcon} alt="" className="" />
              <img src={kpmgIcon} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="pb-[150px] pt-[40px]">
          <div className="">
            <img src={heroImageIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
