declare var global, require  // Supress warning

((global: any) => {

  global.JSZip = require('jszip')
  global.Rx = require('rxjs/Rx')
  global.Stats = require('stats-js')

})(Function('return this')())