const express = require('express')

const usersRouter = express.Router()

usersRouter.get('/', async (req, res, next) => {})

usersRouter.get('/:id', async (req, res, next) => {})

usersRouter.post('/', async (req, res, next) => {})

usersRouter.put('/:id', async (req, res, next) => {})

usersRouter.delete('/:id', async (req, res, next) => {})

module.exports = usersRouter