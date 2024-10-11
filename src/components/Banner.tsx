import React from "react";
import LogoImg from "../../public/logo.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image src={LogoImg} alt="logo-image" width={1920} height={600} />
    </div>
  );
};

export default Banner;
