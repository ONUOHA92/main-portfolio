import React from "react";
import betacare from '../assets/betaCare.png'
import banking from '../assets/banking.png'
import githubfinder from '../assets/githubfinder.png'
import calculator  from '../assets/calculator.png'
import colorgen from '../assets/colorgen.png'
import ani from '../assets/ani.png'



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: betacare,
      link: 'https://betacare.ng/',
      repo: 'https://github.com/ONUOHA92/backgroundGenerator'

    },
    {
      id: 2,
      src: banking,
      link: 'https://elegant-cranachan-aab706.netlify.app/',
      repo: 'https://github.com/ONUOHA92/backgroundGenerator'
    },
    {
      id: 3,
      src: githubfinder,
      link: 'https://gallant-feynman-95ed3f.netlify.app/',
      repo: 'https://github.com/ONUOHA92/github-search-user-redesign'
    },
    {
      id: 4,
      src: calculator,
      link: 'https://rad-salmiakki-938fb9.netlify.app/',
      repo: 'https://github.com/ONUOHA92/backgroundGenerator'
    },
    {
      id: 5,
      src: colorgen,
      link: 'https://xenodochial-nightingale-8345d2.netlify.app/',
      repo: 'https://github.com/ONUOHA92/backgroundGenerator'
    },
    {
      id: 6,
      src: ani,
      link: 'https://infallible-heisenberg-67aebd.netlify.app/?',
      repo: 'https://github.com/ONUOHA92/Animated-form'
    },
  ];



  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            < div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

                <a href={link} className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>


                <a href={repo} className="px-6 py-3 w-1/2 m-4 duration-200 hover:scale-105">
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