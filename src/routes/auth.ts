const Router = require('koa-router')
const passport = require('passport')
const util = require('util')
const queryString = require('querystring')

const router = new Router()

router.get('/login', passport.authenticate('auth0',  {
    scope: 'openid email profile'
}), function (req: any, res: any) {
    res.redirect('/')
})

router.get('/logout', (ctx: any, next: any) => {
    ctx.logout()  
    ctx.redirect('http://localhost:3000/logout/1');
})

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req: any, res: any, next: any) => {
    passport.authenticate('auth0', (err: any, user: any, info:any) => {
        req.logIn(user, (err: any) => {
            console.log(err)
        })
    })(req, res, next)
  });
  
  module.exports = router;