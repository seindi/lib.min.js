import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";

Object.define (Function, "hash", function () {});
Object.define (Function.hash, "md", function (hash) { return md5 (hash.toString ()).toString (); });
Object.define (Function.hash, "sha", function (hash) { return sha1 (hash.toString ()).toString (); });
Object.define (Function.hash, "sha-x", function (hash) { return sha256 (hash.toString ()).toString (); });
Object.define (Function.hash, "s", function (hash, offset, length) {
	var md = Function.hash.md (Function.hash.md (Function.hash.md (hash)));
	var sha = Function.hash.sha (Function.hash.sha (Function.hash.sha (hash)));
	var s = Function.hash ["sha-x"] (Function.hash ["sha-x"] (Function.hash ["sha-x"] (hash)));
	return (md).concat ("-").concat (sha).concat ("-").concat (s).substr (offset, length);
	});
Object.define (Function.hash, "shuffle", function (... option) { var shuffle = [], char = String.char.alpha.numeric, length = Function.hash.shuffle.length; for (var i in option) { if (Object.is.string (option [i])) char = option [i]; else if (Object.is.integer (option [i])) length = option [i]; else shuffle; } for (var i = 0; i < length; i ++) shuffle.push (char.rand ()); return shuffle.join (""); });
Object.define (Function.hash.shuffle, "length", 24);
