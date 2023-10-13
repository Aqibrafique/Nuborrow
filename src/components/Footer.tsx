import React from "react";
import Logo from "../assets/Logo.svg";
import GooglePlay from "../assets/googleplay.svg";
import AppStore from "../assets/Appstore.svg";
import Footer1 from '../assets/footer_icon1.svg'
import Footer2 from '../assets/footer_icon2.svg'
import Footer3 from '../assets/footer_icon3.svg'
import Footer4 from '../assets/footer_icon4.svg'

function Footer() {
  return (
    <>
      {/* footer main bg color with full width */}
      <div className="bg-[#FAF8FF] border w-full ">
        {/* footer caontain */}
        <div className=" h-auto container m-auto py-8 lg:px-16">
          <img className="h-34 w-56 p-3" src={Logo} alt="error" />
          <span className='text-xs p-3 md:text-base'>FSRA LIC 13115</span>
          <div className="flex flex-col-reverse lg:flex-row w-full   gap-8 p-2">
            {/* footer left div */}
            <div className="flex flex-col w-full  space-y-10">
              <p className="font-sans font-bold text-2xl">
                Download the Nuborrow App
              </p>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:items-end items-center">
                <img className="w-44 h-14" src={GooglePlay} alt="error" />
                <img className="w-44 h-14" src={AppStore} alt="error" />
              </div>
              <p className="font-sans font-normal text-base">
                Copyright © 2022 NuBorrow Inc. License Number: 13115. Designed
                by Fantech Labs
              </p>
              <div className="font-sans font-normal text-xs">
                <p className="mb-2">
                  All approvals are subject to the underwriting requirements
                </p>
                <p>
                  Nuborrow will provide the lowest rate possible within access
                  to our lenders and client’s strength to qualify for the
                  mortgage.
                </p>
              </div>
            </div>
            {/* right div of footer */}
            <div className="flex flex-col w-full h-auto  space-y-4">
                <p className="text-2xl font-bold">Contact Us</p>
                {/* icon1 */}
                <div className="flex flex-row items-center">
                    <img className="w-10 h-10" src={Footer1} alt="error"/>
                    <p className="font-sans font-bold text-base ml-4">+1 888 372 5588</p>
                </div>
                {/* icon2 */}
                <div className="flex flex-row items-center">
                    <img className="w-10 h-10" src={Footer2} alt="error"/>
                    <p className="font-sans font-bold text-base ml-4">hello@nuborrow.com</p>
                </div>
                {/* icon3 */}
                <div className="flex flex-row items-center">
                    <img className="w-10 h-10" src={Footer3} alt="error"/>
                    <p className="font-sans font-bold text-base ml-4">Nuborrow Head Office 9135 Keele St. Unit B1 Vaughan, On L4K 1J0</p>
                </div>
                {/* icon4 */}
                <div className="flex flex-row items-center">
                    <img className="w-10 h-10" src={Footer4} alt="error"/>
                    <p className="font-sans font-bold text-base ml-4">FSRA Lic # 13115</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
