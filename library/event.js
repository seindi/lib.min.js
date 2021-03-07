const $$$ = {event: require ("events")}

Object.define (Function, "event", class {
	constructor (proto) {
		this.event = new $$$.event;
		if (proto) {
			if (("event" in proto) === false) {
				Object.define (proto, "event", this);
				Object.define (proto, "on", function (key, value, option) { proto.event.on (key, value, option); });
				Object.define (proto, "emit", function (key, ... value) { proto.event.emit (key, ... value); });
				}
			}
		}
	on (key, value, option) { this.event.on (key, value, option); }
	emit (key, ... value) { this.event.emit (key, ... value); }
	});
