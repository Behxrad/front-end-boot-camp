import { useAccordionContext } from './Accordion';
import { useAccordionItemContext } from './AccordionItem';

export default function AccordionContent({ className, children }) {
	const { openItemID } = useAccordionContext();
	const id = useAccordionItemContext();

	const isOpen = openItemID === id;

	return (
		<div
			className={
				isOpen ? `${className ?? ''} open` : `${className ?? ''} close`
			}
		>
			{children}
		</div>
	);
}
