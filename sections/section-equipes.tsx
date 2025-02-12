import Container from "@/components/customs/container";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const SectionEquipes = () => {
  return (
    <Container className="container mx-auto py-8">
      <h2 className="mb-10 text-left text-3xl font-semibold">L&apos;equipe</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Member 1 */}
        <div className="relative text-center">
          <div className="relative">
            <Image
              width={400}
              height={400}
              src=""
              alt="Victon Smith"
              className="h-auto w-full rounded-lg"
            />
            <div className="absolute bottom-0 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
              A
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 shadow-lg">
            <p className="text-lg font-semibold dark:text-black">
              Victon Smith
            </p>
            <p className="text-sm text-gray-500">CEO, Director</p>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button className="rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700 shadow-md">
              Follow
            </button>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Member 2 */}
        <div className="relative text-center">
          <div className="relative">
            <Image
              width={400}
              height={400}
              src=""
              alt="Jane Doe"
              className="h-auto w-full rounded-lg"
            />
            <div className="absolute bottom-0 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
              B
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 shadow-lg">
            <p className="text-lg font-semibold dark:text-black">Jane Doe</p>
            <p className="text-sm text-gray-500">Marketing Head</p>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button className="rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700 shadow-md">
              Follow
            </button>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Member 3 */}
        <div className="relative text-center">
          <div className="relative">
            <Image
              src=""
              alt="Mike Johnson"
              className="h-auto w-full rounded-lg"
            />
            <div className="absolute bottom-0 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
              C
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-gray-100 p-4 shadow-lg">
            <p className="text-lg font-semibold dark:text-black">
              Mike Johnson
            </p>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4">
            <button className="rounded-full bg-gray-100 px-4 py-2 font-semibold text-gray-700 shadow-md">
              Follow
            </button>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-500"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-700"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-gray-700 hover:text-white" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-gray-700 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SectionEquipes;
