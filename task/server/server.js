import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()

dotenv.config()
const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_DB).then(() => {
    app.listen(PORT , () => {
        console.log(`app is listening to PORT ${PORT}`)
    })
}).catch((err) => {
    console.error(err)
})
