import { IntlProvider } from "react-intl";
import "./App.css";

import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";

const getMessages = async (locale) => {
  switch (locale) {
    case "ja":
      return import("./locales/ja.json");
    // Add more cases for other languages
    default:
      return import("./locales/en.json");
  }
};

function App() {
  const [locale, setLocale] = useState("en"); // Default language
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    loadMessages(locale);
  }, [locale]);

  const loadMessages = async (locale) => {
    const messages = await getMessages(locale);
    setMessages(messages.default);
  };

  const changeLanguage = (locale) => {
    setLocale(locale);
  };

  if (!messages) {
    return <div>Loading...</div>;
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className=" h-screen w-full bg-[url('../public/images/gaelle-marcel-Y1kFBWWzOP4-unsplash.jpg')] bg-no-repeat bg-center bg-cover py-8 px-28 max-sm:px-5 max-md:px-5">
        <Header />
        <Main />
      </div>
      {/* Your app components */}
    </IntlProvider>
  );
}

export default App;
