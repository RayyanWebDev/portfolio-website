import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left mr-72">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="py-6 text-3xl">Let's Create Something Big</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              action="https://getform.io/f/b12833b3-a99e-43ea-9bf8-f440862d8db6"
              method="POST"
              className="card-body"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md "
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
