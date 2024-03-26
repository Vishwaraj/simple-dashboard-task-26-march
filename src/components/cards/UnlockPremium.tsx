import * as React from "react";
import UpgradeIcon from "./Vector.svg"
import Image from "next/image";

function UnlockPremium() {
    return (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between justify-center self-stretch p-8 text-sm font-semibold text-center text-white rounded-2xl bg-zinc-800 max-w-full">

            <div>
                <div className="text-2xl leading-9">Unlock premium stats</div>
                <div className="mt-2 leading-[157%]">
                    Get up to 10TB of storage for a limited time
                </div>
            </div>

            <div className="flex gap-0.5 justify-center self-center px-5 py-2 mt-6 leading-6 whitespace-nowrap bg-white rounded-[39px] text-zinc-800">
                <Image
                    src={UpgradeIcon}
                    alt="menu"
                />
                <div>Upgrade</div>
            </div>
        </div>
    );
}


export default UnlockPremium;
