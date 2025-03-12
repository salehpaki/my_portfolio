import React from "react";

const Contact = () => {
  return (
    <section
    id="contact" 
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-200 to-black-200 px-6">
      {/* Title */}
      <h2 className="mt-20 text-xl md:text-2xl font-bold border-2 border-black px-8 py-2 inline-block mb-4">
        CONTACT
      </h2>

      {/* Subtitle */}
      <p className="text-center text-gray-600 max-w-lg mb-4">
      Get a simple yet effective solution! If you need professional services, feel free to contact me      </p>

      {/* Divider */}
      <div className="mb-6 border-t-2 border-black w-16 mx-auto relative">
        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-black">&#x2726;&#x2726;&#x2726;</span>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-lg flex flex-col space-y-6">
        <input
          type="text"
          placeholder="ENTER YOUR NAME*"
          className="w-full border-b-2 border-black outline-none py-2 text-black placeholder-black bg-transparent"
        />
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL*"
          className="w-full border-b-2 border-black outline-none py-2 text-black placeholder-black bg-transparent"
        />
        <input
          type="text"
          placeholder="PHONE NUMBER"
          className="w-full border-b-2 border-black outline-none py-2 text-black placeholder-black bg-transparent"
        />
        <textarea
          placeholder="YOUR MESSAGE*"
          className="w-full border-2 border-black outline-none p-3 text-black placeholder-black bg-transparent h-32"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 text-black font-semibold tracking-wide border-t-2 border-black py-2 flex items-center justify-center gap-2 hover:opacity-80 transition"
        >
          SUBMIT
          <span className="border-l-2 border-black h-4"></span>
        </button>
      </form>
    </section>
  );
};

export default Contact;