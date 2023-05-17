import React, { useEffect, useState } from "react";
import Modal from "./Modal";

import { useIntl } from "react-intl";

const Main = () => {
  const [Email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const [lang, setLang] = useState("en");

  const [join, setJoin] = useState(false);

  const intl = useIntl();

  console.log(intl);

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
      setJoin(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen} />}
      <div className="mt-[80px] text-white px-[90px] max-sm:px-[0px] max-md:px-[0px]">
        <a className="cursor-pointer" href="/">
          {labg === "fn" ? (
            <h1 className="font-extrabold text-white text-center text-5xl max-sm:text-3xl max-md:text-4xl ">
              WE
              <span className="font-extrabold text-[#6dad04] border-2 border-[#6dad04] px-1 ml-1">
                BUY
              </span>{" "}
              is launching soon...
            </h1>
          ) : (
            <h1 className="font-extrabold text-white text-center text-5xl max-sm:text-3xl max-md:text-4xl ">
              NOUS
              <span className="font-extrabold text-[#6dad04] border-2 border-[#6dad04] px-1 ml-1">
                ACHETONS
              </span>{" "}
              va bientôt être lancé...
            </h1>
          )}
        </a>

        {lang === "en" && (
          <p className="font-semibold text-lg max-sm:text-base max-md:text-lg text-center mt-6 max-sm:text-left max-sm:mt-3">
            Getting groceries and foodstuff doesn't have to be so
            <span className="text-[#6dad04] border-2 border-[#6dad04] ml-3 p-1 text-2xl max-sm:text-lg font-extrabold hover:border-none hover:underline hover:decoration-wavy hover:decoration-[#6dad04] hover:decoration-2 transition-all">
              difficult and expensive
            </span>{" "}
            . We are building the digital infrastructure to enable you buy
            conveniently and affordably through trusted groups. Don't miss out
            on the chance to save money on your purchases. Be the first to know
            when we launch, join the wait-list.
          </p>
        )}

        {lang === "fn" && (
          <p className="font-semibold text-lg max-sm:text-base max-md:text-lg text-center mt-6 max-sm:text-left max-sm:mt-3">
            Acheter des courses et des produits alimentaires ne doit pas être si
            <span className="text-[#6dad04] border-2 border-[#6dad04] ml-3 p-1 text-2xl max-sm:text-lg font-extrabold hover:border-none hover:underline hover:decoration-wavy hover:decoration-[#6dad04] hover:decoration-2 transition-all">
              difficile et coûteux
            </span>{" "}
            . Nous construisons l'infrastructure numérique pour vous permettre
            d'acheter de manière pratique et abordable grâce à des groupes de
            confiance. Ne manquez pas l'occasion d'économiser de l'argent sur
            vos achats. Soyez le premier à savoir quand nous lançons, rejoignez
            la liste d'attente.
          </p>
        )}

        <div className="flex content-center justify-center mt-4 gap-1">
          <button
            className="mt-2 transition-all bg-[#6dad04] px-8 py-2 max-sm:px-4 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent max-sm:text-sm max-md:text-base"
            type="button"
            onClick={() => setLang("en")}
          >
            English
            <i className="ml-1 fa-solid fa-user-group"></i>
          </button>

          <button
            className="mt-2 transition-all bg-[#6dad04] px-8 py-2 max-sm:px-4 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent max-sm:text-sm max-md:text-base"
            type="button"
            onClick={() => setJoin(true)}
          >
            Join a Group
            <i className="ml-1 fa-solid fa-user-group"></i>
          </button>

          <button
            className="mt-2 transition-all bg-[#6dad04] px-8 py-2 max-sm:px-4 font-semibold rounded-md hover:border-2 border-[#6dad04] hover:bg-transparent max-sm:text-sm max-md:text-base"
            type="button"
            onClick={() => setLang("fn")}
          >
            français
            <i className="ml-1 fa-solid fa-user-group"></i>
          </button>
        </div>
        <div className="flex content-center justify-center text-center w-300px">
          {join && (
            <form className="mt-4">
              <h2 className="text-lg">Count me In!</h2>
              <div className="relative ">
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
                  {lang === "fn" ? "Inscrivez-moi " : "   Sign Me Up!"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
