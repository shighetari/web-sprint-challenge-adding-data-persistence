const router = require('express').Router()

// const router = express.Router()

const tModel = require('./taskModel')


router.get("/", (req, res) => {
      tModel.getTask()
      .then(result => {
          res.status(200).json({data: result})
      })
      .catch(err => {
          console.log(err.message)
          res.status(500).json({errMessage: err.message})
      })
})

router.post("/", (req, res)=> {
    tModel.addTask(req.body)
    .then(newTask => {
        res.status(200).json(newTask)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({errMessage: err.message})
    })
})

module.exports = router