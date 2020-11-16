// classes, interfaces & functions
import IContract from 'contract';
import { IReservationDetail, IReservationSummary } from 'contract/src/dto/reservation';
import { IFlightIdentifier, IFlightSummary } from 'contract/src/dto/flight';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';

// import { NotFoundError } from 'contract/src/eto/';

class EError extends Error {
	type: string;

	constructor(msg: string) {
		super(msg);
		this.type = 'EError';

		// some stack-overflow solution to custom ts errors
		// https://stackoverflow.com/questions/41102060/typescript-extending-error-class
		Object.setPrototypeOf(this, EError.prototype);
	}

	json(): string {
		return JSON.stringify(this);
	}
}

export default class Contract implements IContract {
	async reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		// hardcoded example
		// throw new EError('some error');
		// const _id = new CarrierDetail('', '');
		// throw new NotFoundError('abcdefghij');
		// throw new Error('not implemented yet.');
		// const reservation = new ReservationSummary('some id', 123456);
		// return reservation;

		const reservation: IReservationSummary = { id: '', price: 213 };
		return reservation;
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
