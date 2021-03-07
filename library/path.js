const $$$ = {path: require ("path"), fs: require ("fs"), line: require ("readline"), os: require ("os")}

function the_path_separator () { return $$$.path.sep; }
function the_path_join (... path) { return $$$.path.join (... path); }
function the_path_exist (path) { return $$$.fs.existsSync (path); }
function the_path_extension (path) { return $$$.path.extname (path); }
function the_path_mode (path, mode, context) { if (context) $$$.fs.chmod (path, mode, context); else $$$.fs.chmodSync (path, mode); return true; }
function the_path_move (path, destination, context) { if (context) $$$.fs.rename (path, destination, context); else $$$.fs.renameSync (path, destination); return true; }
function the_path_name (path, extension) { return $$$.path.basename (path, extension); }
function the_path_normalize (path) { return $$$.path.normalize (path); }
function the_path_parse (path) { path = $$$.path.parse (path); return {drive: path.root, dir: path.dir, file: path.base, extension: path.ext, name: path.name} }
function the_path_stat (path, option, context) { if (context) $$$.fs.stat (path, option, context); else return $$$.fs.statSync (path, option); return true; }
function the_path_watch (path, option, context) { return $$$.fs.watch (path, option, context); }

Object.define (Function, "path", function (... path) { return Function.path.join (... path); });
Object.define (Function.path, "separator", the_path_separator ());
Object.define (Function.path, "delimiter", {separator: ["\\", "/"], normalize: ["\\", "//"], resolve: [".", "\\", "/"]});
Object.define (Function.path, "base", function () {});
Object.define (Function.path.base, "name", function (path) { return Object.to.string (path); });
Object.define (Function.path.base, "relative", function (path) { return (path.substr (1, 1) === ":"); });
Object.define (Function.path.base, "resolve", function (path) { return (Function.path.delimiter.resolve.exist (path.substr (0, 1)) || Function.path.base.relative (path)); });
Object.define (Function.path.base, "normalize", function (path, separator = Function.path.separator) { if (path = Function.path.base.name (path)) for (var i in Function.path.delimiter.normalize) path = path.split (Function.path.delimiter.normalize [i]).join (separator); return path; });
Object.define (Function.path, "current", function (path) { return (".") + Function.path.separator.concat (Function.path.base.name (path)); });
Object.define (Function.path, "delete", function (path, ... argument) { if (Object.is.file (path)) return Function.file.delete (path, ... argument); else if (Object.is.dir (path)) return Function.dir.delete (path, ... argument); else return false; });
Object.define (Function.path, "exist", function (path) { return the_path_exist (Function.path.base.name (path)); });
Object.define (Function.path, "extension", function (path) { if ((path = the_path_extension (Function.path.base.name (path))) === ".") return ""; else return path; });
Object.define (Function.path, "format", function (path) { if (path = Object.assign ({drive: "", dir: "", file: "", extension: ""}, path)) return Function.path.join (path.drive, path.dir, Function.path.base.name (path.file).concat (path.extension)); else return ""; });
Object.define (Function.path, "join", function (... path) { return the_path_join (... path); });
Object.define (Function.path, "mode", function (path, ... argument) { if (the_path_exist (path = Function.path.base.name (path))) { try { var argument = Object.argument (... argument), mode = (argument.integer || argument.number), context = argument.function; return the_path_mode (path, mode, context); } catch (error) { return false; } } else { return false; } });
Object.define (Function.path, "move", function (path, destination, context) { if (the_path_exist (path = Function.path.base.name (path))) { if (the_path_exist (destination = Function.path.base.name (destination)) === false) { try { return the_path_move (file, destination, context); } catch (error) { return false; } } else { return false; } } else { return false; } });
Object.define (Function.path, "name", function (path, extension, resolve = false) { if (Function.path.delimiter.separator.exist ((path = Function.path.base.name (path)).end ())) return ""; else if (path = the_path_name (path, extension)) if (resolve === true) return path.concat (extension); else return path; return ""; });
Object.define (Function.path, "normalize", function (path) { return the_path_normalize (Function.path.base.name (path)); });
Object.define (Function.path, "parse", function (path) { if (path = the_path_parse (Function.path.base.name (path))) return {drive: path.root, dir: path.dir, file: path.base, extension: path.ext, name: path.name} });
Object.define (Function.path, "relative", function (path) { if (Function.path.base.relative (path = Function.path.base.name (path))) return Function.path.normalize (path.substr (2)); else return Function.path.normalize (path); });
Object.define (Function.path, "resolve", function (path, resolve = "") { if (Function.path.base.resolve (path = Function.path.base.name (path))) return Function.path.normalize (path); else return Function.path.normalize (Function.path.join (resolve, path)); });
Object.define (Function.path, "split", function (path, separator = Function.path.separator) { return Function.path.base.name (path).split (separator); });
Object.define (Function.path.split, "partial", function (path, separator = Function.path.separator) { var partial = [], part = Function.path.base.name (path).split (separator), split = ""; for (var i in part) { if (path = part [i]) if (i > 0) partial.push (split = split.concat (separator, path)); else partial.push (split = split.concat (path)); } return partial; });
Object.define (Function.path, "stat", function (path, ... argument) { if (the_path_exist (path = Function.path.base.name (path))) { try { var argument = Object.argument (... argument), option = Object.option (argument.object), context = argument.function; return the_path_stat (path, option, context); } catch (error) {} } });
Object.define (Function.path.stat, "modify", function (path) { return path.mtime; });
Object.define (Function.path, "type", function (path, option) { if (the_path_exist (path = Function.path.base.name (path))) { try { path = the_path_stat (path, option); if (path.isFile ()) return "file"; if (path.isDirectory ()) return "dir"; } catch (error) {} } if (false) if (Object.is.url (path, option)) return "url"; });
Object.define (Function.path, "watch", function (file, ... argument) { try { var argument = Object.argument (... argument), encoding = argument.string, option = Object.option (argument.object), context = argument.function; return the_path_watch (file, (option || encoding), context); } catch (error) {} });

