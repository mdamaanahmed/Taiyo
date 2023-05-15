import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <>
      {/* <!-- Navigation Toggle --> */}
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        type="button"
        className="text-gray-500 hover:text-gray-600 m-2"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle Navigation</span>
        <svg
          className="w-6 h-6"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </button>
      {/* <!-- End Navigation Toggle --> */}

      <div
        id="docs-sidebar"
        className={`${
          showSidebar && width < 768
            ? "block translate-x-0 fixed top-0 left-0 z-[100000] right-auto bottom-0 w-full bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y shadow-xl"
            : "hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[40] w-56 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y md:block md:translate-x-0 md:right-auto md:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
        }`}
      >
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={`${
            showSidebar && width < 768
              ? "absolute top-5 right-5 text-gray-600 cursor-pointer"
              : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="px-6">
          <Link
            className="flex-none text-2xl font-bold dark:text-white"
            to="/"
            aria-label="Brand"
          >
            Taiyo.Ai
          </Link>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-slate-700 font-semibold rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                to="/"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-x-3.5 py-2 px-2.5 text-slate-700 font-semibold rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                to="/cases"
              >
                Charts and Maps
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
