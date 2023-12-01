import { DateTime } from "luxon";
import {
  async,
  type VEvent,
  type Attendee,
  type PropertyWithArgs,
} from "node-ical";

const PRIVATE_CALENDAR_URL = process.env.PRIVATE_CALENDAR_URL!;

export type EventType = "panel" | "talk" | "hangout" | "demo" | "default";

export interface Event {
  id: string;
  title: string;
  description: string;
  start: DateTime;
  end: DateTime;
  location: string;
  attendees: string[];
  type: EventType;
}

const prettifyEvent = (icalEvent: VEvent): Event => {
  return {
    id: icalEvent.uid,
    title: icalEvent.summary,
    description: icalEvent.description,
    start: DateTime.fromJSDate(icalEvent.start, { zone: "utc" }),
    end: DateTime.fromJSDate(icalEvent.end, { zone: "utc" }),
    location: icalEvent.location || "TBD",
    attendees: prettifyAttendees(icalEvent.attendee),
    type: "demo",
  };
};

const prettifyAttendees = (attendee?: Attendee | Attendee[]): string[] => {
  if (attendee === undefined) return [];

  const denormalisedAttendes = ([] as Attendee[]).concat(attendee);

  return denormalisedAttendes.map((a) => {
    if (typeof a === "string") {
      return a;
    } else {
      return (a as PropertyWithArgs<{ CN: string }>).params.CN;
    }
  });
};

const getEvents = async (): Promise<Event[]> => {
  const events = await async.fromURL(PRIVATE_CALENDAR_URL);
  return Object.values(events)
    .filter((e) => e.type === "VEVENT")
    .map((e) => prettifyEvent(e as VEvent))
    .sort((a, b) => a.start.valueOf() - b.start.valueOf());
};

export default getEvents;
