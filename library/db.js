const $$$ = {
	db: {
		"my-sql": require ("mysql"),
		},
	}

Object.define (Function, "db", class {
	constructor (driver, option) {
		this.driver = driver;
		option = Object.concat (option);
		this.option = {host: option.host, user: option.user, password: option.password, database: option.use}
		if ("limit" in option) this.option.connectionLimit = option.limit;
		this [option.type] ();
		}
	connection () {
		return this;
		}
	pool () {
		this.db = Function.db [this.driver].pool (this.option);
		return this;
		}
	on (key, value) {
		this.db.on (key, value);
		return this;
		}
	query (... argument) {
		return Function.db [this.driver].query (this.db, ... argument);
		}
	});

Object.define (Function.db, "my-sql", function () {});
Object.define (Function.db ["my-sql"], "connection", function (option) { return $$$.db ["my-sql"].createConnection (option); });
Object.define (Function.db ["my-sql"], "pool", function (option) { return $$$.db ["my-sql"].createPool (option); });
Object.define (Function.db ["my-sql"], "query", function (db, ... argument) {
	var argument = Object.argument (... argument), sql = argument.string, param = (argument.object || argument.array || Object.un.define ()), context = argument.function;
	sql = Function.sql.format (sql, Function.db ["my-sql"].sql);
	if (context) return db.query (sql, param, context);
	else return new Promise (function (resolve, reject) {
		db.query (sql, param, function (error, result, field) {
			if (error) resolve ({error: error, data: (result || []), field: field});
			else resolve ({error: error, data: (result || []), ID: result.insertId, field: field});
			});
		});
	});
Object.define (Function.db ["my-sql"], "sql", {
	"create table:": "create table if not exists table_",
	"create view:": "create or replace view view_",
	"table:": "table_",
	"view:": "view_",
	"count (*)": "count(*)",
	") value (": ") values (",
	" & ": " and ",
	" || ": " or ",
	"serial:number": "bigint unsigned auto_increment primary key",
	"as:integer not null default zero": "bigint unsigned not null default 0",
	"as:integer not null default": "bigint unsigned not null default",
	"as:integer": "bigint unsigned",
	"as:char": "varchar (255)",
	"as:text": "longtext",
	"as:boolean": "boolean",
	"as:binary": "blob",
	"limit once": "limit 1",
	":ascending": " asc", "ascending": "asc",
	":descending": " desc", "descending": "desc",
	});

Object.define (Function, "sql", function () {});
Object.define (Function.sql, "parse", function (sql) { var query = []; for (var i in (sql = sql.split (";"))) if (sql [i].trim ()) query.push (sql [i].trim ().concat (";")); return query; });
Object.define (Function.sql, "format", function (sql, option) { for (var i in option) sql = sql.replace (i, option [i]); return sql; });
