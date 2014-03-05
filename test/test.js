var mongoPool = require('mongo-pool2');
var config = {
  host: 'localhost',
  port: 27017,
  db: '_test'
};

describe('Something', function () {
  it('should be ok', function (done) {
    (42).should.be.equal(42);
    done();
  });

  it.skip('should not be ok - 1', function (done) {
    mongoPool.connect(config, function(err, db1) {
      (!err).should.be.ok;
      (!!db1).should.be.ok;
      // tests exit with diff and error reporting
      ({}).should.be.equal({});
      mongoPool.connect(config, function(err, db2) {
        (!err).should.be.ok;
        (!!db2).should.be.ok;
        (db1).should.be.equal({});
        done();
      }, false);
    });
  });

  it.skip('should not be ok - 2', function (done) {
    mongoPool.connect(config, function(err, db1) {
      (!err).should.be.ok;
      (!!db1).should.be.ok;
      // tests exit, but without error erporting
      (db1).should.be.equal({});
      mongoPool.connect(config, function(err, db2) {
        (!err).should.be.ok;
        (!!db2).should.be.ok;
        (db1).should.be.equal({});
        done();
      }, false);
    });
  });

  it.skip('should not be ok - 3', function (done) {
    mongoPool.connect(config, function(err, db1) {
      (!err).should.be.ok;
      (!!db1).should.be.ok;
      mongoPool.connect(config, function(err, db2) {
        (!err).should.be.ok;
        (!!db2).should.be.ok;
        // tests do not exit at all
        (db1).should.be.equal({});
        done();
      }, false);
    });
  });


});