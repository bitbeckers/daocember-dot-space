import { promises as fs } from "fs";
import { DateTime } from "luxon";
import {
  async,
  type VEvent,
  type Attendee,
  type PropertyWithArgs,
} from "node-ical";

const PRIVATE_CALENDAR_URL = process.env.PRIVATE_CALENDAR_URL!;

export type EventType = "panel" | "talk" | "hangout" | "demo" | "default";

let attendeeIcsLookup = "";

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
    type: "default",
  };
};

const findAttendeeName = (email: string): string => {
  const regEx = new RegExp(`CN=(.+):mailto:${email}`, "i");
  const match = regEx.exec(attendeeIcsLookup);

  if (match === null || match.length < 2) {
    return email.split("@")[0];
  }

  return match[1];
};

const prettifyAttendees = (attendee?: Attendee | Attendee[]): string[] => {
  if (attendee === undefined) return [];

  const denormalisedAttendes = ([] as Attendee[]).concat(attendee);

  return denormalisedAttendes
    .map((a) => {
      if (typeof a === "string") {
        return a;
      } else {
        return (a as PropertyWithArgs<{ CN: string }>).params.CN;
      }
    })
    .map((a) => findAttendeeName(a));
};

const getEvents = async (): Promise<Event[]> => {
  attendeeIcsLookup = await fs.readFile(
    process.cwd() + "/app/resources/events-export.ics",
    "utf8"
  );

  const events = await async.fromURL(PRIVATE_CALENDAR_URL);
  return Object.values(events)
    .filter((e) => e.type === "VEVENT")
    .map((e) => prettifyEvent(e as VEvent))
    .sort((a, b) => a.start.valueOf() - b.start.valueOf());
};

export default getEvents;
