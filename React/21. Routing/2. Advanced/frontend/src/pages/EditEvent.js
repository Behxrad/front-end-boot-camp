import { useRouteLoaderData, Await } from 'react-router-dom';
import EventForm from '../components/EventForm';
import { Suspense } from 'react';

async function EditEventPage() {
	const { event } = useRouteLoaderData('event-detail');

	return (
		<Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
			<Await resolve={event}>
				{(loadedEvent) => <EventForm event={loadedEvent} method='patch' />}
			</Await>
		</Suspense>
	);
}

export default EditEventPage;
