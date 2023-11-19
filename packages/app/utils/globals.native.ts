import * as WebAssembly from 'react-native-webassembly'

// eslint-disable-next-line @typescript-eslint/no-var-requires
global.TextEncoder = require('text-encoding').TextEncoder
global.WebAssembly = WebAssembly

class WebAssemblyInstance {
  wrong: any
}

global.WebAssembly.Instance = WebAssemblyInstance
