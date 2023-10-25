import { XStack, SizableText } from '@my/ui'
import { getTileData, getTileRadius } from '../tiles'
import { TileSize } from '../types'
import { Observable } from '@legendapp/state'
import { observer } from '@legendapp/state/react'

export const PlaceholderTile = () => {
	return <XStack w={60} h={60} bg="$border" o={0.5} br={60}/>
}

export const Tile = observer(({ size }: { size?: Observable<TileSize | null> }) => {
	const tileSize = size?.get()
	if (tileSize == null) return <PlaceholderTile />

	const tileData = getTileData(tileSize)!
	const tileRadius = getTileRadius(tileSize)

	return (
		<XStack w={tileRadius} h={tileRadius} br={tileRadius} bg={tileData.color} jc='center' ai='center'>
			<SizableText size="$8" color={tileData.textColor}>{tileData.size}</SizableText>
		</XStack>
	)
})
