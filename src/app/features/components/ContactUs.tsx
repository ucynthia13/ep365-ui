"use client";
import { useState } from "react";
import Image from "next/image";

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative z-10 pt-12 sm:pt-16 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-2 items-center">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border max-w-md mx-auto">
          <h3 className="text-gray-900 font-medium text-sm mb-1">
            See how EP365 works
          </h3>
          <p className="text-xs text-gray-500 mb-6">STEP 1 OF 3</p>
          <p className="text-gray-800 font-semibold mb-6">
            Let’s get started! Tell us about yourself.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full"
                required
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full"
                required
              />
            </div>
            <input
              name="company"
              type="text"
              placeholder="Company Name*"
              value={form.company}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-4 py-2 text-sm w-full"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-full py-2 transition"
            >
              Start Booking
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4">
            By clicking on &quot;Request a Demo&quot;, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            . This site is protected by reCAPTCHA and the{" "}
            <a href="#" className="underline">
              Google Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-800 mb-6">
            Want to see EP365 in action? Easy.
            Here’s how:
          </p>

          <Image
            src="/images/featuresPage/lottie-player.svg"
            alt="Lottie"
            width={100}
            height={100}
            className="w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
