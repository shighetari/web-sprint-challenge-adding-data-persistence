const router = require('express').Router()

// const router = express.Router()

const rModel = require('./resourceModel')


router.get("/", (req, res) => {
      rModel.getResource()
      .then(result => {
          res.status(200).json({data: result})
      })
      .catch(err => {
          console.log(err.message)
          res.status(500).json({errMessage: err.message})
      })
})

router.post("/:id/resources", (req, res)=> {
    rModel.addResource(req.body)
    .then(newResource => {
        res.status(200).json(newResource)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({errMessage: err.message})
    })
})


module.exports = router