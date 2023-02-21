// import { ReactPropTypes } from "react";
import EventItem from "./event-item";

interface EventListProps {
  events: {
    id: string;
    date: string;
    description: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  }[];
}

const EventList = (props: EventListProps) => {
  const { events } = props;

  return (
    <ul className="w-3/5 max-w-2xl m-auto">

      {events.map((event) => (

        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
