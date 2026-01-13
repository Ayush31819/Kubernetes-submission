const Koa = require('koa')
const app = new Koa()
const PORT = process.env.PORT || 3000
const createRandomString = () => Math.random().toString(36).substr(2, 6)

// Store startup timestamp and random string in memory
const startupTime = new Date()
const startingString = createRandomString()

app.use(async ctx => {
  if (ctx.path.includes('favicon.ico')) return

  // Status endpoint
  if (ctx.path === '/status') {
    ctx.body = {
      timestamp: startupTime.toISOString(),
      randomString: startingString
    }
    return
  }

  // Root endpoint
  if (ctx.path === '/') {
    const stringNow = createRandomString()
    console.log('--------------------')
    console.log(`Responding with ${stringNow}`)
    ctx.body = `${startingString}: ${stringNow}`
    return
  }

  ctx.body = 'Not found'
  ctx.status = 404
});


console.log(`Started with ${startingString} at ${startupTime.toISOString()}`)
app.listen(PORT)