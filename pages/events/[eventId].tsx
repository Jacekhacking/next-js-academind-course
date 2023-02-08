import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";

import EventDetailComponent from "../../components/events/event-detail";

const EventDetailPage = (props) => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <h1>No Event Found!</h1>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className=" w-10/12 max-w-6xl">
        <EventDetailComponent
          description={event.description}
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      </div>
    </div>
  );
};

export default EventDetailPage;
