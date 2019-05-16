module.exports = {

    logged: function(req,res, next){
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/failed')
    }
};