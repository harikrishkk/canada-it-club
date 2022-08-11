import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <div className="flex justify-center mb-8">
            <FaQuoteRight size={40} />
          </div>

          <p className="leading-relaxed text-lg">
            All the very best for such a wonderful initiative! Let this be a one
            stop reference for all the IT aspirants & professionals, to build
            network and help each other and prosper in their respective area of
            expertise!
          </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            Sudheer Naik
          </h2>
          <p className="text-gray-500">
            Scrum Master & Founder of Canada IT Club
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
