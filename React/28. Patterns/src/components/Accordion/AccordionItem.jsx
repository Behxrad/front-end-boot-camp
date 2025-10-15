import { useAccordionContext } from './Accordion';

export default function AccordionItem({ id, className, title, children }) {
	const { openItemID, toggleItem } = useAccordionContext();

	const isOpen = openItemID === id;

	return (
		<li className={className}>
			<h3 onClick={() => toggleItem(id)}>{title}</h3>
			<div
				className={
					isOpen ? 'accordion-item-content open' : 'accordion-item-content'
				}
			>
				{children}
			</div>
		</li>
	);
}
