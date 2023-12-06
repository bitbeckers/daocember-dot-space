import { DateTime } from "luxon";
import { calendar_v3, google } from "googleapis";

const CALENDAR_ID = process.env.CALENDAR_ID!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;

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

const prettifyEvent = (event: calendar_v3.Schema$Event): Event => {
  return {
    id: event.id!,
    title: event.summary || "",
    description: event.description || "",
    start: event.start?.dateTime
      ? DateTime.fromISO(event.start?.dateTime)
      : DateTime.fromMillis(0),
    end: event.end?.dateTime
      ? DateTime.fromISO(event.end?.dateTime)
      : DateTime.fromMillis(0),
    location: event.location || "TBC",
    attendees: (event.attendees || []).map((a) => a.displayName || ""),
    type: "default",
  };
};

const getEvents = async (): Promise<Event[]> => {
  const calendar = google.calendar({ version: "v3", auth: PRIVATE_KEY });

  const fetchResults = await calendar.events.list({
    calendarId: `${CALENDAR_ID}@group.calendar.google.com`,
    singleEvents: true,
    orderBy: "startTime",
    showHiddenInvitations: true,
    maxAttendees: 99,
    alwaysIncludeEmail: true,
  });

  const events = fetchResults.data.items || [];

  return events.map((e) => prettifyEvent(e));
};

export default getEvents;
