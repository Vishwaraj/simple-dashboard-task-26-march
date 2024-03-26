import Image from "next/image";
import * as React from "react";
import Union1 from "./Union-1.svg"
import Union2 from "./Union-2.svg"
import Union3 from "./Union-3.svg"
import DropDown from "./drop-down.svg"
import DashboardIcon from "./dashboardIcon.svg"
import MessagesIcon from "./messagesIcon.svg"
import UserIcon from "./user.svg"
import AppsIcon from "./layout-grid.svg"
import SupportIcon from "./Support.svg"
import FileManagerIcon from "./fileIcon.svg"

export default function SideBar() {
    return (
        <div className="flex flex-col bg-white border-r border-gray-200 border-solid max-w-[232px]">
            <div className="self-start ml-5 text-xs font-semibold leading-5 text-neutral-400">
                D A S H B O A R D
            </div>
            <div className="flex flex-col px-5 py-3 mt-4 w-full text-sm font-semibold leading-5 bg-white">
                <div className="flex gap-5 justify-center w-full whitespace-nowrap text-zinc-800">
                    <div className="flex gap-2">
                        <Image
                            src={DashboardIcon}
                            alt=""
                        />
                        <div>Dashboard</div>
                    </div>

                    <Image
                        src={DropDown}
                        alt=""
                    />
                </div>
                <div className="flex flex-col items-start pr-20 pl-7 mt-4 text-gray-500">
                    <div className="text-zinc-800">Analytics</div>
                    <div className="mt-3">Finance</div>
                    <div className="mt-3">Job Board</div>
                </div>
            </div>
            <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
                <div className="flex gap-2">
                    <Image
                        src={MessagesIcon}
                        alt=""
                    />
                    <div>Messages</div>
                </div>
                <Image
                    src={DropDown}
                    alt=""
                />
            </div>
            <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
                <div className="flex gap-2">
                    <Image
                        src={UserIcon}
                        alt=""
                    />
                    <div>Friends</div>
                </div>
                <Image
                    src={DropDown}
                    alt=""
                />
            </div>
            <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 whitespace-nowrap bg-white">
                <div className="flex gap-2">
                    <Image
                        src={AppsIcon}
                        alt=""
                    />
                    <div>Apps</div>
                </div>
                <Image
                    src={DropDown}
                    alt=""
                />
            </div>
            <div className="self-start mt-8 ml-5 text-xs font-semibold leading-5 text-neutral-400">
                P A G E S
            </div>
            <div className="flex gap-5 justify-center px-5 py-3 mt-4 w-full text-sm font-semibold leading-5 text-gray-500 bg-white">
                <div className="flex gap-2">
                    <Image
                        src={SupportIcon}
                        alt=""
                    />
                    <div>Help Center</div>
                </div>
                <Image
                    src={DropDown}
                    alt=""
                />
            </div>
            <div className="flex gap-5 justify-center px-5 py-3 w-full text-sm font-semibold leading-5 text-gray-500 bg-white">
                <div className="flex gap-2">
                    <Image
                        src={FileManagerIcon}
                        alt=""
                    />
                    <div>File Manager</div>
                </div>
                <Image
                    src={DropDown}
                    alt=""
                />
            </div>
            <div className="flex gap-5 justify-between px-5 py-3 mt-20 w-full border-t border-gray-200 border-solid">

                <Image
                    src={Union1}
                    alt=""
                />
                <Image
                    src={Union2}
                    alt=""
                />
                <Image
                    src={Union3}
                    alt=""
                />

            </div>
        </div>
    );
}

