import MobileStartIcon from "@/components/modules/icons/mobStart";
import StarIcon from "@/components/modules/icons/prizeStar";
import PrizeCard from "@/components/modules/prizeCard";
import React from "react";

function PrizeSection() {
  return (
    <section className="w-full px-3 lg:px-9 flex flex-col gap-[35px]">
      <div className="hidden lg:flex items-center justify-between p-7 rounded-md bg-[#262630]">
        <div className="flex items-center gap-7 text-white">
          <div>
            <StarIcon />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <p className="font-bold text-[20px]">
              جمع کل امتیازات : 1035 امتیاز
            </p>
            <p className="text-[#C9C4CE] text-[18px]">
              کاربر گرامی در این قسمت امتیازاتی که به شما تعلق میگیرد لیست
              میشود.
            </p>
          </div>
        </div>
        <div className="bg-[#565662] flex items-center rounded-[15px] justify-between">
          <button className="py-5 text-white w-[135px] text-center">
            جوایز هتل
          </button>
          <button className="py-5 bg-white rounded-[12px] w-[135px] text-center">
            جوایز مرکز خرید
          </button>
        </div>
      </div>

      <div className="lg:hidden flex flex-col gap-4">
        <div className="flex items-center gap-4 text-white w-full">
          <div className="bg-[#262630] rounded-xl text-[10px] w-[60px] h-[50px] lg:w-[90px] lg:h-[65px] flex items-center justify-center">
            <MobileStartIcon />
          </div>
          <div className="bg-[#565662] flex items-center w-full rounded-[15px] justify-between">
            <button className="h-[50px] lg:h-[65px] text-white w-[50%] text-center">
              جوایز هتل
            </button>
            <button className="h-[50px] lg:h-[65px] bg-[#262630] rounded-[12px] w-[50%] text-center">
              جوایز مرکز خرید
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-2 bg-[#262630] p-4 rounded-xl">
          <p className="font-bold text-[18px] text-white">جمع کل امتیازات : 1035 امتیاز</p>
          <p className="text-[#C9C4CE] text-[14px]">
            کاربر گرامی در این قسمت امتیازاتی که به شما تعلق میگیرد لیست میشود.
          </p>
        </div>
      </div>

      <div
        dir="ltr"
        className="w-full flex flex-col gap-4 scrollable-div h-[600px]"
      >
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
        <PrizeCard />
      </div>
    </section>
  );
}

export default PrizeSection;
