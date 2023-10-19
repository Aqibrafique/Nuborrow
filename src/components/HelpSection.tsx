import Help1 from "../assets/help1.svg";
import Help2 from "../assets/help2.svg";
import Help3 from "../assets/help3.svg";
import { useState } from "react";
import Cards from "./Cards";
import Cards1 from "./Cards1";
import Cards2 from "./Cards2";
import Cards3 from "./cards3";
import Cards4 from "./Cards4";

function HelpSection() {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<object>({
    cards: "",
    cards1: "",
    cards2: "",
    cards3: "",
    Name: "",
    Phone: "",
    Email: "",
    Address: "",
  });

  return (
    <>
    {/* px-4 lg:px-16 */}
      {/* main div */}
      <div className="w-full h-auto bg-[#FAF8FF] ">
        <div className="w-full container m-auto  flex flex-col-reverse xl:flex-row  px-4    space-y-8 md:space-y-0 py-14">
          {/* left div */}
          <div className="xl:w-1/2">
            {page === 1 ? (
              <Cards
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            ) : page === 2 ? (
              <Cards1
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            ) : page === 3 ? (
              <Cards2
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            ) : page === 4 ? (
              <Cards3
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            ) : page === 5 ? (
              <Cards4
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            ) : (
              <Cards4
                value={page}
                setvalue={setPage}
                data={data}
                setData={setData}
              />
            )}
          </div>
          {/* right div */}
          <div className=" w-full xl:px-12  flex flex-col space-y-4 xl:w-1/2">
            {/* flex col 1 */}
            <div className="text-3xl font-bold ">
              <p className="text-5xl font-Raleway">
                We've <span className="text-main_theme-600 font-black"> SAVED</span>{" "}
                Canadians over 8.5{" "}
                <span className="text-main_theme-600 font-black"> MILLION </span> in
                debt over the last 10 years.
              </p>
            </div>
            {/* flex col 2 */}
            <div>
              <p className="text-xl font-Open_Sans">
                With Nuborrow you get a customized borrowing power report that
                includes your credit score, estimated equity in your home, and
                the best mortgage options available.
              </p>
            </div>
            {/* flex col 3 */}
            <div className=" flex flex-col  text-lg font-semibold gap-6">
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-24 object-cover"
                  src={Help1}
                  alt="error"
                />
                <div className="font-semibold font-Raleway text-base  lg:text-xl">
                  Easily access your free credit score, home equity report, and
                  pre-approved options on our mobile app
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-24  object-cover"
                  src={Help2}
                  alt="error"
                />
                <div className="font-semibold font-Raleway text-base  lg:text-xl">
                  No credit or income requirements needed to be approved
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-24 object-cover md:ml-4 lg:ml-0 xl:ml-4"
                  src={Help3}
                  alt="error"
                />
                <div className="font-semibold font-Raleway text-base  lg:text-xl">
                  Safe and secure process. Nuborrow is an A+ Better Business
                  ranked company with 1,000's of Google reviews.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
