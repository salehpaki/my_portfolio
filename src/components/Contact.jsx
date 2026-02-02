import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_la4q594",
        "template_p21t41d",
        form.current,
        "xx6s63HeKGCEUL_dr"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-200 to-black-200 px-6"
    >
      <h2 className="mt-20 text-xl md:text-2xl font-bold border-2 border-black px-8 py-2 mb-4">
        CONTACT
      </h2>

      <p className="text-center text-gray-600 max-w-lg mb-4">
        Get a simple yet effective solution! If you need professional services,
        feel free to contact me
      </p>

      <div className="mb-6 border-t-2 border-black w-16 mx-auto relative">
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-black">
          ✦✦✦
        </span>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg flex flex-col space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="ENTER YOUR NAME*"
          required
          className="border-b-2 border-black py-2 bg-transparent outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="ENTER YOUR EMAIL*"
          required
          className="border-b-2 border-black py-2 bg-transparent outline-none"
        />

        <input
          type="text"
          name="phone"
          placeholder="PHONE NUMBER"
          className="border-b-2 border-black py-2 bg-transparent outline-none"
        />

        <textarea
          name="message"
          placeholder="YOUR MESSAGE*"
          required
          className="border-2 border-black p-3 bg-transparent outline-none h-32"
        />

        <button
          type="submit"
          className="border-t-2 border-black py-2 font-semibold hover:opacity-80"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Contact;
