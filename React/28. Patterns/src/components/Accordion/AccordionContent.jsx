import { useAccordionContext } from './Accordion';

export default function AccordionContent({ id, className, children }) {
	const { openItemID } = useAccordionContext();

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
