const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/api/program', (req, res) => {

    const programs = [
{id:1, name: 'Program 1'},
{id:2, name: 'Program 2'},
{id:3, name: 'Program 3'},
 ]
  res.send(programs)
})

app.get('/api/users', (req, res) => {

    const users = [
{id:1, name: 'User 1'},
{id:2, name: 'User 2'},
{id:3, name: 'User 3'},
    ]
    res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})