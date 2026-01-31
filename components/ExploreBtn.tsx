"use client";
import Image from "next/image";

export default function ExploreBtn() {
  return (
    <button
      id="explore-btn"
      className="mt-7 mx-auto"
      type="button"
      onClick={() => console.log("Click")}
    >
      <a href="#events">
        Explore Events
        <Image
          src="/icons/arrow-down.svg"
          className="invert"
          alt="arrow down"
          width={24}
          height={24}
        />
      </a>
    </button>
  );
}
