const express = require('express')
const colors = require('colors')
const cors = require('cors')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db')

const app = express()
app.use(cors())

// db connection
connectDB()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))