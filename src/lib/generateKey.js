import crypto from 'crypto'
import { get } from 'lodash'

const generateKey = (item) => {
  const hash = crypto.createHash('sha256')
  hash.update(get(item, 'title', crypto.randomBytes(4).toString('hex')))

  return hash.digest('hex').substring(0, 8)
}

export default generateKey
