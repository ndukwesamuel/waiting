import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const Main = () => {
  const [Email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const Submit = async (e) => {
    e.preventDefault();

    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var requestOptions = {
        method: "post",
        headers: myHeaders,
        redirect: "follow",
        body: JSON.stringify([[Email, new Date().toLocaleDateString()]]),
      };

      fetch(
        "https://v1.nocodeapi.com/samheart/google_sheets/EiIEnYxkJVtmxmoL?tabId=Sheet1",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      setIsOpen(true);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className="mt-[80px] text-white px-[90px] max-sm:px-[0px] max-md:px-[0px]">
        <a className="cursor-pointer" href="/">
          <h1 className="font-extrabold text-white text-center text-5xl max-sm:text-3xl max-md:text-4xl ">
            WE
            <span className="font-extrabold text-[#6dad04] border-2 border-[#6dad04] px-1 ml-1">
              BUY
            </span>{" "}
            is launching soon...
          </h1>
        </a>
        <p className="font-semibold text-lg max-sm:text-base max-md:text-lg text-center mt-6 max-sm:text-left max-sm:mt-3 ">
          Join the revolution of buying in bulk! Our platform makes it{" "}
          <span className="text-[#6dad04] border-2 border-[#6dad04] p-1 text-2xl max-sm:text-lg font-extrabold hover:border-none hover:underline hover:decoration-wavy hover:decoration-[#6dad04] hover:decoration-2 transition-all">
            easy and affordable
          </span>{" "}
          for groups of people. Don't miss out on the chance to save money on
          your purchases.
          <br className="hidden max-sm:block max-md:block"></br>
          Join our waitlist now to be the first to try it out. Whether you're a
          community organization or a group of friends, we've got you covered!{" "}
        </p>
        <div className="flex content-center justify-center mt-4">
          <button
            className="mt-2 transition-all bg-[#6dad04] px-8 py-2 max-sm:px-4 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent max-sm:text-sm max-md:text-base"
            type="SignUp"
          >
            Join a Group
            <i className="ml-1 fa-solid fa-user-group"></i>
          </button>
        </div>
        <div className="flex content-center justify-center text-center w-300px">
          <form className="mt-4">
            <h2 className="text-lg">Count me In!</h2>
            <div className="relative ">
              <label className="text-base max-sm:text-xs font-semibold">
                Get the early access, news & updates.
              </label>
              <input
                className="w-[300px] max-sm:w-[250px] block h-9 mt-1 border-none outline-none bg-[#ffffff] text-[#000000] text-center cursor-pointer text-sm rounded-full focus:outline-[2px] focus:outline-[#6dad04] "
                placeholder="Enter your email here*"
                type="email"
                value={Email}
                name="Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>

              <button
                className="mt-3 text-sm font-semibold bg-transparent border-2 border-[#6dad04] rounded-full px-6 max-sm:px-4 py-2 hover:bg-[#6dad04] transition-all"
                type="button"
                onClick={Submit}
              >
                Sign Me Up!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Main;
