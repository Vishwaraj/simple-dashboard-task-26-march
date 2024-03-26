import Image from "next/image";
import { Inter } from "next/font/google";
import CardBase from "@/components/cards/CardBase";
import UnlockPremium from "@/components/cards/UnlockPremium";
import BasicTable from "@/components/table/Table";
import Chart from "@/components/chart/Chart";
import Header from "@/components/header/Header";
import SideBar from "@/components/sidebar/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-row" >
        <div className="hidden md:block" >
          <SideBar />
        </div>

        <div className="container px-4 md:mx-auto pt-4 flex flex-col items-center gap-4 justify-center h-full" >

          <UnlockPremium />
          <div className="w-full flex flex-col gap-4 md:flex-row" >
            <CardBase pillColor="bg-green-100" fontColor="text-emerald-400" headerText="Revenue" />
            <CardBase pillColor="bg-red-100" fontColor="text-red-400" headerText="Users" />
            <CardBase pillColor="bg-gray-100" fontColor="text-gray-400" headerText="New Sign ups" />
            <CardBase pillColor="bg-green-100" fontColor="text-emerald-400" headerText="Retention" />
          </div>

          <Chart />
          <BasicTable />
        </div>

      </div>



    </>
  );
}
