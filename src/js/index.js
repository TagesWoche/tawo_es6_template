'use strict'

if (module.hot) {
  module.hot.accept()
}

import { mount } from 'riot'
import '../styles/index.scss'
import './components/template-app.tag'
import './components/template-component.tag'

mount('template-app', {
})
