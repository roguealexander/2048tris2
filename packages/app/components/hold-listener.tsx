import { observer, useMount, useUnmount } from '@legendapp/state/react'
import { actions$ } from '../state'
import { appState$ } from 'app/appState'

export const BaseHoldListener = observer(
  ({ onHold, onHoldDown }: { onHold: () => void; onHoldDown?: () => void }) => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return null
      event.preventDefault()
      event.stopPropagation()
      onHoldDown && onHoldDown()
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return null
      event.preventDefault()
      event.stopPropagation()
      onHold()
    }

    useMount(() => {
      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)
    })
    useUnmount(() => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    })

    return null
  }
)

export const GameplayHoldListener = observer(() => {
  if (appState$.tab.get() !== '2048tris') return null
  return <BaseHoldListener onHold={actions$.hold} />
})
