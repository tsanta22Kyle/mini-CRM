'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation";


export async function login(){

const cookieStore = await cookies();
// stocker la session active dans un cookie
    cookieStore.set("user-session","active", {
        httpOnly : true,
        path : "/",
        maxAge: 60*60*24
    })
}

export async function logout(){
    // tout peffacer
    const cookieStore = await cookies()
    cookieStore.delete("user-session")
    // rediriger vres login
    redirect('/login')
}