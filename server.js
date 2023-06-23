const app = require('./app')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

const conn = mongoConn()
app.set('port', process.env.PORT)

app.listen(app.get('port'), () => {
    console.log(`arrancó por puerto: ${app.get('port')}`)
})