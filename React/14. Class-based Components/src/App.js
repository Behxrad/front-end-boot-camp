import UserContext from './store/user-context';
import UserFinder from './components/UserFinder';

const DUMMY_USERS = [
	{ id: 'u1', name: 'Max' },
	{ id: 'u2', name: 'Manuel' },
	{ id: 'u3', name: 'Julie' },
];

function App() {
	const usersContext = {
		users: DUMMY_USERS,
	};

	return (
		<UserContext.Provider value={usersContext}>
			<UserFinder />
		</UserContext.Provider>
	);
}

export default App;
