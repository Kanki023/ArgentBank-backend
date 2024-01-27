const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://admin:ysx2nwyr3zXoqRTz@int-web-p11.oepz2yr.mongodb.net/argentBankDB?retryWrites=true&w=majority'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
