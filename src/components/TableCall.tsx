import React from "react";

interface all {
  name: string;
  head1: string;
  head2: string;
  data1: string;
  data2: string;
  color: string;
}

function TableCall({ name, head1, head2, data1, data2, color }: all) {
  return (
    <>
      <div className=" w-full container m-auto h-auto">
        <div className={`w-full  grid-cols-3 hidden md:grid text-center  bg-[${color}]`}>
          <span className="p-8 font-sans font-bold text-xl">{name}</span>
          <span className="p-8 font-sans font-bold text-xl">{data1}</span>
          <span className="p-8 font-sans font-bold text-xl">{data2}</span>
        </div>
        <div className="md:hidden  font-bold my-4 font-sans  text-xl">
          {name}
        </div>
        <div className="grid grid-cols-2 md:hidden rounded-t-2xl bg-[#715BA8] w-full text-white text-center">
          <span className="p-4 font-sans font-bold text-sm">{head1}</span>
          <span className="p-4 font-sans font-bold text-sm">{head2}</span>
        </div>
        <div className="w-full  grid-cols-2 grid md:hidden text-center bg-[#F5F5F5] rounded-b-2xl">
          <span className="p-4 font-sans font-semibold text-xs">{data1}</span>
          <span className="p-4 font-sans font-semibold text-xs">{data2}</span>
        </div>
      </div>
    </>
  );
}

export default TableCall;
