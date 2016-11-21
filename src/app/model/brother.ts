export class Brother{
	name: String;
	location: String;
	picLocation: String;

	constructor(name: String = "", location: String = "", picLocation: String = ""){
		this.name = name;
		this.location = location;
		this.picLocation = picLocation;
	}
}