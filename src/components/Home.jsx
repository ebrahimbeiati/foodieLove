

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpeg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white rounded text-5xl font-semibold bg-blue-600 p-4">
          {" "}
          Find your desired food here.
        </h1>
        <p className="text-white p-2 rounded text-3xl bg-blue-600">
          Savor the taste of true culinary affection at FoodieLove, where each
          meal is an expression of love for food and an invitation to delight.
        </p>
      </div>
    </div>
  );
}

export default Home