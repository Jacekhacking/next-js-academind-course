import EventItem from "./event-item";
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className="w-3/5 max-w-2xl m-auto">
      {items.map((event) => (
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
