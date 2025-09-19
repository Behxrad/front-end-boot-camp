import MainNavigation from '../components/MainNavigation';
import PageContent from '../components/PageContent';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
	const error = useRouteError();

	var title = 'An error occurred!';
	var message = 'Something went wrong!';

	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page.';
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;
