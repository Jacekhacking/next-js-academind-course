import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";

interface EventDetail {
  title: string;
  image: string;
  date: string;
  location: string;
  description: string;
}

const EventDetailComponent = (props: EventDetail) => {
  const { title, image, date, location, description } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-4 h-screen">
      <div className=" row-start-1 row-span-3 col-span-full   bg-gradient-to-tr from-emerald-600 to-cyan-600 text-center flex justify-center items-center pt-10 text-6xl text-emerald-100 font-bold ">
        {title}
      </div>

      <div className=" row-start-3 row-end-5 col-span-full xl:col-start-3 xl:col-end-6 shadow-2xl bg-gray-800  flex items-center justify-center rounded-md  gap-1 z-20 mx-10 ">
        <img
          src={"/" + image}
          alt={title}
          className=" m-5 w-60 h-60 rounded-full border-4 border-r-white "
        />
        <div className=" flex flex-col justify-start ">
          <div>
            <div className="flex flex-col  font-bold text-3xl text-emerald-300 py-1 px-4">
              <div className="h-10 w-10 mr-2 text-emerald-600 my-4">
                <DateIcon />
              </div>
              <time>{humanReadableDate}</time>
            </div>
            <div className=" flex flex-col  font-md text-2xl py-1 text-emerald-300  px-4">
              <div className="h-10 w-10 mr-2 text-emerald-600 my-4">
                <AddressIcon />
              </div>
              <address>{formattedAddress}</address>
            </div>
          </div>
        </div>
      </div>

      <p className="text-2xl p-4 text-center row-start-5 col-span-full mx-8 lg:col-start-3 lg:col-end-6 md:text-3xl ">
        {description}
      </p>
    </div>
  );
};

export default EventDetailComponent;
