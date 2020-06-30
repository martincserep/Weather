export class RainItemModel {
	isActive: boolean;
	percentage: number;
	time: number;

	constructor(isActive: boolean, percentage: number, time: number) {
		this.isActive = isActive;
		this.percentage = percentage;
		this.time = time;
	}
}
