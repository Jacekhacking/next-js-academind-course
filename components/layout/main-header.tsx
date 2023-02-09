import Link from "next/link";
const MainHeader = () => {
  return (
    <header className="flex justify-between items-center px-16 bg-gray-800 h-12">
      <Link href="/" className="text-2xl text-emerald-200">
        NextEvents
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/events" className="text-2xl text-emerald-200">
              All Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
