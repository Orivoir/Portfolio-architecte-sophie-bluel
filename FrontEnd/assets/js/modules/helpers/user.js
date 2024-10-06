/**
 * this object define user state and expose logout action
 * Assume a authentication by token stored into sessionStorage with "token" keyname 
 */
const USER = {

  get isConnected() {

    return !!sessionStorage.getItem("token")
  },

  get token() {

    return sessionStorage.getItem("token")
  },

  logout() {
    if(this.isConnected) {
      sessionStorage.removeItem("token")

      // reload page natural upgrade User Interface with call to implementContextLogin
      document.location.href = "/"
    }

  }
}

export {USER}