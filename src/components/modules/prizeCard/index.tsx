import Image from "next/image";
import React from "react";
import DocumentIcon from "../icons/document";

function PrizeCard() {
  return (
    <div
      dir="rtl"
      className="w-full flex lg:flex-row gap-4 lg:gap-0 flex-col items-center p-2 justify-between bg-white rounded-[15px]"
    >
      <div className="flex sm:items-center sm:justify-between w-full lg:w-fit gap-4">
        <div className="border-2 border-[#5F5F72] bg-[#262630] flex items-center justify-center rounded-xl w-[70px] h-[50px] lg:w-[103px] lg:h-[103px]">
          <Image src={"/logo-sample 4.png"} alt="logo" width={50} height={47} className="w-[60%]"/>
        </div>
        <div className="bg-[#F0F0F0] text-sm font-bold w-full rounded-xl p-3 lg:hidden flex items-center">
          خرید از فروشگاه زنجیره ای رفاه
        </div>
      </div>

      <div className="flex flex-col justify-between h-full w-full  lg:w-[357px] ">
        <div className="bg-[#F0F0F0] w-full hidden lg:block font-bold text-base md:text-sm rounded-xl p-3">
          خرید از فروشگاه زنجیره ای رفاه
        </div>
        <div className="bg-[#565662] w-full flex items-center rounded-xl justify-between">
          <div className=" text-white text-sm lg:text-base p-3 w-[50%] text-right font-bold">
            کد تخفیف خرید:
          </div>
          <div className=" bg-[#262630] font-bold py-3 px-6 text-white w-[50%] flex items-center justify-center gap-4 rounded-xl text-center">
            <span className="text-sm lg:text-base">FGA6799AGK</span>
            <div className="w-6 h-6">
              <DocumentIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full gap-4 lg:gap-0 w-full lg:w-[285px]">
        <div className="bg-[#565662] w-full flex items-center rounded-xl justify-between">
          <div className="font-bold text-white p-3 w-[50%] lg:w-[40%] text-right text-sm lg:text-base">
            مبلغ تخفیف:
          </div>
          <div className="font-bold text-sm lg:text-base bg-[#262630] py-3 px-6 text-white w-[50%] lg:w-[60%] flex items-center justify-center rounded-xl text-center">
            <span>550000 تومان</span>
          </div>
        </div>
        <div className="bg-[#565662] w-full flex items-center rounded-xl justify-between">
          <div className="font-bold text-white p-3 w-[50%] lg:w-[60%] text-right text-sm lg:text-base">
            امتیاز مورد نیاز:
          </div>
          <div className="font-bold text-sm lg:text-base bg-[#262630] py-3 px-6 text-white w-[50%] lg:w-[40%] flex items-center justify-center rounded-xl text-center">
            <span>70 امتیاز</span>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-col  h-full items-center justify-between lg:justify-around w-full lg:w-[200px]">
        <span className="lg:text-base text-sm">اعتبار کد : 1403/02/11</span>
        <button className="bg-[#1FBC42] text-white lg:text-base text-sm lg:py-3 py-2 lg:px-6 px-3 rounded-xl">
          دریافت جایزه
        </button>
      </div>
    </div>
  );
}

export default PrizeCard;
