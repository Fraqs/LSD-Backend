// classes, interfaces & functions
import IContract from 'contract';
import { ReservationDetail, ReservationSummary } from 'contract/dist/dto/reservation';
import { FlightIdentifier, FlightSummary } from 'contract/dist/dto/flight';
import { CarrierDetail } from 'contract/dist/dto/carrier';
import { BookingDetail, BookingIdentifier } from 'contract/dist/dto/booking';
import { AirportDetail, AirportIdentifier } from 'contract/dist/dto/airport';

import { NotFoundError, InvalidInputError, InconsistentLengthError } from 'contract/dist/eto/';

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
	async getCarrierInformation(iata: string): Promise<CarrierDetail> {
		throw new Error('Method not implemented.');
	}
	async getAirportInformation(iata: string): Promise<AirportDetail> {
		throw new Error('Method not implemented.');
	}
	async getFlightsAvailable(departure: AirportIdentifier, arrival: AirportIdentifier, depart: number): Promise<FlightSummary[]> {
		throw new Error('Method not implemented.');
	}

	// hardcoded example
	async reserveFlight(id: FlightIdentifier, amountSeats: number): Promise<ReservationSummary> {
		const reservation = new ReservationSummary('some id', 123456);
		return reservation;
	}

	async createBooking(reservationDetails: ReservationDetail[], creditCardNumber: number, frequentFlyerNumber?: number): Promise<BookingDetail> {
		throw new Error('Method not implemented.');
	}

	async getBooking(id: BookingIdentifier): Promise<BookingDetail> {
		throw new Error('Method not implemented.');
	}
	async cancelBooking(id: BookingIdentifier): Promise<void> {
		throw new Error('Method not implemented.');
	}
}
