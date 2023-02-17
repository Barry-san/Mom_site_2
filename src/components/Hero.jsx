//create 3 divs in the container
//make contaier a grid with 3 rows
// add each section to the divs and center
function Hero() {
  return (
    <div className="h-screen font-mono  grid  max-w-full">
      <div
        className="hero max-w-full min-h-3/4
        grid grid-rows-3 justify-center
         items-center rounded-lg p-2"
      >
        <div className="cta flex flex-col  gap-12 items-center justify-center max-w-full h-full">
          <h1 className="uppercase md:text-6xl text-4xl font-bold text-blue-500 font-inter">
            God is able ventures
          </h1>
        </div>
        <div className="md:max-w-5xl max-width-full grid place-items-center">
          <p className="md:text-lg text-gray-500 md:text-center font-Roboto">
            God is able Ventures is your one-stop shop for all your beverage
            needs. We sell a wide variety of beverages in both wholesale and
            retail quantities. Whether you are a restaurant owner looking to
            stock up on drinks for your customers or an individual looking to
            purchase a few bottles of your favorite soda, we have you covered.
            Our selection includes everything from soda and water to Juices and
            Yogurt. We have it all! We pride ourselves on offering high-quality
            beverages at competitive prices, and our friendly and knowledgeable
            staff is always on hand to help you find the perfect drink for your
            needs. So stop by today and check out our extensive selection of
            beverages!
          </p>
        </div>
        <div
          className="flex justify-center flex-col
           md:flex-row p-8 gap-12 text-lg"
        >
          <button
            className="px-10 py-1 bg-blue-500
        text-white bg shadow-lg hover:shadow-slate-600 
          rounded-md shadow-slate-500"
          >
            Contact us
          </button>
          <button className="px-10 py-1 shadow-lg hover:shadow-xl transition-shadow">
            Our prices
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
