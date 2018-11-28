import crypto from 'crypto'

const generateKey = (item) => {
  const hash = crypto.createHash('sha256')

  hash.update(Object.values(item).join(':'))

  return hash.digest('hex').substring(0, 16)
}

export default generateKey
