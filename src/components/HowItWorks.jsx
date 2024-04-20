import React from 'react';

const HowItWorks = () => {
  return (
    <>
     {/* Add steps or illustrations here */}
     <section  className="relative py-10 sm:py-16 lg:py-24 bg-[#007F73] text-center">
      <h2 className="text-4xl text-white font-bold ">How It Works</h2>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="max-w-2xl mx-auto mt-4 text-base text-white leading-relaxed md:text-xl">
              Our APP is tailored with ease from start to finish
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#F2AA4C] border-2 border-[#F2AA4C] rounded-full shadow">
                  <span className="text-xl font-semibold text-black">1</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Prepare your list </h3>
                <p className="mt-4 text-base text-white md:text-lg">Sign Up and make a list of items you want to shop for. </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#F2AA4C] border-2 border-[#F2AA4C] rounded-full shadow">
                  <span className="text-xl font-semibold text-black">2</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Shopper picks item lists</h3>
                <p className="mt-4 text-base text-white md:text-lg">Available shoppers pick the item list and do the shopping for you.</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#F2AA4C] border-2 border-[#F2AA4C] rounded-full shadow">
                  <span className="text-xl font-semibold text-black">3</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">Delivered to you</h3>
                <p className="mt-4 text-base text-white md:text-lg">After shopping, your items are delivered safely at your door step</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg" style={{ background: 'radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)' }}></div>
      </section>
    </>
  );
};

export default HowItWorks;
