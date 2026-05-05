"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#F2F0E9] px-6 py-24 text-[#2C2C2B] md:px-20 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16">
          <Link
            href="/"
            className="inline-block cursor-pointer font-serif text-lg tracking-[0.08em] transition-all duration-500 ease-out hover:opacity-70 hover:tracking-wider"
          >
            VELLUM
          </Link>
        </div>

        <div className="mx-auto max-w-3xl space-y-14">
          <div className="space-y-6 text-center">
            <p className="font-sans text-[0.7rem] uppercase tracking-[0.28em] text-[#A68B5B]">
              Contact
            </p>
            <h1 className="font-serif text-5xl font-light leading-[0.94] md:text-7xl">
              Begin with a
              <br />
              considered note.
            </h1>
            <p className="mx-auto max-w-xl font-sans text-base leading-8 md:text-lg md:leading-9">
              Tell us the shape of the work, the atmosphere you are after, and
              what should remain unforgettable once it is finished.
            </p>
          </div>

          <form className="space-y-12" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-4 block font-sans text-[0.72rem] uppercase tracking-[0.24em] text-[#A68B5B]">
                Name
              </span>
              <input
                type="text"
                name="name"
                className="w-full cursor-text border-b border-[#A68B5B]/60 bg-transparent pb-4 font-sans text-lg text-[#2C2C2B] outline-none placeholder:text-[#2C2C2B]/45"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-4 block font-sans text-[0.72rem] uppercase tracking-[0.24em] text-[#A68B5B]">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="w-full cursor-text border-b border-[#A68B5B]/60 bg-transparent pb-4 font-sans text-lg text-[#2C2C2B] outline-none placeholder:text-[#2C2C2B]/45"
                placeholder="name@studio.com"
              />
            </label>

            <label className="block">
              <span className="mb-4 block font-sans text-[0.72rem] uppercase tracking-[0.24em] text-[#A68B5B]">
                Nature of the Vision
              </span>
              <textarea
                name="vision"
                rows={5}
                className="w-full resize-none cursor-text border-b border-[#A68B5B]/60 bg-transparent pb-4 font-sans text-lg leading-8 text-[#2C2C2B] outline-none placeholder:text-[#2C2C2B]/45"
                placeholder="A new house, a publication, a place, a quieter identity..."
              />
            </label>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="cursor-pointer font-serif text-3xl font-light transition-all duration-500 ease-out hover:opacity-70 hover:tracking-wider"
              >
                Send Inquiry
              </button>
            </div>

            {submitted ? (
              <p className="text-center font-sans text-sm uppercase tracking-[0.18em] text-[#A68B5B]">
                Inquiry received in principle.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}
