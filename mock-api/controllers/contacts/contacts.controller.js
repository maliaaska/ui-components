import express from 'express'
import { contactMock } from "./contacts.mock.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json( contactMock)
})

export default router;