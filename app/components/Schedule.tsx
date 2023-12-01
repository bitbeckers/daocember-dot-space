import { type Event } from "../resources/calendar";
import { DateTime } from "luxon";

interface ScheduleProps {
  events: Event[];
}

const EventCard = ({ title, start, end, attendees }: Event) => {
  return (
    <li className="mb-10">
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
      <div className="bg-white/10 backdrop-blur-sm border-s-[#FFA479] border-s-4 rounded-md px-7 py-5">
        <h4 className="text-xl">{title}</h4>
        <p className="text-lg">summary</p>
        <p className="text-lg text-[#FFD979]">
          {attendees.map((a) => a.split("@")[0]).join(", ")}
        </p>
      </div>
    </li>
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
            <>
              {renderDayHeadline(e.start)}
              <EventCard key={e.title} {...e} />
            </>
          );
        })}
      </ul>
    </section>
  );
};
export default Schedule;
