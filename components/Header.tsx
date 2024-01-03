import React from "react";
import Image from "next/image";

export function Header() {
  return (
    <div className="flex justify-center h-20">
      <Image src={"/logo.svg"} alt="logo mode" width={105} height={150} />
    </div>
  );
}
