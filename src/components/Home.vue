<template>
  <div>
    <div class= "pb-5 pt-5" align="center">
      <h1> This is for demo purpose<br><br>
      </h1>
      <h4>
        The admin panel here contain the features to upload the documents and the videos.<br>
        The login button authenticates the user with the API auth0.<br> And there you have access to the documents and the videos.<br>
        The training data is fetched from the database mongodb.
    </h4>

  </div>
</div>
</template>

<script>

import {ServerUrl} from '../variables/config'
import axios from 'axios'

export default {

  data () {
    return {}
  },
  created () {
    let url1 = ServerUrl.url
    let deployUrl = url1 + 'getblog'
    axios.get(deployUrl)
      .then(response => {
        console.log(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
<style scoped>

</style>
