import Link from "next/link";
const Button = ({ link, children }) => {
  return (
    <Link
      className=" flex items-center cursor-pointer text-emerald-100 bg-emerald-400 rounded-md mr-2 px-4 h-8 hover:bg-emerald-600 active:bg-emerald-600"
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
