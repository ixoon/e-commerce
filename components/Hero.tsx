import React from 'react'

const Hero = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 pt-32 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Leva strana - tekst */}
        <div className="flex flex-col max-w-xl text-center md:text-left">
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight">
            Discover Your
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-amber-300 bg-clip-text mt-2">
            Perfect Style
          </h1>
          <p className="text-white font-medium text-lg mt-8 leading-relaxed">
            Explore our curated collection of premium products designed to elevate your lifestyle and express your unique personality.
          </p>
          
          {/* Dugmad */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <button className="bg-white px-3 py-3 rounded-xl w-40 text-purple-600 font-bold shadow-md hover:bg-gray-200 transition">
              Shop Now ➡️
            </button>
            <button className="border-2 border-white px-3 py-3 w-40 rounded-xl text-white font-bold hover:bg-white hover:text-black transition">
              View Collection
            </button>
          </div>

          {/* Statistika */}
          <div className="grid grid-cols-3 gap-6 mt-12 text-white">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold">10K+</h1>
              <p className="mt-2 font-medium text-sm">Happy Customers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold">500+</h1>
              <p className="mt-2 font-medium text-sm">Premium Products</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-extrabold">4.9</h1>
              <p className="mt-2 font-medium text-sm">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Desna strana - slika */}
        <div className="flex-shrink-0">
          <img 
            src="/assets/images/image1.jpg" 
            alt="Hero" 
            className="w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
