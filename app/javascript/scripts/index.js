import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context(".", true, /\.js$/)
application.load(definitionsFromContext(context))
import "./confirmCart"
import "./swiftImg"
import "./bookmarks"
import '@fortawesome/fontawesome-free/js/all.js'

