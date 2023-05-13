import React from 'react';

const Main = () => {
  return (
    <div className=" text-center mt-[80px] text-white">
      <h1 className=" text-6xl -tracking-wider font-Raleway font-extrabold text-[#2c3c13] uppercase">
        Become A <br></br>
        Group{" "}
        <span className=" ml-2 text-[#6dad04] tracking-widest">Leader</span>
      </h1>
      <p className=" mt-4 text-[#e6e9ed] font-medium text-lg">
        Earn up to 1,000,000 Naira per annum as a group leader.
      </p>
      <button
        className="mt-2 transition-all bg-[#6dad04] px-4 py-2 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent"
        type="SignUp"
      >
        Create your Group
        <i class="fa-solid fa-user-group ml-1"></i>
      </button>
      <p className="mt-4 text-center text-[#e6e9ed] font-medium text-lg">
        Get groceries and foodstuff that are the most affordable <br></br> on
        the continent with zero stress.
      </p>
      <button
        className="mt-2 transition-all bg-[#6dad04] px-4 py-2 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent"
        type="SignUp"
      >
        Join a Group
        <i class="fa-solid fa-user-group ml-1"></i>
      </button>
      {/* <p className=" mt-1">Available soon on</p>
      <div className="flex flex-row content-center justify-center gap-4 -mt-2">
        <button type="">
          <img className="w-[95px]" src={Apple} alt=""></img>
        </button>
        <button type="">
          <img className="w-[120px]" src={Android} alt=""></img>
        </button>
      </div> */}
      <div className=" w-300px flex text-center justify-center content-center">
        <form className=" mt-2">
          <h2>Count me In!</h2>
          <div className=" relative">
            <label className=" text-xs font-semibold" for="">
              Get the early access, news & updates.
            </label>
            <input
              className=" w-[250px] block h-8 mt-1 border-none outline-none bg-[#ffffff] text-[#000000] text-center cursor-pointer text-xs rounded-full focus:outline-[2px] focus:outline-[#6dad04] "
              placeholder="Enter your email here*"
              type="email"
              required
            ></input>
            <button className=" text-sm bg-transparent border-2 border-[#6dad04] rounded-full px-" type="">Sign Me Up!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
