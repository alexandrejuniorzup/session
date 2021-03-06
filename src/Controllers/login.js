const passport = require('passport');

function login(req, res, next) {

    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.redirect("/failed");
        req.logIn(user, (err) => {
            if (err) return next(err);
            return res.send("Logged")
        })
    })(req, res, next);

}


function render(req, res) {
    return res.render("login.pug")
}

function logout(req, res) {
    req.logout();
    res.send("Você foi deslogado")
}

module.exports = {
    login,
    render,
    logout
};