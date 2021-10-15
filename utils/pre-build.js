const fs = require('fs')
const rimraf = require('rimraf')
const path = require('path')

(async () => {
  const distPath = path.resolve(__dirname, '..', 'dist')
  if (fs.existsSync(distPath)) {
    await new Promise(resolve => {
      rimraf(distPath, () => {
        resolve()
      })
    })
  }
  fs.mkdirSync(distPath)
})()
