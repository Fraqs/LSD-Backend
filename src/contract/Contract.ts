// classes, interfaces & functions
import IContract from 'contract';
import { IReservationDetail, IReservationSummary } from 'contract/src/dto/reservation';
import { IFlightIdentifier, IFlightSummary } from 'contract/src/dto/flight';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';

export default class Contract implements IContract {
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
