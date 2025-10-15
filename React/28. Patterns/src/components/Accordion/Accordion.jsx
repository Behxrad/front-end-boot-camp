import { captureOwnerStack } from 'react';
import { createContext, useContext, useReducer } from 'react';

const AccrodionContext = createContext();

function accordionReducer(prevState, action) {
	if (action.type === 'open') {
		return action.payload;
	} else if (action.type === 'close') {
		return null;
	} else {
		return prevState;
	}
}

export function useAccordionContext() {
	const ctx = useContext(AccrodionContext);

	if (!ctx) {
		throw new Error(
			'Accordion-related component must be wrapped by <Accordion>.'
		);
	}

	return ctx;
}

export default function Accordion({ children, className }) {
	const [openItemID, accordionDispatch] = useReducer(accordionReducer);

	function openItem(id) {
		accordionDispatch({ type: 'open', payload: id });
	}

	function closeItem() {
		accordionDispatch({ type: 'close' });
	}

	const contextValue = {
		openItemID,
		openItem,
		closeItem,
	};

	return (
		<AccrodionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccrodionContext.Provider>
	);
}
