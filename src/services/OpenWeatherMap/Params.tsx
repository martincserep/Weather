export default class Params {
	q: string;
	appid: string;
	units: string;

	constructor(q: string, appid: string, units: string) {
		this.q = q;
		this.appid = appid;
		this.units = units;
	}
}
