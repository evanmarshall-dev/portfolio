import Link from "next/link";
import { FaJedi } from "react-icons/fa6";

export default function footer() {
  return (
    <footer>
      <Link href="#hero">
        <div className="py-4 sticky w-full cursor-pointer bottom-5">
          <div className="flex items-center justify-center">
            <FaJedi className="w-10 h-10 text-[rgb(245,245,245)] hover:text-[rgb(255,83,61)]" />
          </div>
        </div>
      </Link>
    </footer>
  );
}
