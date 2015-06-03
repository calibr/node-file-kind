var
  fs = require("fs");

var contents = fs.readFileSync(__dirname + "/kinds.json").toString("utf8");
var kinds = JSON.parse(contents);

module.exports = function(mimeType) {
  var kind = "file";
  if(mimeType in kinds) {
    kind = kinds[mimeType];
  }
  return kind;
};