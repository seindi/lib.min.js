Object.define (Function, "event", class {
	constructor (proto) {
		this.event = {}
		if (proto) {
			if (("event" in proto) === false) {
				Object.define (proto, "event", this);
				Object.define (proto, "on", function (key, value, option) { proto.event.on (key, value, option); });
				Object.define (proto, "emit", function (key, ... value) { proto.event.emit (key, ... value); });
				}
			}
		}
	on (key, value) {
		if ((key in this.event) === false) this.event [key] = [];
		this.event [key].push (value);
		return this;
		}
	emit (key, ... value) {
		return this.event [key].call (undefined, ... value);
		}
	});
