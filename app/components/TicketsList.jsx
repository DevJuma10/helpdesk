const url = "https://randomuser.me/api/"
// const url = 'http://localhost:4000/tickets'

async function getTickets() {
    fetch(url, {
                method: 'get',
                mode: 'cors'
    })
        .then((response) => {
            return response.json()})
        .catch((err) => console.log(err));
}

const TicketsList = async () => {

    const tickets = await getTickets();
    console.log("/////////////////////////////////////////////////////////")
    console.log(tickets)

  return (
    <>
    {tickets.map( (ticket) => {
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
            </div>

        </div>
    } )}
    {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
    ) }
    </>
  )
}

export default TicketsList