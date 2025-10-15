import { createContext, useContext, useReducer } from 'react';
import AccordionItem from './AccordionItem';
import AccordionContent from './AccordionContent';
import AccordionTitle from './AccordionTitle';

const AccrodionContext = createContext();

function accordionReducer(prevState, action) {
	if (action.type === 'open') {
		return action.payload;
	} else if (action.type === 'close') {
		return null;
	} else if (action.type === 'toggle') {
		return prevState === action.payload ? null : action.payload;
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

	// function openItem(id) {
	// 	accordionDispatch({ type: 'open', payload: id });
	// }

	// function closeItem() {
	// 	accordionDispatch({ type: 'close' });
	// }

	function toggleItem(id) {
		accordionDispatch({ type: 'toggle', payload: id });
	}

	const contextValue = {
		openItemID,
		toggleItem,
	};

	return (
		<AccrodionContext.Provider value={contextValue}>
			<ul className={className}>{children}</ul>
		</AccrodionContext.Provider>
	);
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
