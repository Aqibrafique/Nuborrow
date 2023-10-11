import React from "react";
import Girl from "../assets/girl.png";
import TableCall from "./TableCall";

function Table() {
  return (
    <>
      {/* section 1 */}
      <div className="p-4">
      <div className=" w-full container m-auto h-auto flex flex-col md:flex-row items-center md:items-end justify-between xl:gap-40 -mb-4">
        <p className="text-2xl lg:text-5xl font-bold py-8 md:py-16 text-center md:text-left">
          Clients <span className="text-[#715BA8] font-black"> SAVE</span> over{" "}
          <span className="text-[#715BA8] font-black"> $15,000 </span> a year
          with our proven strategies.
        </p>
        <img
          className="w-96 h-60 hidden md:block px-0"
          src={Girl}
          alt="error"
        />
      </div>
      {/* <div className="border w-full container m-auto h-auto">
        <div className="bg-[#715BA8] w-full hidden grid-cols-3 text-white font-bold text-2xl  rounded-t-lg md:rounded-t-3xl md:grid">
          <span></span>
          <span className="p-6">Current Financial Situation</span>
          <span className="p-6">Your new financial situation</span>
        </div>
        <div className="w-full  grid-cols-3 hidden md:grid text-center">
          <span className="p-8 font-sans font-bold text-xl">1st Mortgage Payment</span>
          <span className="p-8 font-sans font-bold text-xl">$2,000.00 a month</span>
          <span className="p-8 font-sans font-bold text-xl">$2,000.00 a month</span>
        </div>
        <div className="md:hidden  font-bold my-4 font-sans  text-xl">1st Mortgage Payment</div>
        <div className="grid grid-cols-2 md:hidden rounded-t-2xl bg-[#715BA8] w-full text-white text-center">
          <span className="p-4 font-sans font-bold text-sm">Current Financial Situation</span>
          <span className="p-4 font-sans font-bold text-sm">Your new financial situation</span>
        </div>
        <div className="w-full  grid-cols-2 grid md:hidden text-center">
          <span className="p-4 font-sans font-semibold text-xs">$2,000.00 a month</span>
          <span className="p-4 font-sans font-semibold text-xs">$2,000.00 a month</span>
        </div>
      </div> */}
      <div className="w-full container m-auto">
        <div className="bg-[#715BA8] w-full hidden grid-cols-3 text-white font-bold text-2xl  rounded-t-lg md:rounded-t-3xl md:grid">
          <span></span>
          <span className="p-6">Current Financial Situation</span>
          <span className="p-6">Your new financial situation</span>
        </div>
      </div>
      <TableCall
        name="1st Mortgage Payment"
        head1="Current Financial Situation"
        head2="Your new financial situation"
        data1="$2,000.00 a month"
        data2="$2,000.00 a month"
        color="#E5E5E5"
      />
      <TableCall
        name="New Loan Payment"
        head1="Current Financial Situation"
        head2="Your new financial situation"
        data1="$0.00 a month"
        data2="$415.00 a month"
        color="#a82424"
        // color="bg-gray-100"
      />
      <TableCall
        name="Credit Card Debt"
        head1="Current Financial Situation"
        head2="Your new financial situation"
        data1="$1,250.00 a month"
        data2="No more credit card debt payments"
        color="#E5E5E5"
      />
      <TableCall
        name="Automobile Payments"
        head1="Current Financial Situation"
        head2="Your new financial situation"
        data1="$750.00 a month"
        data2="No more automobile payments"
        color="#241313"
      />
       <TableCall
        name="Total Payments"
        head1="Current Financial Situation"
        head2="Your new financial situation"
        data1="$3,975.00 a month"
        data2="$2,415.00 a month"
        color="#E5E5E5"
      />
      <div className="w-full container m-auto h-56 border my-12 p-6 flex flex-col rounded-2xl bg-[#715BA8] justify-center items-center text-lg md:text-4xl font-bold text-white text-center" >
        <span className=" my-3">Monthly Savings with Nuborrow: $1,560.00</span>
        <span className=" my-3">Yearly Savings with Nuborrow: $18,720.00</span>

      </div>
      </div>
    </>
  );
}

export default Table;
