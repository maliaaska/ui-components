import express from 'express'
import cors from 'cors'
import ContactsController from "./controllers/contacts/contacts.controller.js";

const app = express()
const port = 3500

app.use(cors())
app.use('/contacts', ContactsController)

app.listen(port, () => {
    console.log(`Mock API is listening on port ${port}`)
})