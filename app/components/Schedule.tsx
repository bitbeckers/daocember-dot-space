import { type Event, type EventType } from "../resources/calendar";
import { DateTime } from "luxon";

interface ScheduleProps {
  events: Event[];
}

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
      <h4 className="text-base font-pixelized ml-7 mb-3">
        <time dateTime={start.toISO()!}>
          {start.toLocaleString(DateTime.TIME_24_SIMPLE)}
        </time>{" "}
        -{" "}
        <time dateTime={start.toISO()!}>
          {end.toLocaleString(DateTime.TIME_24_SIMPLE)}
        </time>{" "}
        UTC
      </h4>
      <div
        className={`bg-white/10 backdrop-blur-sm border-s-4 rounded-md px-7 py-4 ${eventTypes[type].color}`}
      >
        <h4 className="text-xl mb-1">{title}</h4>
        <p className="text-lg mb-1 leading-none">{description}</p>
        <p className="text-lg text-[#FFD979]">
          {attendees.map((a) => a.split("@")[0]).join(", ")}
        </p>
        <div className="flex justify-between">
          <p className="text-gray-400 text-lg">{eventTypes[type].title}</p>
          {start.diffNow("minutes").minutes < 60 &&
            start.diffNow("minutes").minutes > -60 && (
              <a
                className="text-red-400 hover:text-red-500 text-lg"
                href={location}
                title="Join the event"
              >
                Join &gt;
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

const Schedule = ({ events }: ScheduleProps) => {
  let lastDay = "";

  const renderDayHeadline = (start: DateTime) => {
    const dayStart = start.toLocaleString({
      day: "numeric",
      month: "long",
      weekday: "long",
    });
    if (lastDay !== dayStart) {
      lastDay = dayStart;
      return (
        <h3 className="text-xl text-center mb-10 pt-8 font-pixelized">
          {dayStart}
        </h3>
      );
    }
  };

  return (
    <section id="schedule">
      <ul className="mx-auto w-3/4">
        {/* TODO: filter out events that have finished */}

        {events.map((e) => {
          return (
            <li key={e.title}>
              {renderDayHeadline(e.start)}
              <EventCard {...e} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Schedule;
