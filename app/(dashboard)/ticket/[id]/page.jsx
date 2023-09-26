import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import {notFound} from 'next/navigation'
import { cookies } from 'next/headers';
import  DeleteButton   from './DeleteButton';

//Control what happens when a dynamic segment is visited that was not generated with generateStaticParams.
export const dynamicParams = true;


//The generateStaticParams function can be used in combination with 
//dynamic route segments to statically generate routes at build time 
//instead of on-demand at request time


export async function generateMetadata ( { params }) {

  const supabase = createServerComponentClient({ cookies })



  const {data: ticket} = await supabase
    .from('tickets')
    .select()
    .eq('id',params.id)
    .single();


  return {

    title: `HelpDesk | ${ticket?.title || 'Ticket not found'}` 
  }
    
  
}


async function getTicket(id) {

  const supabase = createServerComponentClient({ cookies })



  const {data} = await supabase
    .from('tickets')
    .select()
    .eq('id', id)
    .single();

    if(!data){
      notFound()
    }

    return data

}


export default async function TicketDetails( {params}) {

  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

    const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
            <div className="ml-auto">
              {data.session.user.email === ticket.user_email && (
                <DeleteButton id={ticket.id}/>
              )}
            </div>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
        </div>
    </main>
  )
}
