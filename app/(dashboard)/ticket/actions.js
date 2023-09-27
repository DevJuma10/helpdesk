"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function addTicket( formData) {
    const ticket = Object.fromEntries(formData)

    const supabase = createServerActionClient( {cookies })

    const { data : { session}} = await supabase.auth.getSession()

    //Persist data
    const { error } = await supabase.from('tickets')
        .insert({
            ...ticket,
            user_email: session.user.email
        })

    if (error){ 
        throw new Error('Could not add the new ticket')
    }
        revalidatePath('/ticket')
        redirect('/ticket')
}

export async function deleteTicket( id ){
    const supabase = createServerActionClient( {cookies })

    //Persist data
    const { error } = await supabase
        .from('tickets')
        .delete()
        .eq('id', id)


    if (error){ 
        throw new Error('Could not delete the new ticket')
    }
        revalidatePath('/ticket')
        redirect('/ticket')
}