Object.define (Function.path, "flag", function (... path) {
	var owner, group, other;
	if (path.length) {
		if (path) { owner = {flag: path [0], octa: 0}, group = {flag: path [1], octa: 0}, other = {flag: path [2], octa: 0} }
		if (Object.is.set (group.flag) === false) group.flag = owner.flag;
		if (Object.is.set (other.flag) === false) other.flag = group.flag;
		if (owner.flag.exist ("read")) owner.octa = (owner.octa + 4);
		if (owner.flag.exist ("write")) owner.octa = (owner.octa + 2);
		if (owner.flag.exist ("execute")) owner.octa = (owner.octa + 1);
		if (group.flag.exist ("read")) group.octa = (group.octa + 4);
		if (group.flag.exist ("write")) group.octa = (group.octa + 2);
		if (group.flag.exist ("execute")) group.octa = (group.octa + 1);
		if (other.flag.exist ("read")) other.octa = (other.octa + 4);
		if (other.flag.exist ("write")) other.octa = (other.octa + 2);
		if (other.flag.exist ("execute")) other.octa = (other.octa + 1);
		return Number (Function.path.flag.octa.concat (owner.octa, group.octa, other.octa));
		}
	});
Object.define (Function.path.flag, "octa", "0o");
Object.define (Function.path.flag, "execute", 0o111, {enumerable: true});
Object.define (Function.path.flag, "write", 0o222, {enumerable: true});
Object.define (Function.path.flag, "write-execute", 0o333, {enumerable: true});
Object.define (Function.path.flag, "read", 0o444, {enumerable: true});
Object.define (Function.path.flag, "read-execute", 0o555, {enumerable: true});
Object.define (Function.path.flag, "read-write", 0o666, {enumerable: true});
Object.define (Function.path.flag, "read-write-execute", 0o777, {enumerable: true});

function the_file_copy (file, destination, mode, context) { if (context) $$$.fs.copyFile (file, destination, mode, context); else $$$.fs.copyFileSync (file, destination, mode); return true; }
function the_file_delete (file, context) { if (context) $$$.fs.unlink (file, context); else $$$.fs.unlinkSync (file); return true; }
function the_file_read (file, option, context) { if (context) $$$.fs.readFile (file, option, context); else return $$$.fs.readFileSync (file, option); return true; }
function the_file_read_line (input, output) { return $$$.line.createInterface (input, output); }
function the_file_read_stream (file, option) { return $$$.fs.createReadStream (file, option); }
function the_file_write (file, data, option, context) { if (context) $$$.fs.writeFile (file, data, option, context); else $$$.fs.writeFileSync (file, data, option); return true; }
function the_file_write_stream (file, option) { return $$$.fs.createWriteStream (file, option); }
function the_file_watch (file, option, context) { return $$$.fs.watchFile (file, option, context); }

