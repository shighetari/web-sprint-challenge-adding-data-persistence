const router = require('express').Router()

const pmodel = require('./projectModel')

router.get("/status", (req, res) => {
        res.json('project router IS ONLINE')
})

router.get("/", (req, res) => {
      pmodel.getProjects()
      .then(result => {
          res.status(200).json({data: result})
      })
      .catch(err => {
          console.log(err.message)
          res.status(500).json({errMessage: err.message})
      })
})

router.post("/", (req, res)=> {
    pmodel.addProject(req.body)
    .then(newProject => {
        res.status(200).json(newProject)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({errMessage: err.message})
    })
})
router.get('/:id/resources', (req, res) => {
    const { id } = req.params
    pmodel.getProjectResources(id)
        .then(result => {
            console.log(result)
            res.json(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err.message)
        })
})


module.exports = router