"use client";

import * as React from "react";
import Image from "next/image";

import { FilterSection } from "../../../component/FilterSection";
import { Pagination } from "../../../component/Pagination";
import { BusinessCard } from "../../../component/businesscard/BusinessCard";
import { businessCardsData, filterSections } from "./index";

const DocumentLibrary: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-gray-200">
      <header className="flex flex-wrap gap-5 justify-between px-10 py-4 w-full text-xs tracking-wider text-red-200 whitespace-nowrap bg-white max-md:px-5 max-md:max-w-full">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/756673b619d287511f3f97d02b174d7f6c6ecb3f005c37930de133249928f31e?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
          alt="Company Logo"
          width={360}
          height={36}
          priority
          className="object-contain my-auto"
        />
        <div className="flex flex-wrap gap-9">
          <div className="flex flex-wrap flex-auto gap-10 p-3.5 bg-white rounded border border-red-200 border-solid shadow-[0px_2px_4px_rgba(0,0,0,0.15)] max-md:max-w-full">
            <label htmlFor="search" className="sr-only">
              フリーワード検索
            </label>
            <div className="my-auto">フリーワード検索</div>
            <button aria-label="Search" className="focus:outline-none">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ed412da8ceb06e4d6bf92ec743c453aef8b7b85bc83cdee51ab0a14f6887803?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
                alt="Search Icon"
                width={24}
                height={24}
                className="object-contain shrink-0"
              />
            </button>
          </div>
          <button aria-label="Menu">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe78f2b2c68aafd2c4ef4f55e0cee4461d68d53f3bfc3e51d9464611a00d1b1?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
              alt="Menu Icon"
              width={36}
              height={36}
              className="object-contain shrink-0 my-auto"
            />
          </button>
        </div>
      </header>

      <div className="flex flex-wrap gap-5 justify-between w-full tracking-wider max-w-[1472px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 max-md:max-w-full">
          <div className="flex flex-auto gap-10 items-start px-10 pt-5 pb-10 text-white whitespace-nowrap rounded-none shadow-[0px_2px_4px_rgba(0,0,0,0.15)] max-md:px-5">
            <div className="flex gap-1.5 text-base font-bold">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff2502d2f9a34553129fa3e3b6b13d5a12579f63d0e722bead251c0713c3df07?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
                alt="フィルターアイコン"
                width={22}
                height={22}
                className="object-contain shrink-0"
              />
              <div className="my-auto">絞り込み</div>
            </div>
            <button className="flex text-xs" aria-label="Clear filters">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c49cce0b02985bf931b57aed5966ad03c37362cf76515023ecb9c13ed22b5d81?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
                alt="クリアアイコン"
                width={18}
                height={18}
                className="object-contain shrink-0"
              />
              <div>クリア</div>
            </button>
          </div>
          <div className="self-start mt-5 text-sm font-medium leading-none text-neutral-700">
            <span className="font-bold tracking-normal">1 - 20</span>
            <span className="font-bold"> / 320個</span>
          </div>
        </div>
        <button className="flex gap-2 px-2.5 py-1.5 my-auto text-xs font-medium leading-none whitespace-nowrap bg-white rounded text-neutral-700">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66563bd943205171cef57f46fb5c0353a2ed303e51d3517ceddd75738ce9d691?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt="並び替えアイコン"
            width={16}
            height={16}
            className="object-contain shrink-0"
          />
          <div className="my-auto">新しい順</div>
        </button>
      </div>

      <div className="flex gap-5 px-10 mt-5 max-md:flex-col max-md:px-5">
        <div className="flex flex-col max-w-xs">
          {filterSections.map((section, index) => (
            <div key={index} className={index > 0 ? "mt-5" : ""}>
              <FilterSection title={section.title} items={section.items} />
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full">
          <div className="grid grid-cols-2 gap-6">
            {businessCardsData.map((card, index) => (
              <BusinessCard
                key={index}
                title={card.title}
                image={card.image}
                personInfo={card.personInfo}
                tags={card.tags}
                date={card.date}
                fileType={card.fileType}
              />
            ))}
          </div>

          {/* Pagination（BusinessCardと同じ幅にする） */}
          <div className="mt-8 flex justify-center w-full">
            <Pagination
              currentPage={1}
              totalItems={320}
              itemsPerPage={20}
              onPrevious={() => {}}
              onNext={() => {}}
            />
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default DocumentLibrary;
