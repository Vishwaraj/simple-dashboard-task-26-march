import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import BrandLogoSVG from "./Brand Logo Box.svg"
import ExtraMenuIcon from "./Vector.svg"
import FigmaIcon from "./Brand Logo Box figma.svg"
import MetaIcon from "./Brand Logo Box2.svg"
import AngularIcon from "./Brand Logo Boxangular.svg"
import VueIcon from "./Brand Logo Boxvue.svg"

function createData(
    source: string,
    amount: number,
    status: number,
    userId: number,
    joined: string,
    group: string,
    logo: any
) {
    return { source, amount, status, userId, joined, group, logo };
}

const rows = [
    createData('Zepplin', 159, 6.0, 4.0, "January", "Design", BrandLogoSVG),
    createData('Meta', 237, 9.0, 4.3, "February", "Finance", FigmaIcon),
    createData('Figma', 262, 16.0, 6.0, "March", "Coding", MetaIcon),
    createData('Angular', 305, 3.7, 4.3, "April", "Marketing", AngularIcon),
    createData('Vue', 356, 16.0, 3.9, "May", "Finance", VueIcon),
];

export default function BasicTable() {
    return (
        <>

            <TableContainer component={Paper}>
                <div className="flex gap-5 justify-center self-stretch px-6 py-5 text-lg font-semibold leading-8 bg-white border-b border-gray-200 border-solid text-zinc-800 max-md:flex-wrap max-md:px-5">
                    <div className="flex-auto">Installed apps</div>
                    <Image
                        src={ExtraMenuIcon}
                        alt=''
                    />
                </div>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Source</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">User ID</TableCell>
                            <TableCell align="right">Joined</TableCell>
                            <TableCell align="right">Group</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.source}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <div className="flex flex-row items-center">
                                        <Image
                                            src={row.logo}
                                            alt="Follow us on Twitter"
                                        />
                                        <p className='font-bold' >{row.source}</p>

                                    </div>

                                </TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">{row.userId}</TableCell>
                                <TableCell align="right">{row.joined}</TableCell>
                                <TableCell align="right">{row.group}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    );
}


