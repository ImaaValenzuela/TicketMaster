import EventItem from "./components/EventItem"
import data from '../../data/events.json'

const events = data._embedded.events

const Events = ({searchTerm}) => {


    const renderEvents = () => {
        let eventsFiltered = events 

        if(searchTerm.length > 0){
            eventsFiltered = eventsFiltered.filter((item) => 
                item.name.toLowerCase().includes(searchTerm)
            )
        }

        return eventsFiltered.map((eventItem) => (
            <EventItem 
            key={`event-item-${eventItem.id}`}
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            />
        ))
    }

    return(
        <div>
            Eventos
            {renderEvents()}
        </div>
    )
}

export default Events