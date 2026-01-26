import { Suspense } from 'react';
import { capitalize } from '@/lib/utils';
import { Metadata } from 'next';

import H1 from '@/components/h1';
import EventsList from '@/components/events-list';
import Loading from './loading';

type Props = {
  params: {
    city: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

// export const metadata: Metadata = {
//   title: 'Events in Austin',
// };

async function EventsPage({ params }: Props) {
  const city = params.city;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense fallback={<Loading />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}

export default EventsPage;
