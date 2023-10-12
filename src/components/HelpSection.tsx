import Help1 from "../assets/help1.svg";
import Help2 from "../assets/help2.svg";
import Help3 from "../assets/help3.svg";
import helpsection1 from "../assets/helpsection1.svg";
import helpsection12 from "../assets/helpsection12.svg";
import helpsection13 from "../assets/helpsection13.svg";
import helpsection14 from "../assets/helpsection14.svg";

function HelpSection() {
  return (
    <>
      {/* main div */}
      <div className="w-full bg-[#FAF8FF] ">
        <div className="w-full container m-auto  flex flex-col-reverse xl:flex-row  items-center  px-4 space-y-8">
          {/* left div */}
          <div className=" border-neutral-200 bg-white border-[4px] md:border-[8px] w-full h-auto  rounded-lg ">
            <p className="p-4">What can we help you with?</p>
            <div className="w-11/12 m-4 bg-gray-200 h-3 dark:bg-gray-700">
              <div className="bg-blue-600 h-3  w-1/5"></div>
            </div>
            <div className="flex justify-around p-11">
              <div className="border-neutral-200 border-[4px] text-center md:border-[8px]">
                <img src={helpsection1} alt="error" />
                <p className="py-5">Home Equity Loan - Cash Out</p>
              </div>
              <div className="border-neutral-200 border-[4px] text-center  md:border-[8px]">
                <img src={helpsection12} alt="error" />
                <p>Home Equity Loan - Cash Out</p>
              </div>
            </div>
            <div className="flex justify-around p-11">
              <div className="border-neutral-200 border-[4px] text-center md:border-[8px]">
                <img src={helpsection1} alt="error" />
                <p>Home Equity Loan - Cash Out</p>
              </div>
              <div className="border-neutral-200 border-[4px] text-center  md:border-[8px]">
                <img src={helpsection12} alt="error" />
                <p>Home Equity Loan - Cash Out</p>
              </div>
            </div>
          </div>
          {/* right div */}
          <div className="border-black border w-full p-5  flex flex-col space-y-4">
            {/* flex col 1 */}
            <div className="text-3xl font-bold ">
              <p>
                We've SAVED Canadians over 8.5 MILLION in debt over the last 10
                years.
              </p>
            </div>
            {/* flex col 2 */}
            <div>
              <p className="text-1xl">
                With Nuborrow you get a customized borrowing power report that
                includes your credit score, estimated equity in your home, and
                the best mortgage options available.
              </p>
            </div>
            {/* flex col 3 */}
            <div className="border flex flex-col  text-lg font-semibold">
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-24"
                  src={Help1}
                  alt="error"
                />
                <div>
                  Easily access your free credit score, home equity report, and
                  pre-approved options on our mobile app
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-24 ml-0"
                  src={Help2}
                  alt="error"
                />
                <div>
                  No credit or income requirements needed to be approved
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-5">
                <img
                  className="h-16 w-16 md:h-20 md:w-18"
                  src={Help3}
                  alt="error"
                />
                <div>
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
