

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpeg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className=" text-black text-5xl font-semibold bg-slate-200 p-3"> Find your desired food here.</h1>
        <p className="text-black text-3xl bg-slate-200">
          Savor the taste of true culinary affection at FoodieLove, where each
          meal is an expression of love for food and an invitation to delight.
        </p>
      
      </div>
    </div>
  );
}

export default Home