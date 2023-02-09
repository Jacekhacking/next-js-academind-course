import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import Button from "../../components/ui/button";

import EventDetailComponent from "../../components/events/event-detail";

const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-center pb-4">No events found please try again!</p>
        <Button link="/events">Back to all </Button>
      </div>
    );
  }

  return (
    <EventDetailComponent
      description={event.description}
      key={event.id}
      title={event.title}
      location={event.location}
      date={event.date}
      image={event.image}
    />
  );
};

export default EventDetailPage;
