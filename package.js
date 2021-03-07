require ("./library/diagnostic");
require ("./library/event");
require ("./library/path");
require ("./library/cpu");
require ("./library/compress");
require ("./library/network");
require ("./library/stream");
require ("./library/util");
require ("./library/hash");
require ("./library/db");
require ("./library/body");

module.exports = exports = {
	define: Object.define,
	object: Object, array: Array, string: String, math: Math, number: Number,
	date: Date, time: {stamp: Date.stamp, sleep: Date.sleep, interval: Date.interval, zone: Date.Time.zone},
	url: URL, fetch: (new URL.fetch), http: Function.http,
	path: Function.path, file: Function.file, dir: Function.dir,
	diagnostic: Function.diagnostic, event: Function.event, util: Function.util,
	cpu: Function.cpu, compress: Function.compress, hash: Function.hash, network: Function.network, stream: Function.stream,
	db: Function.db, sql: Function.sql,
	ls: Function.LocalStorage, session: Function.Session, cookie: Function.Cookie,
	query: Function.query, attribute: Function.attribute,
	}
