const fs = require('fs')
const path = require('path')

const START = 1024

const buildDataFile = path.resolve(`${__dirname}/../.build.json`)

const writeNewId = id =>
  fs.writeFile(buildDataFile, JSON.stringify({ id }), (writeError) => {
    if (writeError) throw new Error(writeError)
  })

if (fs.existsSync(buildDataFile)) {
  if (fs.statSync(buildDataFile).isFile()) {
    fs.readFile(buildDataFile, (error, data) => {
      if (error) throw new Error(error)

      const buildData = JSON.parse(data)

      if (typeof buildData.id !== 'number') {
        console.log('Saved build ID is not a number. Resetting it.')
        writeNewId(START)
      } else {
        writeNewId(buildData.id + 1)
      }
    })
  }
} else {
  console.log('No build file exists. Creating it.')
  writeNewId(START)
}