var
  should = require("should"),
  fileKind = require("../index");

describe("File Kind", function() {
  it("should get needed kinds", function() {
    fileKind("image/png").should.equal("image");
    fileKind("image/jpeg").should.equal("image");
    fileKind("multipart/x-zip").should.equal("archive");
    fileKind("audio/mpeg").should.equal("audio");
    fileKind("application/smil").should.equal("video");
  });

  it("should get \"file\" kind for not registered mime types", function() {
    fileKind("type/desc").should.equal("file");
  });
});