module.exports = function (req, res, next) {
  if (
    !req.user.roles.includes('FARM_OWNER') ||
    !req.user.roles.includes('ADMIN')
  )
    return res.status(403).send('Access denied.');

  next();
};