import * as React from "react";
import Image from "next/image";
import { FilterSectionProps } from "./types";

export const FilterSection: React.FC<FilterSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col pt-3 pr-2 pb-4 pl-4 w-full whitespace-nowrap bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.15)]">
      <div className="flex items-center max-w-full font-bold min-h-[24px] w-[254px]">
        <div className="self-stretch my-auto w-[230px]">{title}</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42a95c112db45c5d15d428e1c4b41ff40b4dc65767cafc01f5322a2ccd02c463?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
          alt="アイコン"
          width={24} // ⭐️ 幅を追加 (w-6 = 24px)
          height={24} // ⭐️ 高さを追加 (aspect-squareなので同じ値)
          className="object-contain shrink-0 self-stretch my-auto"
        />
      </div>
      <div className="flex flex-col mt-4 w-full font-medium">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 items-center w-full min-h-[19px] mt-2.5 first:mt-0"
          >
            <div className="self-stretch my-auto">{item.label}</div>
            <div className="self-stretch my-auto">({item.count})</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
