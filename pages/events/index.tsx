import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

interface AllEventsProps {
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

const AllEventsPage = (props: AllEventsProps) => {
  const { events } = props;
  const router = useRouter();

  function findEventsHandler({ year, month }: { year: number; month: number }) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
};
export default AllEventsPage;

export async function getStaticProps(context) {
  const url = await fetch(
    "https://nextjs-course-ec31c-default-rtdb.firebaseio.com/events.json"
  );
  const data = await url.json();
  const transformedEvents = [];
  for (const key in data) {
    transformedEvents.push({
      id: key,
      date: data[key].date,
      description: data[key].description,
      image: data[key].image,
      isFeatured: data[key].isFeatured,
      location: data[key].location,
      title: data[key].title,
    });
  }
  return {
    props: { events: transformedEvents },
  };
}
