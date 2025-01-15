import * as React from "react";
import { InfoRowProps } from "../types";

export const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => {
  return (
    <div className="flex gap-3 w-full whitespace-nowrap max-md:max-w-full">
      <div className="flex gap-1 items-center font-bold">
        <div className="self-stretch my-auto w-[120px]">{label}</div>
        <div className="flex shrink-0 self-stretch my-auto w-0.5 h-4 bg-stone-300" />
      </div>
      <div className="flex-auto font-medium w-[317px]">{value}</div>
    </div>
  );
};

export default InfoRow;
