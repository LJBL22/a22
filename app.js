// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
const pageList = require('./pages.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) //預設 layout 叫做 main
app.set('view engine', 'handlebars') //用上面設定好的引擎來當 view.engine 的意思

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:title', (req, res) => {
  console.log('req.params.title', req.params.title)
  const page = pageList.results.find(
    page => page.title === req.params.title
  )
  res.render('show', { page: page })
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
