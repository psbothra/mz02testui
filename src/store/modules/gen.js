import router from '../../router'
import axios from 'axios'

const state = {
  btnLoader: false,
  firebaseApp: {},
  storage: {},
  coursedata: {}
}

const getters = {
  btnLoader: state => state.btnLoader
}

const mutations = {
  goTo (state, path) {
    router.push(path)
  },

  uploaddata (state, payload) {
    actions.checkEmptyField(payload.name).then((result) => {
      if (result) {
        actions.checkEmptyField(payload.description).then((result1) => {
          if (result1) {
            actions.checkEmptyField(payload.docUrl).then((result2) => {
              if (result2) {
                state.btnLoader = true

                let docBind = {
                  x: payload.docObj,
                  y: payload.docUrl
                }

                actions.uploaddoc(state, docBind).then((result3) => {
                  if (result3) {
                    axios.get('http://127.0.0.1:5000/connection', {
                      params: {
                        name: payload.name,
                        description: payload.description,
                        docUrl: result3
                      }
                    })
                      .then(function (response) {
                        console.log(response)
                        state.btnLoader = false
                      })
                      .catch(function (error) {
                        console.log(error)
                        state.btnLoader = false
                      })
                  }
                })
              }
            })
          }
        })
      }
    })
  }

}

const actions = {
  checkEmptyField (state, payload) {
    //
    return new Promise((resolve) => {
      let re = /([^\s])/
      if (!re.test(payload)) {
        resolve(false)
        //
        alert('Empty Field !')
      } else {
        resolve(true)
      }
    })
  },
  uploaddoc (state, event) {
    console.log(event)
    return new Promise((resolve) => {
      let uploadTask = state.storage.ref('Documents/' + event.y.slice(event.y.lastIndexOf('/') + 1)).put(event.x)
      uploadTask.on('state_changed', function (snapshot) {
      }, function (error) {
        console.log(error)
      }, function () {
        console.log(uploadTask.snapshot.downloadURL)
        resolve(uploadTask.snapshot.downloadURL)
      })
    })
  }
}

export default {
  mutations,
  state,
  getters,
  actions
}
