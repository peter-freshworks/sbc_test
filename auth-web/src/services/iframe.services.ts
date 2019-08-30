import Axios from 'axios'
import ConfigHelper from '../util/config-helper'
const AUTHENTICATION_RESOURCE_NAME = '/authenticate'

export default {
  emit (framewindow :Window, msg:string) {
    console.log(ConfigHelper.getValue('VUE_APP_COPS_REDIRECT_URL'))
    framewindow.postMessage(msg, '*')
  }
}
