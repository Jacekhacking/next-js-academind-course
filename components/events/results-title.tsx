import Button from "../ui/button";

interface DateProps {
  month: number;
  year: number;
}

const ResultsTitle = (props: DateProps) => {
  console.log(props);
  const { year, month } = props;
  const date = new Date(year, month - 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className=" py-10 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold pb-2">Events in {date} </h2>
      <Button link="/events">Show all Events</Button>
    </div>
  );
};

export default ResultsTitle;
