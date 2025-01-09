
"use server";
import prisma from "@/lib/db";
// import pool from "@/lib/db";
import { headers } from "next/headers"


export const getSession = async()  =>{
    const headersList = await headers();
    const cookies = headersList.get('cookie');
    // const sessionId = cookies['session-id'];
    const result = await prisma.$executeRaw`select * from sessions`;
    console.log("hiii", result);

    // console.log('mysession::',process.env.PG_USER)

}