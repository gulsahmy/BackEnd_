"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// Authentication Control Middleware:

const Token = require('../models/token.model')

module.exports = async (req, res, next) => {

    req.user = null;

  // Authentication: Token ... token...
  // Authentication: ApiKey... token...
  // Authentication: Bearer ... token...
  // Authentication: Auth ... token...
  // Authentication: Token ... token...
  // Authentication: X-API-KEY ... token...
  // Authentication: x-auth-token ... token...

  // Get token from Headers:

  const auth = req.headers?.authorization || null // Token ...tokenKey...
  const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']

  if(tokenKey && tokenKey[0] == 'Token'){

    const tokenData = await Token.findOne({ token: tokenKey[1]}).populate('userId')
    // console.log(tokenData)
    if (tokenData) req.user = tokenData.userId
  }

  /// console.log(req.user)
  next()
}


/* ------------------------------------------------------- */


















/* ------------------------------------------------------- */