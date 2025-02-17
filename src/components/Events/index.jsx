import EventItem from "./components/EventItem"
import data from '../../data/events.json'

const events = data._embedded.events

const Events = () => {

    const eventsComponents = events.map((eventItem) => (
        <EventItem 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        />
    ))

    return(
        <div>
            Eventos
            {eventsComponents}
        </div>
    )
}

export default Events