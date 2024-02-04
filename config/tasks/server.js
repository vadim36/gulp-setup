import gulp from 'gulp'
import {paths} from '../utils/paths.js'
import { plugins } from '../utils/plugins.js'

const PORT_ENV = process.env.PORT ?? 3000;

const serverConfiguration = {
  server: {
     baseDir: paths.buildPath
  },
  notify: false,
  port: PORT_ENV
}

export default function startServer() {
   return plugins.browserSync.init(serverConfiguration)
}