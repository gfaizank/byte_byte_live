"use client";
import * as React from "react";
import { useState, useEffect } from "react";

const ExpertiseBgImg = (props) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={385}
      height={311}
      fill="none"
      className="stroke-transparent dark:stroke-[#1565C033]"
      {...props}
    >
      <path
        className=" fill-[#FFFFFF80] dark:fill-[#181919]"
        stroke="1"
        fillOpacity={0.5}
        fillRule="evenodd"
        d="M173.667 0c-8.284 0-15 6.716-15 15v18.608H15.66c-8.284 0-15 6.715-15 15v108.877c0 8.284 6.716 15 15 15h116.267v123.383c0 8.284 6.716 15 15 15h222.325c8.284 0 15-6.716 15-15V142.016c0-8.285-6.716-15.001-15-15l-74.867.001h-71.948l-31.196-.001V66.72h47.23c8.284 0 15-6.715 15-15V15c0-8.284-6.716-15-15-15h-64.804Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ExpertiseBgImg;