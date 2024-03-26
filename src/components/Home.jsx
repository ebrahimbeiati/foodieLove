

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpeg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className=" text-white text-5xl font-semibold"> Find your desired food here.</h1>
        <p className="text-white">
          Savor the taste of true culinary affection at FoodieLove, where each
          meal is an expression of love for food and an invitation to delight.
        </p>
        <div className="lg:pl-44">
          <button className=" px-4 py-2 border-2 rounded-full border-amber-600 text-amber-600  font-medium hover:bg-amber-700 hover:text-white transition-all">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home