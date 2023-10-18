import React from "react";
import { useState } from "react";
import Back from "../assets/back.svg";
import validate from "./validate";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

interface all {
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
  data: object;
  setData: React.Dispatch<React.SetStateAction<object>>;
}
interface FormErrors {
  Name?: string;
  Phone?: string;
  Email?: string;
  Address?: string;
}

function Cards4({ setvalue, value, data, setData }: all) {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [form_errors, setForm_errors] = useState<FormErrors>({});
  // const [coordinates, setCoordinates] = useState({
  //   lat: null,
  //   lng: null,
  // });
  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);
    // const ll = await getLatLng(results[0]);
    console.log(results);
    setAddress(value);
  };

  // name change
  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name_validation = new RegExp(/^[a-zA-Z\s._-]{3,30}$/);
    if (!value) {
      setForm_errors({ ...form_errors, Name: "Name is Required!" });
    } else if (!name_validation.test(value)) {
      setForm_errors({ ...form_errors, Name: "Name is Not Valid" });
    } else {
      setForm_errors({ ...form_errors, Name: "" });
    }
    setName(value);
  };
  //  phone change

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // this is where we'll call our future formatPhoneNumber function that we haven't written yet.
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    // we'll set the input value using our setInputValue
    setPhone(formattedPhoneNumber);
  };
  function formatPhoneNumber(value: any) {
    if (!value) {
      setForm_errors({ ...form_errors, Phone: "Phone No is Required!" });
      return value;
    } else if (value) {
      setForm_errors({ ...form_errors, Phone: "" });
      const phoneNumber = value.replace(/[^\d]/g, "");
      const phoneNumberLength = phoneNumber.length;
      if (phoneNumberLength < 4) return phoneNumber;
      if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      }
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
        3,
        6
      )}-${phoneNumber.slice(6, 10)}`;
    }
  }
  // const phoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   let length = value.length;
  //   const phone_validation = new RegExp(
  //     /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  //   );
  //   if (!value) {
  //     setForm_errors({ ...form_errors, Phone: "Phone No is Required!" });
  //   } else if (!phone_validation.test(value)) {
  //     setForm_errors({ ...form_errors, Phone: "Phone No Not Valid" });
  //     if(length==3) {
  //       let a = `(${value})`
  //       console.log(a);
  //      return setPhone(a)
  //     }
  //   } else {
  //     setForm_errors({ ...form_errors, Phone: "" });
  //   }

  //   setPhone(value);
  // };

  // email change
  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const Email_validation = new RegExp(
      /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/
    );
    if (!value) {
      setForm_errors({ ...form_errors, Email: "Email is Required!" });
    } else if (!Email_validation.test(value)) {
      setForm_errors({ ...form_errors, Email: "Email Not Valid" });
    } else {
      setForm_errors({ ...form_errors, Email: "" });
    }
    setEmail(value);
  };
  // address change
  // const addressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   if (!value) {
  //     setForm_errors({ ...form_errors, Address: "Address is Required!" });
  //   } else {
  //     setForm_errors({ ...form_errors, Address: "" });
  //   }
  //   setAddress(value);
  // };
  //  On click function

  const handleclick = () => {
    const a = {
      ...data,
      Name: name,
      Phone: phone,
      Email: email,
      Address: address,
    };
    const err = validate(a);
    if (err.Name || err.Phone || err.Address || err.Email !== "") {
      setForm_errors(err);
      console.log(Object.keys(err)?.length);
      console.log(err);
      return;
    }
    setData({
      ...data,
      Name: name,
      Phone: phone,
      Email: email,
      Address: address,
    });
    const call = {
      ...data,
      Name: name,
      Phone: phone,
      Email: email,
      Address: address,
    };

    localStorage.setItem("Users", JSON.stringify(call));
    setAddress("");
    setName("");
    setEmail("");
    setPhone("");
    // alert('Data inserted sucessfully')
    setvalue(value + 1);
  };

  const Goback = () => {
    setvalue(value - 1);
  };

  return (
    <>
      <div className=" border-neutral-200 bg-white my-16 xl:my-0 pb-10  xl:border-[8px] w-full h-auto  rounded-3xl ">
        <img
          className="w-16 h-16 xl:mt-4 xl:ml-4  ml-5 pt-5 xl:pt-0"
          src={Back}
          alt="back error"
          onClick={Goback}
        />
        <p className=" text-4xl font-bold text-center mt-16 px-12">
          Amazing! You're no-cost reports are waiting for you.
        </p>
        <div className="w-11/12 mx-3 mt-4 md:mx-7 font-Open_Sans font-normal text-sm">Question 5 of 5</div>
        {/* progress Bar */}
        <div className="w-11/12 mx-3 mt-2 md:mx-7 content-center    dark:bg-neutral-200">
          <div className="bg-[#715BA8] h-3  w-5/5"></div>
        </div>
        {/* form */}
        <div>
          <form className="flex flex-col w-12/12 gap-4 mt-4 justify-center items-center">
            <input
              value={name}
              name="name"
              onChange={nameChange}
              className="border border-[#EDF3F3] bg-gray-50 rounded-full w-10/12 h-14 p-5 font-semibold"
              type="text"
              placeholder="Your name"
            />
            {form_errors.Name && (
              <p className="text-red-500">{form_errors.Name}</p>
            )}

            <input
              value={phone}
              name="phone"
              // onChange={phoneChange}
              onChange={(e) => handleInput(e)}
              className="border border-[#EDF3F3] bg-gray-50 rounded-full w-10/12 h-14 p-5 font-semibold"
              type="tel"
              placeholder="Your phone (123) 577 23467"
            />
            {form_errors.Phone && (
              <p className="text-red-500">{form_errors.Phone}</p>
            )}
            <input
              value={email}
              name="email"
              onChange={emailChange}
              className="border border-[#EDF3F3] bg-gray-50 rounded-full w-10/12 h-14 p-5 font-semibold"
              type="text"
              placeholder="Your email"
            />
            {form_errors.Email && (
              <p className="text-red-500">{form_errors.Email}</p>
            )}
            {/* address autocomplete */}
            <PlacesAutocomplete
              value={address}
              onChange={setAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <>
                  <div className=" w-full flex items-center justify-center ">
                    <input
                      {...getInputProps({
                        // placeholder: 'Search Places ...',
                        // className: 'location-search-input',
                      })}
                      value={address}
                      name="address"
                      // onChange={addressChange}
                      className="border border-[#EDF3F3] bg-gray-50 rounded-full w-10/12 h-14 p-5 font-semibold"
                      type="text"
                      placeholder="your address"
                    />
                  </div>

                    <div className="w-10/12">
                      {loading && <div>Loading...</div>}
                      {suggestions.map((suggestion) => {
                        const className = suggestion.active
                          ? "suggestion-item--active"
                          : "suggestion-item";
                        // inline style for demonstration purpose
                        const style = suggestion.active
                          ? { backgroundColor: "#fafafa", cursor: "pointer" }
                          : { backgroundColor: "#ffffff", cursor: "pointer" };
                        return (
                          <div 
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                            
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        );
                      })}
                    </div>
                </>
              )}
            </PlacesAutocomplete>
            {/* <input
              value={address}
              name="address"
              onChange={addressChange}
              className="border border-[#EDF3F3] bg-gray-50 rounded-full w-10/12 h-14 p-5 font-semibold"
              type="text"
              placeholder="your address"
            /> */}
            {form_errors.Address && (
              <p className="text-red-500">{form_errors.Address}</p>
            )}
          </form>
        </div>

        {/* button */}
        <div className="w-11/12  flex items-center justify-center my-9">
          <button
            className="w-4/12 h-12 rounded-full text-center font-bold text-xl bg-[#715BA8] text-white"
            onClick={handleclick}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards4;
