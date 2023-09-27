import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export const dynamic = 'force-dynamic'

export async function GET(_, { params }) {
    const id = params.id

    const res = await fetch(`http://localhost:4000/tickets/${id}`)
    const ticket  = await res.json()

    if (!res.ok) {
        return NextResponse.json({error: 'Could not find Ticket'}, {
            status: 404
        })
    }

    return NextResponse.json(ticket, {
        status: 200
    })
}

export async function DELETE(_, { params }){ 
    const id = params.id

    const supabase = createRouteHandlerClient({ cookies })

    const { error } = await supabase
        .from('tickets')
        .delete()
        .eq('id', id)

    return NextResponse.json({ error})
}