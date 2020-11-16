// libraries
import * as http from 'http';
import { createServer, RPCFunctions } from '@node-rpc/server';
import { jsonDeserializer as deserializer } from '@node-rpc/server/dist/deserializers/jsonDeserializer';

// classes, interfaces & functions
import IContract from 'contract';
import Contract from './Contract';

// ...
const contract: IContract = new Contract();

// ...
const api: RPCFunctions<IContract, { lang: string }> = {
	cancelBooking: () => async () => await contract.cancelBooking({ id: 'str' }),
	createBooking: () => async () => await contract.createBooking([], 10, 10),
	getBooking: () => async () => await contract.getBooking({ id: 'str' }),

	getAirportInformation: () => async () => await contract.getAirportInformation('iata code'),
	getCarrierInformation: () => async () => await contract.getCarrierInformation('iata code'),

	reserveFlight: () => async () => await contract.reserveFlight({ flightCode: 'str' }, 10),
	getFlightsAvailable: () => async () => await contract.getFlightsAvailable({ iata: 'str' }, { iata: 'str' }, Date.now()),
};

// ...
const RPCServer = createServer({ api, deserializer });

// ...
async function RPCRequestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
	try {
		const result = await RPCServer.handleAPIRequest(req, { lang: 'en' });
		const json: string = String(JSON.stringify(result));
		res.write(json);
	} catch (error: any) {
		console.error(error.message);

		// handle errors
		res.writeHead(500);
		res.write(error.json());

		/** ETO Structure
		 *
		 * https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		 * res.writeHead(500);
		 *
		 * 400 - Bad Request: InvalidInputError
		 * 404 - Not Found: NotFoundError
		 * 4xx - TBD : InconsistentLengthError
		 */
	}

	res.end();
}

export default RPCRequestHandler;
