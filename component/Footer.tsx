import * as React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-32 py-6 mt-20 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1200px]">
        <div className="flex flex-col justify-center self-stretch py-px my-auto min-w-[240px] w-[380px]">
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/476f50907d5c690420bb50d92b05112d39c3dcc8aab73c2100c602d16a4ab826?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt="Company Logo Footer"
            width={380}
            height={38}
            className="object-contain"
          />
        </div>
        <div className="self-stretch my-auto text-xs font-medium tracking-wide text-gray-600 min-w-[240px] max-md:max-w-full">
          © Honda Motor Co., Ltd. and its subsidiaries and affiliates. All
          Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
