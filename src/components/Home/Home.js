import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font border-l-4 pl-1 border-solid border-gray-700 sm:text-4xl 
      text-3xl mb-4 font-medium text-gray-900">Car Shipping Specialists
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed text-[17px]">We can source and export the prestige new and used vehicle of your dreams from anywhere, VAT-free.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600
         rounded text-lg">Find Out More</button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/Kq5bksC/exportimport-1024x725.jpg"/>
    </div>
  </div>
</section>
        </div>
    );
};

export default Home;