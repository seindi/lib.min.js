const $$$ = {cpu: {os: require ("os"), cluster: require ("cluster")}}

Object.define (Function, "cpu", function () {});
Object.define (Function.cpu, "os", function () {});
Object.define (Function.cpu.os, "network", $$$.cpu.os.networkInterfaces);
