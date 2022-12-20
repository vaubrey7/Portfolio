import { Link  } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 bg-gray-200 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href="/about" className="hover:underline">J. Ring-Sakabe</Link>.  All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        {/* to debug: The links below aren't working*/}
        <li>
            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link href="/resume" className="mr-4 hover:underline md:mr-6">Work</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>
  );
}