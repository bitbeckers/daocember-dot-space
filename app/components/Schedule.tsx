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
        <h3 className="text-xl">{title}</h3>
        <p className="text-lg">summary</p>
        <p className="text-lg text-[#FFD979]">
          {attendees.map((a) => a.split("@")[0]).join(", ")}
        </p>
      </div>
    </li>
  );
};

const Schedule = ({ events }: ScheduleProps) => {
  return (
    <section id="schedule">
      <h2 className="text-xl text-center font-pixelized mb-8">Schedule</h2>
      <ul className="mx-auto w-3/4">
        {/* TODO: filter out events that have finished */}
        {events.map((e) => (
          <EventCard key={e.title} {...e} />
        ))}
      </ul>
    </section>
  );
};
export default Schedule;
