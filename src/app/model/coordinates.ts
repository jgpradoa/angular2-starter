export class Coordinates{
	latitude: number;
	longitude: number;

	constructor(latitude: number, longitude: number){
		this.latitude = latitude;
		this.longitude = longitude;
	}

	compare(location: Coordinates): boolean{
		return (location.latitude == this.latitude && location.longitude == this.longitude) ? true : false;
	}
}