import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

const EventDetailComponent = (props) => {
  const { title, image, date, location, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className="shadow-xl rounded-sm bg-white overflow-hidden m-1 flex items-center justify-center flex-col gap-1 md:flex-row ">
      <img
        src={"/" + image}
        alt={title}
        className="w-full object-cover h-max md:w-1/2 md:h-50  rounded-md"
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
        <div>
          <p className="md:text-sm lg:text-lg p-4 h-auto w-auto overflow-hidden text-center">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EventDetailComponent;
