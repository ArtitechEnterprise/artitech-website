import Container from "@/components/customs/container";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TeamGrid = () => {
  return (
    <Container className="container mx-auto py-8">
      <h2 className="text-left  text-3xl font-semibold mb-10">
          L&apos;equipe
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Member 1 */}
        <div className="text-center relative">
          <div className="relative">
            <img
              src="/image(5).png"
              alt="Victon Smith"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-4 bg-yellow-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full">
              A
            </div>
          </div>
          <div className="bg-gray-100 shadow-lg p-4 rounded-lg mt-4">
            <p className="font-semibold text-lg dark:text-black">Victon Smith</p>
            <p className="text-sm text-gray-500">CEO, Director</p>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="bg-gray-100 py-2 px-4 rounded-full font-semibold text-gray-700 shadow-md">Follow</button>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="text-center relative">
          <div className="relative">
            <img
              src="/image(6).png"
              alt="Jane Doe"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-4 bg-yellow-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full">
              B
            </div>
          </div>
          <div className="bg-gray-100 shadow-lg p-4 rounded-lg mt-4">
            <p className="font-semibold text-lg dark:text-black">Jane Doe</p>
            <p className="text-sm text-gray-500">Marketing Head</p>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="bg-gray-100 py-2 px-4 rounded-full font-semibold text-gray-700 shadow-md">Follow</button>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="text-center relative">
          <div className="relative">
            <img
              src="/image(7).png"
              alt="Mike Johnson"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute bottom-0 left-4 bg-yellow-500 text-black font-bold w-10 h-10 flex items-center justify-center rounded-full">
              C
            </div>
          </div>
          <div className="bg-gray-100 shadow-lg p-4 rounded-lg mt-4">
            <p className="font-semibold text-lg dark:text-black">Mike Johnson</p>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
          <div className="flex justify-center items-center mt-4 space-x-4">
            <button className="bg-gray-100 py-2 px-4 rounded-full font-semibold text-gray-700 shadow-md">Follow</button>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamGrid;