import * as WebAssembly from 'react-native-webassembly'
// import wasm from './rapier.wasm'

// export const importRapier = async () => {
//   const RAPIER = await WebAssembly.instantiate(wasm)
//   const world = new RAPIER.instance.exports.World({ x: 0.0, y: 9.81 })

//   // console.log({
//   //   RAPIER: RAPIER.instance.exports,
//   // })
//   // console.log('loading rapier')
//   // const rapier = await WebAssembly.instantiate(RapierWasm)
//   // console.log(rapier)
//   // console.log(JSON.stringify(rapier, null, 2))

//   // return rapier
// }

export const importRapier = async () => {
  const r = await import('@dimforge/rapier2d-compat')
  console.log(r)
  await r.init()
  console.log('made it here?')
  return r
}
