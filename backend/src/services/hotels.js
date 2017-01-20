import faker from "faker"
import database from "./../db"
import {convertStringToNumber, formatHotelsData} from "./../hooks"

export default function hotelsService(app){
	let API_URL = '/api/hotels';
	let MOCK_HOTELS_AMMOUNT = 100;
	
	app.use(API_URL, database);
	const hotels = app.service(API_URL);

	// Fixing query string types to allow REST URL querying and filtering
	hotels.before({
		find: [convertStringToNumber('stars','price')]
	});

	// Fixing resulting data format
	hotels.after({
		find: [formatHotelsData()]
	});

	// Mocking hotels data with Faker
	for (let i = 0; i <= MOCK_HOTELS_AMMOUNT; i++) {
		hotels.create({
				name : faker.fake("Hotel {{company.companyName}}"),
				stars: faker.random.number({min:1,max:5}),
				price: faker.random.number({min:1000,max:25000})
		});
	}
}
