import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

import Head from "next/head";

interface HomePageProps {
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

const HomePage = ({ events }: HomePageProps) => {
  return (
    <div className="h-screen flex items-center justify-center">

      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events!" />
      </Head>
      <EventList events={events} />

    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { events: featuredEvents },
    revalidate: 1800, // 30 minutes
  };
}
