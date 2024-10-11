import React from "react";

function Newsletter() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo{" "}
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                className="inline-block ml-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.71673 7.75012L10.4358 6.03101C10.6397 5.82714 10.6397 5.49658 10.4358 5.2927L8.71673 3.5736M10.2829 5.66186L2.62598 5.66186"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
