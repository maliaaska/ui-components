import express from 'express'
import fs from 'fs'
import {randomUUID} from "crypto";

const router = express.Router();

const readContacts = () => {
    return new Promise((success) => {
        fs.readFile('data/contacts.json', (err, data) => {
            if (err) {
                console.warn('Could not read the contacts.json')
                success([])

                return
            }

            try {
                const obj = JSON.parse(data.toString())

                success(obj)
            } catch {
                success([])
            }
        })
    });
}

const saveContacts = (payload = []) => {
    return new Promise((success, fail) => {
        fs.writeFile(
            'data/contacts.json',
            JSON.stringify(payload),
            (err) => {
                if (err) {
                    console.warn('Could not write the contacts.json')
                    fail()

                    return
                }

                success()
            })
    });
}

router.get('/', (req, res) => {
    readContacts().then((contacts) => res.json(contacts))
})

router.post('/', (req, res) => {
    readContacts()
        .then((contacts) => {
            const {name = '', lastname = '', phone = '', mail = ''} = req.body
            const toSave = [...contacts, {
                id: randomUUID(),
                name,
                lastname,
                phone,
                mail
            }]

            saveContacts(toSave)
                .then(() => { res.status(200); })
                .catch(() => { res.status(500) })
                .finally(() => { res.send(); })
        })
        .catch(() => {
            res.status(500)
            res.send()
        })
})

export default router;