"use server"

import { auth, clerkClient } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"


export const removeRole = async (formData: FormData) => {
    const { sessionClaims } = await auth();

    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Not Authorized");
    }

    const client = await clerkClient();
    const id = formData.get("id") as string;

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role: null },
        });
        revalidatePath("/admin");
    } catch {
        throw new Error("Failed to remove role");
    }
}


export const setRole = async (formData: FormData) => {
    const { sessionClaims } = await auth()

    if (sessionClaims?.metadata?.role !== "admin") {
        throw new Error("Not Authorized")
    }

    const client = await clerkClient()
    const id = formData.get("id") as string
    const role = formData.get("role") as string
    console.log(id, role)

    try {
        await client.users.updateUser(id, {
            publicMetadata: { role },
        })
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
    }
}