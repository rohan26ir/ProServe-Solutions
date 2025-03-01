"use client"; // Ensure it's a client component

import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const { id } = useParams(); // Get the dynamic route parameter

  return (
    <div>
      <h1>Dynamic Page for ID: {id}</h1>
    </div>
  );
};

export default Page;
