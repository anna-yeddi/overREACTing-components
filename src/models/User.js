import logo from '../logo.svg'

// default values:
export default class User {
  constructor(entity) {
    Object.assign(
      this,
      {
        name: 'Guest',
        status: '',
        online: false,
        avatar: logo,
        hobbies: [],
      },
      entity
    )
  }
}
