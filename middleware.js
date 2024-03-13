module.exports= {
    requireAuth: function(req, res, next) {
      console.log("requireAuth is called ");
      next();
    },

    logger: function(req, res, next) {
      console.log(`Logger called with ${req.method}`);
      next();
    }
  }