export const importRapier = async () => {
  const r = await import('@dimforge/rapier2d-compat')
  console.log(r)
  await r.init()
  return r
}
