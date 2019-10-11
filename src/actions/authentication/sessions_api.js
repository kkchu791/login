class SessionApi {
  static signUp({ first_name, last_name, email, password }) {
    return Promise.resolve({
      status: 'Success',
      token: 'xxx',
      login: {
        email,
        username: 'admin',
        userId: 1
      }
    })
  }


  static login({ email, password }) {
    return Promise.resolve({
      status: 'Success',
      token: 'xxx',
      login: {
        email,
        username: 'admin',
        userId: 1
      }
    })
  }
}
