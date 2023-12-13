const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/xXjw0qf/Screenshot.png"
            className="max-w-sm rounded-lg shadow-2xl mx-auto w-64"
          />
          <div className="mr-72">
            <p className="py-6 text-2xl font-semibold">
              Hello, I'm Mohammad Rayyan
            </p>
            <h1 className="text-5xl font-bold">A Front-End Developer</h1>
            <p className="py-6">
              Have proficiency in Back-End Technologies namely mongoDB. <br />
              Love to work in web application using React, Tailwind, Express.js
              and GSAP.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1bMw5eWfPfN9jJRnyNiAAoFkpNTNf8aK6"
              download="Resume"
              className="btn btn-primary"
            >
              {/* <a
              href="https://drive.google.com/file/d/1bMw5eWfPfN9jJRnyNiAAoFkpNTNf8aK6/view?usp=sharing"
              download="Resume"
              className="btn btn-primary"
            > */}
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
