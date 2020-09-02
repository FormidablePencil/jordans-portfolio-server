const ensureAuthenticated = async (req, res, next) => {
  console.log(await req.isAuthenticated())
  if (await req.isAuthenticated()) return next() // this method is from passport.
  res.status(400).send('please login to view this resource')
}

export default ensureAuthenticated