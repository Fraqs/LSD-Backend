// classes, interfaces & functions
import IContract from 'contract';
import { IReservationDetail, IReservationSummary } from 'contract/src/dto/reservation';
import { IFlightIdentifier, IFlightSummary } from 'contract/src/dto/flight';
import { ICarrierDetail } from 'contract/src/dto/carrier';
import { IBookingDetail, IBookingIdentifier } from 'contract/src/dto/booking';
import { IAirportDetail, IAirportIdentifier } from 'contract/src/dto/airport';

export default class Contract implements IContract {
	async reserveFlight(id: IFlightIdentifier, amountSeats: number): Promise<IReservationSummary> {
		// hardcoded example

		// DTO Should be classes instead of interfaces due to this...
		class ReservationSummary implements IReservationSummary {
			id: string;
			price: number;

			constructor(id: string, price: number) {
				this.id = id;
				this.price = price;
			}
		}

		const reservation: IReservationSummary = new ReservationSummary('some id', 123456);
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
