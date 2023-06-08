import React from "react";

import OnlineEcommerceShopItApp from "../assets/Portfolio/online-ecommerce-shopit-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: OnlineEcommerceShopItApp,
      demo: "https://online-ecommerce-shopit.netlify.app/",
      code: "https://github.com/MdFahad23/MERN_ECOMMERCE_SHOPIT_FRONTEND_APP",
    },
    {
      id: 2,
      src: OnlineEcommerceShopItApp,
    },
    {
      id: 3,
      src: OnlineEcommerceShopItApp,
    },
    {
      id: 4,
      src: OnlineEcommerceShopItApp,
    },
    {
      id: 5,
      src: OnlineEcommerceShopItApp,
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                className="h-[250px] w-full rounded-md duration-150 hover:scale-105"
                alt=""
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
                <a
                  href={code}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
