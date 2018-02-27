import router from '../../router'
import axios from 'axios'
import {ServerUrl} from '../../variables/config'

const state = {
  btnLoader: false,
  firebaseApp: {},
  storage: {},
  coursedata: {},
  patchUpdateDom: false,
  loader: false,
  f1: false
}

const getters = {
  btnLoader: state => state.btnLoader,
  loader: state => state.loader,
  patchUpdateDom: state => state.patchUpdateDom,
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
                    let url = ServerUrl.url
                    let DeployUrl = url + 'connection'
                    axios.get(DeployUrl, {
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
    state.loader = true
    console.log(payload)
    let url = payload.videoUrl.slice(8)
    let dummyUrl = 'https://player.vimeo.com/video/video_id?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'
    let videoUrl = dummyUrl.replace('video_id', url)
    let url1 = ServerUrl.url
    console.log(url1)
    let DeployUrl = url1 + 'uploadvideoUrl'

    axios.get(DeployUrl, {
      params: {
        name: payload.name,
        videoUrl: videoUrl
      }
    })
      .then(function (response) {
        console.log(response)
        state.coursedata[response.data._id] = {
          name: response.data.name,
          videoUrl: response.data.videoUrl
        }
        console.log(state.coursedata)

        state.btnLoader = false
        state.loader = false
      })
      .catch(function (error) {
        console.log(error)
        state.btnLoader = false
        state.loader = false
      })
  },

  getdata (state) {
    state.loader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'getdata'
    axios.get(deployUrl, { })
      .then(function (response) {
        let dataLength = response.data.length
        let i = 0
        for (i in response.data) {
          console.log(response.data[i])
          state.coursedata[response.data[i]._id] = {
            name: response.data[i].item
          }
        //  console.log(state.coursedata)
        }
        if (i === dataLength) {
          console.log(i)
          state.loader = false
          state.patchUpdateDom = !state.patchUpdateDom
        }
      })
      .catch(function (error) {
        console.log(error)
        state.loader = false
        state.patchUpdateDom = !state.patchUpdateDom
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
