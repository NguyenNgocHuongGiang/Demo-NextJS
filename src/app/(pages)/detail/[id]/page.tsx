import { getProductById } from "@/server/actions/productApi";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }: any) {
  const prodDetail = await getProductById(params.id);

  return {
    title: `${prodDetail.name} - Product Detail`,
    description: prodDetail.description,
    openGraph: {
      title: prodDetail.name,
      description: prodDetail.description,
      url: `https://yourwebsite.com/products/${params.id}`,
      images: [
        {
          url: prodDetail.image,
          width: 500,
          height: 500,
          alt: prodDetail.alias,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: prodDetail.name,
      description: prodDetail.description,
      images: [prodDetail.image],
    },
  };
}


export default async function DetailPage({ params }: any) {
  const { id } = params;

  const productDetail = await getProductById(id);

  return (
    <div className="px-11 py-5 flex ">
      <Image
        className="flex-1"
        src={productDetail.image}
        alt={productDetail.name}
        width={200}
        height={200}
      />
      <div className="mt-5 flex-1">
        <h2 className="text-2xl font-bold mb-5">{productDetail.name}</h2>
        <p className="mb-5">{productDetail.description}</p>
        <p className="text-2xl text-yellow-400 font-bold">{productDetail.price}</p>
      </div>
    </div>
  );
}
