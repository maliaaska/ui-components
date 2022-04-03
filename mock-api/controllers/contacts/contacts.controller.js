import express from 'express'
import JSONdb from 'simple-json-db'
import { randomUUID } from 'crypto'

const router = express.Router()
const db = new JSONdb('data/contacts.json')

router.get('/', (req, res) => {
  const contacts = db.get('contacts') || []

  res.json(contacts)
})

router.post('/', (req, res) => {
  const id = randomUUID()
  const { name = '', lastname = '', mail = '', phone = '' } = req.body
  const contacts = db.get('contacts') || []

  if (name === '' || lastname === '') {
    return res.sendStatus(400)
  }

  contacts.push({
    id,
    name,
    lastname,
    mail,
    phone
  })

  db.set('contacts', contacts)
  db.sync()

  return res.send(randomUUID())
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, lastname, mail, phone } = req.body
  const contacts = db.get('contacts') || []
  let found = false

  db.set(
    'contacts',
    contacts.map((item) => {
      if (item.id !== id) {
        return item
      }

      found = true

      return {
        ...item,
        name: name || item.name,
        lastname: lastname || item.lastname,
        mail: mail || item.mail,
        phone: phone || item.phone
      }
    })
  )
  db.sync()

  if (!found) {
    res.sendStatus(404)
  } else {
    res.sendStatus(200)
  }
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  const contacts = db.get('contacts') || []
  let found = false

  db.set(
    'contacts',
    contacts.filter((item) => {
      if (item.id === id) {
        found = true

        return false
      }

      return true
    })
  )
  db.sync()

  if (!found) {
    res.sendStatus(404)
  } else {
    res.sendStatus(200)
  }
})

export default router
