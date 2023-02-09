import Link from "next/link";
const Button = (props) => {
  const { link, children } = props;
  if (!link) {
    return (
      <button className=" flex items-center cursor-pointer text-emerald-100 bg-emerald-500 rounded-md mr-2 px-4 h-8 hover:bg-emerald-600 active:bg-emerald-600">
        {children}
      </button>
    );
  }
  return (
    <Link
      className=" flex items-center cursor-pointer text-emerald-100 bg-emerald-500 rounded-md mr-2 px-4 h-8 hover:bg-emerald-600 active:bg-emerald-600"
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
