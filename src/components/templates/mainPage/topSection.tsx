import React from "react";
import LogoutIcon from "@/components/modules/icons/logout";
import NotificationIcon from "@/components/modules/icons/notification";
import WalletIcon from "@/components/modules/icons/wallet";
import Image from "next/image";
import MenuIcon from "@/components/modules/icons/menu";

function TopSectionMainPage() {
  return (
    <section className="h-full w-full py-9 px-3 lg:px-9">
      <div className="w-full flex items-center justify-between">
        <div className=" flex items-center lg:gap-4">
          <div className="lg:hidden flex items-center gap-4 rounded-md ml-2">
            <div className=" bg-[#262630] h-[50px] flex items-center justify-center w-[50px] rounded-md">
              <MenuIcon />
            </div>
          </div>
          <div className="bg-[#E8E8E8] p-3 rounded-md hidden lg:flex items-center h-[50px] lg:h-[55px] w-[280px] gap-[10px]">
            <Image src={"/profile.png"} alt="profile" width={40} height={40} />
            <p className="text-[#727272]">ابوالفضل عزیز خوش آمدی</p>
          </div>
          <div className="bg-[#E8E8E8] p-3 rounded-md flex items-center justify-center min-w-fit h-[50px] lg:h-[55px] gap-[10px]">
            <WalletIcon />
            <p className="font-bold text-[#727272] text-[12px] lg:text-base">
              21,265,000 تومان
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <button className="flex items-center bg-[#FF2A2A] p-[15px] w-[50px] h-[50px] lg:w-fit lg:h-fit rounded-md text-white">
            <LogoutIcon />
            <p className="hidden lg:block">برگشت به وبسایت</p>
          </button>
          <button className="relative p-[15px] rounded-md bg-[#E8E8E8] w-[50px] flex items-center justify-center h-[50px] lg:w-fit lg:h-fit">
            <div className="absolute -top-1 -right-1 rounded-full text-white text-sm h-4 w-4 flex  justify-center bg-[#ff2a2a]">
              2
            </div>
            <NotificationIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default TopSectionMainPage;
