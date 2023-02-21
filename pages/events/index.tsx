
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import Head from "next/head";

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

  function onSearch(year: string, month: string) {

    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>

      <Head>
        <title>All Events</title>
        <meta name="description" content="Find a lot of great events!" />
      </Head>
      <EventsSearch onSearch={onSearch} />
      <EventList events={events} />

    </>
  );
};
export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: { events },
    revalidate: 60, // 1 minute
  };
}
