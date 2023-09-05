// const url = "https://www.boredapi.com/api/activity";
const url = "http://localhost:4000/tickets";
// const url = 'http://localhost:4000/tickets'

// async function getTickets() {
//     fetch(url, {
//                 method: 'get',
//                 mode: 'cors'
//     })
//         .then((response) => {
//             return response.json()})
//         .catch((err) => console.log(err));
// }


let tickets = fetch(url)
    .then((response) => response.json())
    .then(data => {

        
        const finalData = Object.values(data.tickets)
        
        console.log(typeof(finalData))
        console.log(finalData);
        

        return finalData;
    })
    .catch(error => {
        return error;
    });

    
    const TicketsList = () => {
  return (
    <>
    {/* {tickets.map( (ticket) => {
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0,200)}</p>
            <div className={`pill ${ticket.proprity}`}>
            {ticket.priority} participants
            </div>

        </div>
    } )}
    {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
    ) } */}
    </>
  )
}

export default TicketsList