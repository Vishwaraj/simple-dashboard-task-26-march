import * as React from 'react';
import { LineChart, LinePlot } from '@mui/x-charts/LineChart';
import ExtraMenuIcon from "./Vector.svg";
import Image from 'next/image';
import { ChartsXAxis, ChartsYAxis, ResponsiveChartContainer } from '@mui/x-charts';


export default function Chart() {
    return (
        <div className="flex flex-col self-stretch pb-6 text-xs leading-5 whitespace-nowrap bg-white rounded-xl w-full text-neutral-400">
            <div className="flex justify-between px-4 py-4 w-full text-base font-semibold leading-7 bg-white border-b border-gray-200 border-solid text-zinc-800">
                <div className="">Performance</div>
                <Image
                    src={ExtraMenuIcon}
                    alt="menu"
                />
            </div>
            <ResponsiveChartContainer
                series={[
                    {
                        type: "line",
                        data: [1, 2, 3, 2, 1],
                    },
                    {
                        type: "line",
                        data: [4, 3, 1, 3, 4],
                    },
                ]}
                xAxis={[
                    {
                        data: ['A', 'B', 'C', 'D', 'E'],
                        scaleType: 'band',
                        id: 'x-axis-id',
                    },
                ]}

                height={500}
            >
                <LinePlot />
                <ChartsXAxis label="X axis" position="bottom" axisId="x-axis-id" />
            </ResponsiveChartContainer>




            <div className="flex gap-5 justify-center px-16 mt-6 text-sm leading-5 text-gray-500">
                <div className="flex gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/079f294b744e4d54eccb47bdddaee02b6a6a212174fee29061906b84d171d740?apiKey=317b6f06241e496c98324608939c3df2&"
                        className="shrink-0 my-auto w-3 aspect-square fill-blue-400"
                    />
                    <div>Instagram</div>
                </div>
                <div className="flex gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/760f894ac61efc60966ac9cec558c5bfb3e5244fa461a870f2862c64806b7a5d?apiKey=317b6f06241e496c98324608939c3df2&"
                        className="shrink-0 my-auto w-3 aspect-square fill-emerald-400"
                    />
                    <div>Facebook</div>
                </div>
            </div>
        </div>
    );
}

