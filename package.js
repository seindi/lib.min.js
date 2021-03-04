/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

var $$$ = {
	diagnostic: require ("diagnostics_channel"),
	event: require ("events"),
	path: require ("path"),
	fs: require ("fs"),
	cpu: {cluster: require ("cluster"), os: require ("os")},
	compress: require ("zlib"),
	hash: require ("crypto"),
	network: require ("net"),
	stream: require ("stream"),
	util: require ("util"),
	db: {mongo: require ("mongodb"), "my-sql": require ("mysql"), "postgre-sql": require ("pg")},
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Object.define (Function, "event", class {
	constructor (proto) {
		this.event = new $$$.event;
		if (proto) {
			if (("event" in proto) === false) {
				define (proto, "event", this);
				define (proto, "on", function (key, value, option) { proto.event.on (key, value, option); });
				define (proto, "emit", function (key, ... value) { proto.event.emit (key, ... value); });
				}
			}
		}
	on (key, value, option) { this.event.on (key, value, option); }
	emit (key, ... value) { this.event.emit (key, ... value); }
	});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

function $$$_hash (algorithm, option) { return $$$.hash.createHash (algorithm, option); }
Object.define (Function, "hash", function (algorithm, option) { return $$$_hash (algorithm, option); });
Object.define (Function.hash, "shuffle", function (... option) { var shuffle = [], char = String.char.alpha.numeric, length = Function.hash.shuffle.length; for (var i in option) { if (Object.is.string (option [i])) char = option [i]; else if (Object.is.integer (option [i])) length = option [i]; else shuffle; } for (var i = 0; i < length; i ++) shuffle.push (char.rand ()); return shuffle.join (""); });
Object.define (Function.hash, "md", function (input) { return $$$_hash ("md5").update (input).digest ("hex"); });
Object.define (Function.hash, "sha", function (input) { return $$$_hash ("sha1").update (input).digest ("hex"); });
Object.define (Function.hash, "__sha", function (input) { return $$$_hash ("sha256").update (input).digest ("hex"); });
Object.define (Function.hash, "password", function (input, offset, length) { return Function.hash.md (Function.hash.md (Function.hash.md (input))).concat ("-").concat (Function.hash.sha (Function.hash.sha (Function.hash.sha (input)))).concat ("-").concat (Function.hash.__sha (Function.hash.__sha (Function.hash.__sha (input)))).substr (offset, length); });
Object.define (Function.hash.shuffle, "length", 24);
Object.define (Function.hash, "algorithm", {md: "md5", sha: "sha1", __sha: "sha256", encoding: "utf8", base: "base64"});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

Object.define (Function, "path", function () {});
Object.define (Function, "file", function () {});
Object.define (Function, "dir", function () {});
Object.define (Function, "diagnostic", function () {});
Object.define (Function, "cpu", function () {});
Object.define (Function, "compress", function () {});
Object.define (Function, "network", function () {});
Object.define (Function, "stream", function () {});
Object.define (Function, "util", function () {});
Object.define (Function, "db", function () {});

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

module.exports = exports = {
	define: Object.define,
	object: Object, array: Array, string: String, math: Math, number: Number,
	date: Date, time: {stamp: Date.stamp, sleep: Date.sleep, interval: Date.interval},
	url: URL, fetch: new URL.fetch (), http: Function.http,
	path: Function.path, file: Function.file, dir: Function.dir,
	diagnostic: Function.diagnostic, event: Function.event, util: Function.util,
	cpu: Function.cpu, compress: Function.compress, hash: Function.hash, network: Function.network, stream: Function.stream,
	db: Function.db,
	ls: Function.LocalStorage, session: Function.Session, cookie: Function.Cookie,
	query: Function.query, attribute: Function.attribute,
	}

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
