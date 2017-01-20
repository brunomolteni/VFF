import feathers from "feathers"
import rest from "feathers-rest"
import hooks from "feathers-hooks"
import parser from "body-parser"

import hotelsService from "./services/hotels"

const app = feathers()
	// Enable hooks and the REST provider with JSON and URL querying
	.configure(rest())
	.configure(hooks())
	.use(parser.json())
	.use(parser.urlencoded({ extended: true }));

// Create hotels service
hotelsService(app);

app.listen(5000);