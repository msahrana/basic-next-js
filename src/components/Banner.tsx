import React from "react";
import LogoImg from "../../public/logo.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image src={LogoImg} alt="logo-image" width={1800} height={400} />
    </div>
  );
};

export default Banner;
