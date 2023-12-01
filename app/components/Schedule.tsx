import { DateTime } from "luxon";

import { type Event } from "../resources/calendar";
import EventCard from "./EventCard";

interface ScheduleProps {
  events: Event[];
}

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
            <li key={e.id}>
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
