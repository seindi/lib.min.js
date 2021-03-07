const $$$ = {hash: require ("crypto")}

function the_hash (algorithm, option) { return $$$.hash.createHash (algorithm, option); }

Object.define (Function, "hash", function (algorithm, option) { return the_hash (algorithm, option); });
Object.define (Function.hash, "shuffle", function (... option) { var shuffle = [], char = String.char.alpha.numeric, length = Function.hash.shuffle.length; for (var i in option) { if (Object.is.string (option [i])) char = option [i]; else if (Object.is.integer (option [i])) length = option [i]; else shuffle; } for (var i = 0; i < length; i ++) shuffle.push (char.rand ()); return shuffle.join (""); });
Object.define (Function.hash, "md", function (input) { return the_hash ("md5").update (input).digest ("hex"); });
Object.define (Function.hash, "sha", function (input) { return the_hash ("sha1").update (input).digest ("hex"); });
Object.define (Function.hash, "sha-x", function (input) { return the_hash ("sha256").update (input).digest ("hex"); });
Object.define (Function.hash, "s", function (input, offset, length) { return Function.hash.md (Function.hash.md (Function.hash.md (input))).concat ("-").concat (Function.hash.sha (Function.hash.sha (Function.hash.sha (input)))).concat ("-").concat (Function.hash ["sha-x"] (Function.hash ["sha-x"] (Function.hash ["sha-x"] (input)))).substr (offset, length); });
Object.define (Function.hash.shuffle, "length", 24);
Object.define (Function.hash, "algorithm", {"md": "md5", "sha": "sha1", "sha-x": "sha256", "encoding": "utf8", "base": "base64"});

Object.define (JSON, "decode", function (json) { try { if (Object.is.string (json)) if (json) return JSON.parse (json); else return new Error; else return new Error; return new Error; } catch (error) { return new Error; } });
Object.define (JSON, "encode", function (json) { try { if (Object.is.define (json)) return JSON.stringify (json); else return new Error; } catch (error) { return new Error; } });
