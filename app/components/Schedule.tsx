import { DateTime } from "luxon";

import getEvents from "../resources/calendar";
import EventCard from "./EventCard";

const Schedule = async () => {
  let lastDay = "";

  const events = await getEvents();

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
      <ul className="mx-auto md:max-w-4xl">
        {events
          .filter((e) => e.end.diffNow("minutes").minutes > -15)
          .map((e) => {
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
