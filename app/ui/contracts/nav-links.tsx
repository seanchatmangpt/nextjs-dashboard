"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  MicrophoneIcon,
  BeakerIcon,
  MapIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useSpeechContext } from "@/hooks/SpeechContext";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/contracts", icon: HomeIcon },
  {
    name: "Contract",
    href: "/contracts/contract",
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const { listening, startListening, stopListening, transcript } =
    useSpeechContext();

  const pathname = usePathname();

  const handleStartListening = () => {
    if (!listening) {
      startListening();
    }
  };

  const handleStopListening = () => {
    if (listening) {
      stopListening();
    }
  };

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      <div className="hidden">
        <button onClick={handleStartListening} className="p-2">
          <MicrophoneIcon className="w-6 h-6 text-green-500" />
        </button>
        <button onClick={handleStopListening} className="p-2">
          <MicrophoneIcon className="w-6 h-6 text-red-500" />
        </button>
        <p className="text-sm">{transcript}</p>
      </div>
    </>
  );
}
