import router from '../../router'
import axios from 'axios'

const state = {
  btnLoader: false,
  firebaseApp: {},
  storage: {},
  coursedata: {},
  f1: false
}

const getters = {
  btnLoader: state => state.btnLoader,
  coursedata: state => state.coursedata
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
                    axios.get('https://mz02test.herokuapp.com/connection', {
                      params: {
                        name: payload.name,
                        description: payload.description,
                        docUrl: result3
                      }
                    })
                      .then(function (response) {
                        console.log(response)
                        state.coursedata[response.data._id] = {
                          name: response.data.name,
                          desc: response.data.description,
                          docUrl: response.data.docUrl
                        }
                        console.log(state.coursedata)

                        state.f1 = true
                        setTimeout(function () {
                          state.f1 = false
                        }, 1000)
                        state.btnLoader = false
                      })
                      .catch(function (error) {
                        console.log(error)
                        state.f1 = true
                        setTimeout(function () {
                          state.f1 = false
                        }, 1000)
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
  },

  insertdata (state, payload) {
    console.log(payload)
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
