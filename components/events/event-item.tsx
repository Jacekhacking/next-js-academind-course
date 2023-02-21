import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

import Image from "next/image";

interface EventItemProps {
  title: string;
  image: string;
  date: string;
  location: string;
  id: string;
}

const EventItem = (props: EventItemProps) => {

  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className="h-auto shadow-xl rounded-sm bg-white overflow-hidden m-1 flex flex-col gap-1 md:flex-row ">

      <Image
        src={"/" + image}
        alt={title}
        className="w-full object-cover h-50 md:w-1/2 md:h-50  rounded-md"
        width={250}
        height={100}

      />
      <div className="flex flex-col justify-start w-full h-full">
        <div>
          <h2 className="text-2xl font-bold py-4 text-center">{title}</h2>
          <div className="flex items-center font-bold text-md text-gray-600 py-1 px-4">
            <div className="h-6 w-6 mr-2">
              <DateIcon />
            </div>
            <time>{humanReadableDate}</time>
          </div>
          <div className=" flex items-center font-light text-sm py-1  px-4">
            <div className="h-6 w-6 mr-2">
              <AddressIcon />
            </div>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className="flex justify-end py-2 md:pt-8">
          <Button link={exploreLink}>
            <span> Explore Event</span>
            <span className="h-6 w-6">
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
