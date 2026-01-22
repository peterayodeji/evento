import { EventoEvent } from '@/lib/types';
import EventsCard from './event-card';

type EventsListProps = {
  events: EventoEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map(event => (
        <EventsCard key={event.id} event={event} />
      ))}
    </section>
  );
}

export default EventsList;
