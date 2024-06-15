import hero1 from "../assets/img/hero1.jpeg";
const About = () => {
  return (
    <>
      <div className="pt-1 mt-2 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center mb-10 pt-2 md:px-32 px-5">
          About Us{" "}
        </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:px-35 px-4 mt-2 pb-24 rounded pt-32 space-y-4 lg:space-y-0">
        <img
          src={hero1}
          alt="about"
          loading="lazy"
          className="rounded-lg shadow-[rgba(0,0,0,0.24)] shadow-md dark:shadow-[rgba(255,255,255,0.24)] dark:shadow-md mx-auto lg:w-1/2 md:w-3/4 sm:w-full"
        />

        <div className="lg:pl-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center md:text-center">
              Why Choose Us?
            </h1>
            <p className="text-center md:flex md:flex-wrap md:items-center justify-center">
              We are committed to providing our customers with the best possible
              service. We take your safety and comfort seriously. 
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center md:text-center">
              Our Mission
            </h1>
            <p className="text-center md:flex md:flex-wrap md:items-center justify-center">
              Our mission is to provide you with the best possible service. We
              are committed to providing our customers with the best possible
              service. We take your safety and comfort seriously.
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center md:text-center">
              Our Vision
            </h1>
            <p className="text-center md:flex md:flex-wrap md:items-center justify-center">
              Our vision is to provide you with the best possible service. We
              are committed to providing our customers with the best possible
              service. We take your safety and comfort seriously.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
