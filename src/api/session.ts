
"use server";
import { headers } from "next/headers"


export const getSession = async()  =>{
    const headersList = await headers();
    const cookies = headersList.get('cookie');
    // const sessionId = cookies['session-id'];
    console.log('mysession::',cookies)

}