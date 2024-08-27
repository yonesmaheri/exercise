import Image from "next/image";
import React from "react";
import DashboardIcon from "../icons/dashboard";
import UserIcon from "../icons/user";
import WalletIcon from "../icons/wallet";
import TicketsIcon from "../icons/tickets";
import ProfileIcon from "../icons/profile";
import StarIcon from "../icons/star";
import VerifyIcon from "../icons/verify";

function SideBar() {
  return (
    <div className="lg:flex w-[296px] bg-white h-full hidden flex-col items-center justify-between py-[35px] px-[21px] gap-24 border-l-2 border-gray-500">
      <div className="flex flex-col items-center w-full">
        <div className="relative bg-[linear-gradient(230deg,#09262630,#606060)] rounded-xl p-[2px] mb-3 w-[102px] h-[98px] flex items-center justify-center">
          <div className="absolute -bottom-1 rounded-full left-[50%] transform -translate-x-1/2 w-[50px] h-2 bg-[#FF4500]"></div>
          <div className="p-6 z-20 rounded-xl bg-gradient-to-b from-[#262630] to-[#606060]">
            <Image
              src={"/logo-sample 4.png"}
              alt="logo"
              width={50}
              height={47}
            />
          </div>
        </div>
        <p className="font-bold text-[#343434] text-xl tracking-widest">
          ZARVANTRIP
        </p>
        <div className="w-full border rounded border-[#C9C9C9]  my-5"></div>
        <div className="w-full">
          <ul className="w-full list-none">
            <li className="flex  hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <DashboardIcon />
              </div>
              <span>داشبورد</span>
            </li>
            <li className="flex hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <UserIcon />
              </div>
              <span>لیست رزرو من</span>
            </li>
            <li className="flex  hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <WalletIcon />
              </div>
              <span>بخش مالی</span>
            </li>
            <li className="flex  hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <TicketsIcon />
              </div>
              <span>مدیریت تیکت ها</span>
            </li>
            <li className="flex   items-center gap-4 rounded-md p-2 bg-[#262630] text-white">
              <div className=" bg-[#4B4B56] p-2 rounded-md">
                <ProfileIcon />
              </div>
              <span>باشگاه مشتریان</span>
            </li>
            <li className="flex  hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <StarIcon />
              </div>
              <span>علاقه مندی های من</span>
            </li>
            <li className="flex  hover:bg-[#ECECEC] items-center gap-4 rounded-md p-2">
              <div className=" bg-[#ECECEC] p-2 rounded-md">
                <VerifyIcon />
              </div>
              <span>مسافران من</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-[15px]">
        <div className="py-[13px] w-full rounded-lg bg-[#f3f3f3] flex flex-col items-center gap-[10px]">
          <Image
            src={"/profile.png"}
            alt="profile pic"
            width={40}
            height={40}
          />
          <p className="font-bold">ابوالفضل عزیز</p>
          <p className="text-[#4F4F4F] font-bold">AbyariZarvan@gmail.com</p>
        </div>
        <button className="bg-[#FF2B2B] rounded-lg w-full text-white py-3">
          خروج
        </button>
      </div>
    </div>
  );
}

export default SideBar;
