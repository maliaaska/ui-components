import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import ContactsController from "./controllers/contacts/contacts.controller.js";

const app = express()
const port = 3500

app.use((req, res, next) => {
    bodyParser.json()(req, res, err => {
        if (err) {
            console.warn('Bad request => 400')
            return res.sendStatus(400); // Bad request
        }

        next();
    });
});
app.use(cors())
app.use('/contacts', ContactsController)

app.listen(port, () => {
    console.log(`Mock API is listening on port ${port}`)
})