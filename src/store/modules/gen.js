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
                actions.checkEmptyField(payload.vimeoId).then((result3) => {
                  if (result3) {
                    actions.checkEmptyField(payload.courseFee).then((result4) => {
                      if (result4) {
                        state.btnLoader = true
                        let docBind = {
                          x: payload.docObj,
                          y: payload.docUrl
                        }
                        actions.uploaddoc(state, docBind).then((result5) => {
                          if (result5) {
                            let url = ServerUrl.url
                            let deployUrl = url + 'uploaddata'
                            axios.get(deployUrl, {
                              params: {
                                name: payload.name,
                                description: payload.description,
                                docUrl: result5,
                                vimeoId: payload.vimeoId,
                                courseFee: payload.courseFee
                              }
                            })
                              .then(function (response) {
                                let dump = ''
                                for (let i in response.data) {
                                  dump = response.data[i].Name
                                  state.coursedata[response.data[i]._id] = {
                                    name: response.data[i].Name
                                  }
                                }
                                state.f1 = true
                                setTimeout(function () {
                                  state.f1 = false
                                }, 1000)
                                state.btnLoader = false
                                mutations.goTo(state, '/ViewTrainingData/' + dump)
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
    state.coursedata = {}
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'getdata'
    axios.get(deployUrl)
      .then(function (response) {
        let dataLength = response.data.length
        console.log(dataLength)
        let i = 0
        let flag = 0
        for (i in response.data) {
          console.log(response.data[i])
          state.coursedata[response.data[i]._id] = {
            name: response.data[i].Name
          }
          flag++
          console.log(i)
          if (flag === dataLength) {
            console.log(i)
            state.loader = false
            state.patchUpdateDom = !state.patchUpdateDom
          }
          //  console.log(state.coursedata)
        }
      })
      .catch(function (error) {
        console.log(error)
        state.loader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
  },

  gettrainingdata (state, payload) {
    console.log(payload)
    state.coursedata = {}
    state.loader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'gettrainingdata'
    axios.get(deployUrl, {
      params: {
        name: payload
      }
    })
      .then(function (response) {
        console.log(response.data)
        state.coursedata[response.data._id] = {
          name: response.data.Name,
          desc: response.data.Desc,
          docUrl: response.data.Docurl,
          vimeoId: response.data.Vimeoid
        }
        state.loader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
      .catch(function (error) {
        console.log(error)
        state.loader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
  },
  updatename (state, payload) {
    state.coursedata = {}
    console.log(payload)
    state.btnLoader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'updatename'
    axios.get(deployUrl, {
      params: {
        name: payload.name,
        key: payload.key
      }
    })
      .then(function (response) {
        console.log(response.data)
        state.coursedata[response.data._id] = {
          name: response.data.Name,
          desc: response.data.Desc,
          docUrl: response.data.Docurl
        }
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
      .catch(function (error) {
        console.log(error)
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
  },

  updatedesc (state, payload) {
    state.coursedata = {}
    console.log(payload)
    state.btnLoader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'updatedesc'
    axios.get(deployUrl, {
      params: {
        desc: payload.desc,
        key: payload.key
      }
    })
      .then(function (response) {
        console.log(response.data)
        state.coursedata[response.data._id] = {
          name: response.data.Name,
          desc: response.data.Desc,
          docUrl: response.data.Docurl,
          vimeoId: response.data.Vimeoid
        }
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
      .catch(function (error) {
        console.log(error)
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
  },

  updatedocUrl (state, payload) {
    state.coursedata = {}
    console.log(payload)
    state.btnLoader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'updatedocUrl'
    let docBind = {
      x: payload.docObj,
      y: payload.docUrl
    }

    actions.uploaddoc(state, docBind).then((result) => {
      if (result) {
        axios.get(deployUrl, {
          params: {
            docUrl: result,
            key: payload.key
          }
        })
          .then(function (response) {
            console.log(response.data)
            state.coursedata[response.data._id] = {
              name: response.data.Name,
              desc: response.data.Desc,
              docUrl: response.data.Docurl,
              vimeoId: response.data.Vimeoid
            }
            state.f1 = true
            setTimeout(function () {
              state.f1 = false
            }, 1000)
            state.btnLoader = false
            state.patchUpdateDom = !state.patchUpdateDom
          })
          .catch(function (error) {
            console.log(error)
            state.f1 = true
            setTimeout(function () {
              state.f1 = false
            }, 1000)
            state.btnLoader = false
            state.patchUpdateDom = !state.patchUpdateDom
          })
      }
    })
  },

  updatevideoUrl (state, payload) {
    state.coursedata = {}
    console.log(payload)
    state.btnLoader = true
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'updatevideoUrl'
    axios.get(deployUrl, {
      params: {
        vimeoId: payload.vimeoId,
        key: payload.key
      }
    })
      .then(function (response) {
        console.log(response.data)
        state.coursedata[response.data._id] = {
          name: response.data.Name,
          desc: response.data.Desc,
          docUrl: response.data.Docurl,
          vimeoId: response.data.Vimeoid
        }
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
      .catch(function (error) {
        console.log(error)
        state.f1 = true
        setTimeout(function () {
          state.f1 = false
        }, 1000)
        state.btnLoader = false
        state.patchUpdateDom = !state.patchUpdateDom
      })
  },
  deldata (state, payload) {
    console.log(payload)
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'deletedata'
    axios.get(deployUrl, {
      params: {
        name: payload.name
      }
    })
      .then(function (response) {
        console.log(response.data)
        delete state.coursedata[payload.key]
        state.patchUpdateDom = !state.patchUpdateDom
      })
      .catch(function (error) {
        console.log(error)
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
