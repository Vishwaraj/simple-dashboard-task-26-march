import * as React from "react";

function CardBase(props: any) {
    const { pillColor, fontColor, headerText } = props;

    console.log(pillColor);

    return (
        <div className="flex flex-col self-stretch px-4 py-7 font-semibold bg-white rounded-xl shadow-sm w-full">
            <div className="text-sm leading-5 text-gray-500">{headerText}</div>
            <div className="text-2xl leading-10 text-zinc-800">$56,945</div>
            <div className="flex gap-2 mt-6 text-xs leading-5">
                <div
                    className={`justify-center px-2.5 py-0.5 text-center ${fontColor} whitespace-nowrap ${pillColor} rounded-[100px]`}
                >
                    +45%
                </div>
                <div className="flex-1 my-auto text-neutral-400">From 4.6%</div>
            </div>
        </div>
    );
}

export default CardBase;
