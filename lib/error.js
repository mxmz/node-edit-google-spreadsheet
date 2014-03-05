
function Error(code,reason) {
    this.code = code || 500;
    this.reason = reason || "Unknown error";
}

Error.prototype.toString = function() { return this.code + ": " + this.reason; };

exports.Error = Error;

