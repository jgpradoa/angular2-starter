import { Coordinates } from './coordinates';

export class Library{
	private name: String;
	private location: Coordinates;

	constructor(name: String, location: Coordinates){
		this.name = name;
		this.location = location;
	}

	isInLibrary(location: Coordinates): boolean{
		return this.location.compare(location);
	}
}