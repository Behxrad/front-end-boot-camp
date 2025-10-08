'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export async function shareMeal(formData) {
	const data = Object.fromEntries(formData.entries());

	const meal = {
		title: data.title,
		summary: data.summary,
		instructions: data.instructions,
		image: data.image,
		creator: data.name,
		creator_email: data.email,
	};

	await saveMeal(meal);

	redirect('/');
}
