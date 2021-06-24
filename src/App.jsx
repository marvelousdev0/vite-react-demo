import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGripLinesVertical, faLink } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="w-screen h-screen">
      <h1 className="text-6xl font-extrabold">React + Tailwind + Vite</h1>

      <div className="bg-sky-100 rounded-lg w-max m-4 text-sky-700">
        <div class="relative flex items-center p-2 h-full">
          <div className="w-max p-4 flex flex-col justify-start items-center">
            <img src="/src/vm.svg" alt="vm" className="h-24 w-24" />
            <span className="text-2xl font-bold text-sky-700">
              Vamshi Maddur
            </span>
          </div>
          <div className="absolute top-0 bottom-0 left-1/3 w-0 h-full border border-sky-700"></div>
          <div className="w-max ml-20 p-4 flex flex-col justify-start items-start">
            <div className="flex items-center">
              <a
                href="https://www.linkedin.com/in/vamshimaddur/"
                className="mr-4"
              >
                <div className="text-xl rounded-full bg-sky-200 text-sky-700 h-10 w-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
              </a>
              <a href="https://vamshimaddur.me/">
                <div className="text-xl rounded-full bg-sky-200 text-sky-700 h-10 w-10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLink} />
                </div>
              </a>
            </div>
            <div className="mt-8 flex items-center">
              <a
                href="mailto:contact@vamshimaddur.me"
                className="hover:underline"
              >
                contact@vamshimaddur.me
              </a>
              <FontAwesomeIcon icon={faGripLinesVertical} className="mx-2" />
              <a
                href="mailto:maddur.vamshi@gmail.com"
                className="hover:underline"
              >
                maddur.vamshi@gmail.com
              </a>
            </div>
            <div className="mt-2">
              <a href="tel:+1-201-253-6141" className="hover:underline">
                (201)-253-6141
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
