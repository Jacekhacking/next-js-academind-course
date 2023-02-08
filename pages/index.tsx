import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="h-screen flex items-center justify-center">
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
