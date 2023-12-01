import { DateTime } from "luxon";
import Image from "next/image";

import { type Event, type EventType } from "../resources/calendar";

interface EventFormat {
  title: string;
  color: string;
}

const eventTypes: Record<EventType, EventFormat> = {
  demo: {
    title: "Demos & Open Offices",
    color: "border-s-[#84FF79]",
  },
  hangout: {
    title: "Hangouts or Networking",
    color: "border-s-[#DC79FF]",
  },
  talk: {
    title: "Talk or AMA",
    color: "border-s-[#DC79FF]",
  },
  panel: {
    title: "Panel or Fishbowl",
    color: "border-s-[#DC79FF]",
  },
  default: {
    title: "Event",
    color: "border-s-[#EFEFEF]",
  },
};

const EventCard = ({
  id,
  title,
  description,
  start,
  end,
  attendees,
  location,
  type,
}: Event) => {
  return (
    <div className="mb-10">
      <div className="flex justify-between ml-7 mr-4 mb-3">
        <h4 className="text-base font-pixelized">
          <time dateTime={start.toISO()!}>
            {start.toLocaleString(DateTime.TIME_24_SIMPLE)}
          </time>{" "}
          -{" "}
          <time dateTime={start.toISO()!}>
            {end.toLocaleString(DateTime.TIME_24_SIMPLE)}
          </time>{" "}
          UTC
        </h4>
        <a
          href={`https://www.google.com/calendar/event?eid=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Add to calendar"
          className="hidden"
        >
          <Image src="/calendar.png" width="30" height="30" alt="" />
        </a>
      </div>
      <div
        className={`bg-white/10 backdrop-blur-sm border-s-4 md:rounded-md px-7 py-4 ${eventTypes[type].color}`}
      >
        <h4 className="text-xl mb-1">{title}</h4>
        <p className="text-base mb-1 md:max-w-3xl">{description}</p>
        <p className="text-base text-[#FFD979]">
          {attendees.map((a) => a.split("@")[0]).join(", ")}
        </p>
        <div className="flex justify-between">
          <p className="text-gray-400 text-base">{eventTypes[type].title}</p>
          {start.diffNow("minutes").minutes < 30 &&
            end.diffNow("minutes").minutes > -15 && (
              <a
                className="text-red-400 hover:text-red-500 text-lg"
                href={location}
                title="Join the event"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join &gt;
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
