import { useRouter } from "next/router";
const { getFilteredEvents } = require("../../dummy-data");
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="text-center">Loading</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-center pb-4">Invalid search please try again!</p>
        <Button link="/events">Back to all </Button>
      </div>
    );
  }

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-center pb-4">No events found!</p>
        <Button link="/events">Back to all </Button>
      </div>
    );
  }
  console.log(filteredEvents);
  return (
    <>
      <ResultsTitle year={numYear} month={numMonth} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
