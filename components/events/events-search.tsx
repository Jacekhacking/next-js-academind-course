import { useRef } from "react";

import Button from "../ui/button";

const EventsSearch = (props) => {
  const yearInputRef = useRef<HTMLSelectElement>();
  const monthInputRef = useRef<HTMLSelectElement>();

  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="flex w-3/5 max-w-2xl items-center justify-evenly py-2 my-10 bg-white rounded-sm"
      >
        <div className="flex ">
          <div className="">
            <label htmlFor="year" className="font-bold mx-2">
              Year
            </label>
            <select
              id="year"
              ref={yearInputRef}
              className="border border-gray-200 text-gray-700 px-4 rounded leading-tight focus:outline-none bg-white focus:border-gray-500"
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div>
            <label className="font-bold mx-2" htmlFor="month">
              Month
            </label>
            <select
              ref={monthInputRef}
              id="month"
              className="border border-gray-200 text-gray-700 px-4 ml-2 rounded leading-tight focus:outline-none bg-white focus:border-gray-500"
            >
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September`</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
        </div>
        <Button type="submit">Find Events</Button>
      </form>
    </div>
  );
};

export default EventsSearch;
