import * as React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-32 py-6 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1200px]">
        <div className="flex flex-col justify-center self-stretch py-px my-auto min-w-[240px] w-[380px]">
          <Image
            loading="lazy"
            src="https://geekpictures.co.jp/jp/wp-content/themes/geek/img/logo_head.svg"
            alt="Company Logo Footer"
            width={380}
            height={38}
            className="object-contain"
          />
        </div>
        <div className="self-stretch my-auto text-xs font-medium tracking-wide text-gray-600 min-w-[240px] max-md:max-w-full">
          Copyright © GEEK PICTURES Inc. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
