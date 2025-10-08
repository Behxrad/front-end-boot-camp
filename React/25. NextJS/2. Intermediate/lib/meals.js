import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	if (Math.floor(Math.random() * 10) + 1 <= 4)
		throw new Error('Loading meals failed.');
	else return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(mealSlug) {
	return db.prepare('SELECT * FROM meals Where slug = ?').get(mealSlug);
}
