// libraries
import * as http from 'http';
import { createServer, RPCFunctions } from '@node-rpc/server';
import { jsonDeserializer as deserializer } from '@node-rpc/server/dist/deserializers/jsonDeserializer';

// classes, interfaces & functions
import IContract from 'contract';
import { IReservationDetail, IReservationSummary } from 'contract/src/dto/reservation';
import { IFlightIdentifier, IFlightSummary } from 'contract/src/dto/flight';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';
import moment from 'moment-timezone';

class Contract implements IContract {
	async reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		throw new Error('not implemented yet.');
	}

	async getFlightsAvailable(departure: IAirportIdentifier, arrival: IAirportIdentifier, depart: number): Promise<IFlightSummary[]> {
		throw new Error('not implemented yet.');
	}

	async getCarrierInformation(iata: string): Promise<ICarrierDetail> {
		throw new Error('not implemented yet.');
	}

	async getAirportInformation(iata: string): Promise<IAirportDetail> {
		throw new Error('not implemented yet.');
	}

	async getBooking(id: IBookingIdentifier): Promise<IBookingDetail> {
		throw new Error('not implemented yet.');
	}

	async createBooking(reservationDetails: IReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<IBookingDetail> {
		throw new Error('not implemented yet.');
	}

	async cancelBooking(id: IBookingIdentifier): Promise<void> {
		throw new Error('not implemented yet.');
	}
}

const contract: IContract = new Contract();

const api: RPCFunctions<IContract, { lang: string }> = {
	cancelBooking: () => async () => await contract.cancelBooking({ id: 'str' }),
	createBooking: () => async () => await contract.createBooking([], 10, 10),
	getBooking: () => async () => await contract.getBooking({ id: 'str' }),

	getAirportInformation: () => async () => await contract.getAirportInformation('iata code'),
	getCarrierInformation: () => async () => await contract.getCarrierInformation('iata code'),

	reserveFlight: () => async () => await contract.reserveFlight({ flightCode: 'str' }, 10),
	getFlightsAvailable: () => async () => await contract.getFlightsAvailable({ iata: 'str' }, { iata: 'str' }, Date.now()),
};

const RPCServer = createServer({ api, deserializer });

async function RPCRequestHandler(req: http.IncomingMessage, res: http.ServerResponse) {
	try {
		const result = await RPCServer.handleAPIRequest(req, { lang: 'en' });
		const json: string = String(JSON.stringify(result));
		res.write(json);
	} catch (error) {
		console.log(error.message);
		res.write('error');
	}

	res.end();
}

export default RPCRequestHandler;
