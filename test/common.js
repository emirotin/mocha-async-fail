module.exports.wrapCheck = function (done, fn) {
  try {
    fn.apply(this, arguments);
    done();
  }
  catch (e) {
    done(e);
  }
};