Object.define (Function, "file", function (file, option) { return Function.file.get.content (file, option).split (String.char.ln.s); });
Object.define (Function.file, "base", function () {});
Object.define (Function.file.base, "name", function (file, extension, resolve) { return Function.path.join (Function.dir.name (file), Function.file.name (file, extension, resolve)); });
Object.define (Function.file.base, "exist", function (file) { if (Function.path.type (file) === "file") return true; else return false; });
Object.define (Function.file, "copy", function (file, destination, ... argument) { if (Function.file.base.exist (file = Function.path.base.name (file))) { try { var argument = Object.argument (... argument), mode = Object.to.number (argument.integer || argument.number), option = Object.option (argument.object, {dir: true}), context = argument.function; if (option.dir === true) Function.dir.create (Function.dir.name (destination), option); if (Function.dir.exist (Function.dir.name (destination)) === false) return false; return the_file_copy (file, Function.path.base.name (destination), mode, context); } catch (error) { return false; } } else { return false; } });
Object.define (Function.file, "create", function (file, data, ... argument) { return Function.file.write (file, data, ... argument); });
Object.define (Function.file, "delete", function (file, ... argument) { if (Function.file.base.exist (file = Function.path.base.name (file))) { try { var argument = Object.argument (... argument), string = argument.string, array = argument.array, option = Object.option (argument.object), context = argument.function; if (context) return the_file_delete (file, context); if (array) { string = Object.to.string (the_file_read (file, option), option.encoding); for (i in data) string = string.split (data [i]).join (""); return the_file_write (file, string, option); } else if (string) { return the_file_write (file, Object.to.string (the_file_read (file, option), option.encoding).split (string).join (""), option); } else { return the_file_delete (file); } } catch (error) { return false; } } else { return false; } });
Object.define (Function.file, "exist", function (file) { return Function.file.base.exist (Function.path.base.name (file)); });
Object.define (Function.file, "extension", function (file) { return Function.path.extension (file); });
Object.define (Function.file.extension, "html", ".html");
Object.define (Function.file.extension, "css", ".css");
Object.define (Function.file.extension, "js", ".js");
Object.define (Function.file.extension, "json", ".json");
Object.define (Function.file, "get", function () {});
Object.define (Function.file.get, "content", function (file, option) { if (Function.file.base.exist (file = Function.path.base.name (file))) { try { return Object.to.string (the_file_read (file, (option = Object.option (option))), option.encoding); } catch (error) { return ""; } } else return ""; });
Object.define (Function.file, "mode", function (file, ... argument) { return Function.path.mode (file, ... argument); });
Object.define (Function.file, "name", function (file, extension, resolve) { return Function.path.name (file, extension, resolve); });
Object.define (Function.file, "read", function (file, ... argument) { if (Function.file.base.exist (file = Function.path.base.name (file))) { try { var argument = Object.argument (... argument), option = Object.option (argument.object), context = argument.function; if (context) return the_file_read (file, option, context); var data = the_file_read (file, option); if (option.type === "json") return JSON.decode (Object.to.string (data, option.encoding)); else if (option.type === "xml") return Function.xml.parse (Object.to.string (data, option.encoding)); else if (option.type === "serialize") return Function.serialize.parse (Object.to.string (data, option.encoding)); else if (option.type === "stream") return the_file_read_stream (file, option); else return data; } catch (error) { return Buffer.from (""); } } else { return Buffer.from (""); } });
Object.define (Function.file.read, "line", function (input, output) { return the_file_read_line (input, output); });
Object.define (Function.file.read, "stream", function (file, option) { if (Function.file.base.exist (file = Function.path.base.name (file)) || Object.is.url (file)) return the_file_read_stream (file); });
Object.define (Function.file, "size", function (file, option) { if (Function.file.base.exist (file = Function.path.base.name (file))) return the_path_stat (file, option).size; else return 0; });
Object.define (Function.file, "stat", function (file, ... argument) { return Function.path.stat (file, ... argument); });
Object.define (Function.file, "write", function (file, data = "", ... argument) { try { var argument = Object.argument (... argument), option = Object.option (argument.object, {dir: true}), context = argument.function; if (true === option.dir) Function.dir.create (Function.dir.name (file), option); if (option.type === "xml") if (Object.is.error (data = Function.xml.format (data))) return data; if (option.type === "serialize") if (Object.is.error (data = Function.serialize.format (data))) return data; if (option.type === "json" || Object.is.array (data) || Object.is.object (data)) if (Object.is.error (data = JSON.encode (data))) return data; if (option.type === "stream") { var stream = the_file_write_stream (Function.path.base.name (file), option); if (data) stream.write (data); return stream; } return the_file_write (Function.path.base.name (file), data, option, context); } catch (error) { return false; } });

