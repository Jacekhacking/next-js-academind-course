import EventList from "../components/events/event-list";

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

const HomePage = (props: HomePageProps) => {
  const { events } = props;
  const featuredEvents = events.filter((event) => event.isFeatured === true);

  return (
    <div className="h-screen flex items-center justify-center">
      <EventList events={featuredEvents} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
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
