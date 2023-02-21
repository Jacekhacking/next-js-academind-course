
import { getFilteredEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import Head from "next/head";

const FilteredEventsPage = ({ filteredEvents, date }) => {
  console.log(filteredEvents);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-center pb-4">No events found!</p>
        <Button link="/events">Back to all </Button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta
          name="description"
          content={`All events for ${date.month}/${date.year}.`}
        />
      </Head>
      <ResultsTitle year={date.year} month={date.month} />
      <EventList events={filteredEvents} />

    </>
  );
};

export default FilteredEventsPage;

export async function getServerSideProps(context) {
  const filterData = context.params.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const year = +filteredYear;
  const month = +filteredMonth;

  const filteredEvents = await getFilteredEvents({
    year,
    month,
  });

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month < 1 ||
    month > 12
  ) {
    return {
      notFound: true,
    };
  }

  return {
    props: { filteredEvents, date: { year, month } },
  };
}