function the_dir_tmp () { return $$$.os.tmpdir (); }
function the_dir_name (dir) { return $$$.path.dirname (dir); }
function the_dir_write (dir, option, context) { if (context) $$$.fs.mkdir (dir, option, context); else $$$.fs.mkdirSync (dir, option); return true; }
function the_dir_read (dir, option, context) { if (context) $$$.fs.readdir (dir, option, context); else return $$$.fs.readdirSync (dir, option); return true; }
function the_dir_delete (dir, option, context) { if (context) $$$.fs.rmdir (dir, option, context); else $$$.fs.rmdirSync (dir, option); return true; }

Object.define (Function, "dir", function (dir, ... argument) { return Function.dir.read (dir, ... argument); });
Object.define (Function.dir, "recursive", true, {configurable: true, enumerable: true, writable: true});
Object.define (Function.dir, "hidden", true, {configurable: true, enumerable: true, writable: true});
Object.define (Function.dir, "tmp", the_dir_tmp ());
Object.define (Function.dir, "base", function () {});
Object.define (Function.dir.base, "name", function () {});
Object.define (Function.dir.base, "exist", function (dir) { if (Function.path.type (dir) === "dir") return true; else return false; });
Object.define (Function.dir, "create", function (dir, ... argument) { return Function.dir.write (dir, ... argument); });
Object.define (Function.dir, "delete", function (dir, ... argument) { try { var argument = Object.argument (... argument), option = Object.option (argument.object, {recursive: Function.dir.recursive, hidden: Function.dir.hidden}), context = argument.function; if (context) return the_dir_delete (Function.path.base.name (dir), option, context); var data = Function.dir.read (dir, option); for (var i in data.extra.file) Function.file.delete (data.extra.file [i]); for (var i in (data = data.extra.dir.reverse ())) the_dir_delete (data [i], option); if (Function.dir.base.exist (dir = Function.path.base.name (dir)) === false) return false; return the_dir_delete (dir, option); } catch (error) { return false; } });
Object.define (Function.dir, "exist", function (dir) { return Function.dir.base.exist (Function.path.base.name (dir)); });
Object.define (Function.dir, "mode", function (dir, ... argument) { return Function.path.mode (dir, ... argument); });
Object.define (Function.dir, "name", function (dir) { return the_dir_name (Function.path.base.name (dir).concat ("dir")); });
Object.define (Function.dir, "read", function (dir, ... argument) { try { var argument = Object.argument (... argument), option = Object.option (argument.object, {recursive: Function.dir.recursive, hidden: Function.dir.hidden}), context = argument.function; if (context) return the_dir_read (Function.path.base.name (dir), option, context); if (Function.dir.base.exist (dir = Function.path.base.name (dir))) if ((dir = new Function.dir.read.synchronous (dir, option)).scan ()) return dir.data; return {file: [], dir: [], extra: {file: [], dir: []}} } catch (error) { return false; } }); Object.define (Function.dir.read, "synchronous", class { constructor (dir, option) { this.dir = dir; this.set (option); } set (option) { this.data = {file: [], dir: [], extra: {file: [], dir: []}}, this.option = option; } scan (dir = this.dir, recursive) { var path, data = the_dir_read (dir, this.option); for (var i in data) { if (Object.is.file (path = Function.path.join (dir, data [i]))) { if (this.data.extra.file.push (path)) { if (Object.is.set (recursive) === false) this.data.file.push (path); } } if (Object.is.dir (path)) { if (this.data.extra.dir.push (path)) { if (this.option.recursive === true) this.scan (path, true); if (Object.is.set (recursive) === false) this.data.dir.push (path); } } } return this; } });
Object.define (Function.dir, "size", function (dir, option) { var size = 0; for (var i in (dir = Function.dir.read (dir, option).extra.file)) size = (size + Function.file.size (dir [i])); return size; });
Object.define (Function.dir, "stat", function (dir, ... argument) { return Function.path.stat (dir, ... argument); });
Object.define (Function.dir, "write", function (dir, ... argument) { try { var argument = Object.argument (... argument), option = Object.option (argument.object, {recursive: Function.dir.recursive, hidden: Function.dir.hidden}), context = argument.function; if (context) return the_dir_write (Function.path.base.name (dir, option, context)); if (option.recursive === true) { for (var i in (dir = Function.path.split.partial (dir))) if (Function.dir.base.exist (dir [i]) === false) the_dir_write (dir [i], option); return true; } if (Function.dir.base.exist (dir = Function.path.base.name (dir))) return false; return the_dir_write (dir, option); } catch (error) { return false; } });
