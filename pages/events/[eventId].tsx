
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";
import Button from "../../components/ui/button";
import EventDetailComponent from "../../components/events/event-detail";
import Head from "next/head";

interface EventDetailPagePropTypes {
  event: {
    id: string;
    date: string;
    description: string;
    image: string;
    isFeatured: boolean;
    location: string;
    title: string;
  };
}

export default function EventDetailPage(props: EventDetailPagePropTypes) {
  const { event } = props;


  if (!event) {
    return (
      <div className="flex flex-col items-center justify-center py-10">

        <p className="text-center pb-4">Loading...</p>

      </div>
    );
  }

  return (

    <>
      <Head>
        <title> {event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventDetailComponent
        description={event.description}
        key={event.id}
        title={event.title}
        location={event.location}
        date={event.date}
        image={event.image}
      />
    </>

  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;

  const filteredEvent = await getEventById(eventId);

  if (!filteredEvent) {
    return { notFound: true };
  }

  return {
    props: { event: filteredEvent },
    revalidate: 30, // 30seconds
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
