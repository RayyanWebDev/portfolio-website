import React from "react";

const Project = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto  grid justify-center font-bold text-4xl mt-16 mb-4">
        Portfolio
      </div>
      <div className="max-w-screen-xl mx-auto  grid justify-center font-bold text-xl mb-8">
        Check Out some of my work right here
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/vjbHK0y/screencapture-cinehub-firebase-web-app-2023-12-12-17-31-01-1.png"
                alt="Shoes"
                className="rounded-xl w-32"
              />
            </figure>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href =
                    "https://sustain-serve-project.web.app/")
                }
              >
                Demo
              </button>
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href = "https://cinehub-firebase.web.app/")
                }
              >
                Code
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/JFmQ9fd/screencapture-lilac-cosmetic-website-web-app-2023-12-12-17-29-19.png"
                alt="Shoes"
                className="rounded-xl w-32"
              />
            </figure>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/RayyanWebDev/brand-shop-client-side-public")
                }
              >
                Demo
              </button>
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href =
                    "https://lilac-cosmetic-website.web.app/")
                }
              >
                Code
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div>
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/G34T2bs/screencapture-sustain-serve-project-web-app-2023-12-12-17-30-02.png"
                alt="Shoes"
                className="rounded-xl w-32"
              />
            </figure>
          </div>
          <div className="card-body items-center text-center">
            <div className="card-actions justify-end">
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/RayyanWebDev/sustain-serve-client-project")
                }
              >
                Demo
              </button>
              <button
                className="btn btn-ghost"
                onClick={() =>
                  (window.location.href =
                    "https://sustain-serve-project.web.app/")
                }
              >
                Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
