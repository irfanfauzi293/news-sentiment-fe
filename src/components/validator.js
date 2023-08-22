const message = {
  numeric: 'Number is not valid',
  alphaNum: 'Symbol is forbidden',
  email: 'Email is not valid'
}

const regex = {
  email:
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  numeric: /^([0-9]+)$/,
  alphaNum: /^[a-zA-Z0-9 ]*$/
}

function fnRegex(value, type) {
  console.log(value)
  console.log(type)
  const re = new RegExp(regex[type])
  console.log(re.test)
  if (value) {
    if (re.test(value)) {
      return null
    } else {
      return message[type]
    }
  }

  return null
}

export function numeric(value) {
  return fnRegex(value, 'numeric')
}

export function alphaNum(value) {
  return fnRegex(value, 'alphaNum')
}

export function email(value) {
  return fnRegex(value, 'email')
}
