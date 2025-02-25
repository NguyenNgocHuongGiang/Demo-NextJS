import { fetchShoes } from "@/server/actions/productApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Shoes Store",
  description:
    "Explore our wide range of shoes with the best prices and quality.",
  openGraph: {
    title: "Shoes Store",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    url: "https://shoesshopbc70.vercel.app",
    images: [
      {
        url: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
        width: 800,
        height: 600,
        alt: "Shoes App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoes App - Home",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    images: ["https://apistore.cybersoft.edu.vn/images/van-old-school.png"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shoes App",
    url: "https://yourwebsite.com",
    description:
      "Explore our wide range of shoes with the best prices and quality.",
    image: "https://yourwebsite.com/images/og-image.jpg",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourwebsite.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },
};


export default async function About() {
  

  const data = await fetchShoes();
  console.log(data);

  return (
    <div className="px-11 py-5 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {data.map((shoe: Shoe) => (
        <div key={shoe.id}>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src={shoe.imgLink}
                alt={shoe.name}
                width={300}
                height={200}
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {shoe.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {shoe.shortDescription}
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View detail
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
