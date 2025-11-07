function App() {
  return (
    <div className="bg-neutralBlue-900 w-96 p-6 rounded-2xl">
      <figure className="relative group">
        <div className="absolute z-10 top-0 bottom-0 left-0 right-0 rounded-xl opacity-50  group-hover:bg-primaryCyan-400 "></div>
        <img
          src="./images/image-equilibrium.jpg"
          alt="equilibrium image"
          className="rounded-xl"
        />
        <img
          src="./images/icon-view.svg"
          alt="view icon"
          className="absolute top-37 right-35.5 z-10 opacity-0 group-hover:opacity-100"
        />
      </figure>

      <h1 className="mt-6 text-2xl font-semibold hover:text-primaryCyan-400 hover:cursor-pointer">
        Equilibrium #3429
      </h1>

      <p className="mt-6 text-lg text-primaryBlue-500 ">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div className="flex justify-between mt-6 text-lg ">
        <div className="flex items-center font-semibold text-primaryCyan-400">
          <img
            src="./images/icon-ethereum.svg"
            alt="ethereum icon"
            className="mr-2"
          />
          0.041 ETH
        </div>
        <div className="flex items-center text-primaryBlue-500">
          <img
            src="./images/icon-clock.svg"
            alt="clock icon"
            className="mr-2 "
          />
          3 days left
        </div>
      </div>

      <figure className="border-t mt-6">
        <div className="mt-6 flex items-center text-lg">
          <img
            src="./images/image-avatar.png"
            alt="image of Jules Wyvern"
            className="w-10 h-10 border-2 rounded-full mr-4"
          />
          <figcaption>
            <span className="text-primaryBlue-500">Creation of</span><span className="hover:text-primaryCyan-400 hover:cursor-pointer"> Jules Wyvern</span>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default App;
