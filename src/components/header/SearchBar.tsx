import Image from "next/image";
import * as React from "react";
import SearchIcon from "./search.svg"
import { Input } from "@mui/material";

function SearchBar() {
    return (
        <div className="flex flex-col justify-center self-stretch px-4 py-3 text-sm leading-5 whitespace-nowrap bg-white rounded-md  border-solid md:w-full text-neutral-400">
            <div className="flex gap-2 max-md:flex-wrap">
                <Image
                    src={SearchIcon}
                    alt="search"
                />
                <Input placeholder="Search..." className="flex-1 w:full"></Input>
            </div>
        </div>
    );
}

export default SearchBar;
