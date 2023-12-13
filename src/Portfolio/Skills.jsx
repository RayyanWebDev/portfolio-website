import React from "react";

const Skills = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto  grid justify-center font-bold text-4xl mt-16 mb-4">
        Skills
      </div>
      <div className="max-w-screen-xl mx-auto  grid justify-center font-bold text-xl mb-8">
        Technologies I've worked on
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/kBVk2Zh/download-image-1702456572746-1.png"
              alt="Shoes"
              className="rounded-xl w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">HTML</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/5xGn8rR/CSS3-logo-and-wordmark-svg-1.png"
              alt="Shoes"
              className="rounded-xl w-24"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">CSS</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/yf2L7cn/Java-Script-Logo-1.png"
              alt="Shoes"
              className="rounded-xl w-60"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">JavaScript</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/89Cj333/React-icon-svg-1.png"
              alt="Shoes"
              className="rounded-xl w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">ReactJS</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/xGHpZhT/a9yxc48y3ay5dm2udzwizc2bdyph-1.png"
              alt="Shoes"
              className="rounded-xl w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">MongoDB</h2>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/jvC7fhy/image-1.png"
              alt="Shoes"
              className="w-32"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">TailwindCSS</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
