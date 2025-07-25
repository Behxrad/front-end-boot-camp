import { useEffect, useState } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
	const [isFetching, setIsFetching] = useState(true);
	const [availablePlaces, setAvailablePlaces] = useState([]);
	const [error, setError] = useState();

	useEffect(() => {
		async function fetchPlaces() {
			setIsFetching(true);
			try {
				const places = await fetchAvailablePlaces();

				navigator.geolocation.getCurrentPosition((position) => {
					setAvailablePlaces(
						sortPlacesByDistance(
							places,
							position.coords.latitude,
							position.coords.longitude
						)
					);
					setIsFetching(false);
				});
			} catch (error) {
				setError({
					message:
						error.message || 'Could not fetch places, please try again later.',
				});
				setIsFetching(false);
			}
		}

		fetchPlaces();
	}, []);

	if (error) {
		return <Error title={'An error occurred!'} message={error.message} />;
	}

	return (
		<Places
			title='Available Places'
			places={availablePlaces}
			loadingText='Fetching place data...'
			isLoading={isFetching}
			fallbackText='No places available.'
			onSelectPlace={onSelectPlace}
		/>
	);
}
