import { observer } from "@legendapp/state/react"
import { Button, SizableText, XStack, YStack } from "@my/ui"
import { state$, actions$ } from "app/state"
import { ActiveTilesHistogram } from "./active-tile-histogram"
import { Stats } from "./stats"


export const TopOutOverlay = observer(() => {
	if (!state$.toppedOut.get()) return null
	return (
		<YStack fullscreen gap="$4" ai='center' jc='center'>
			<XStack fullscreen bg="$background" o={0.7}/>
			<SizableText size="$10" zi={1}>GAME OVER</SizableText>
			<Button zi={1} br="$0" onPress={() => actions$.reset()}>
				New Game
			</Button>
			<XStack zi={1} gap="$4" jc='flex-start' ai='flex-start'>
				<YStack w="$12" gap="$2" ai='flex-start'>
					<Stats />
				</YStack>
				<YStack w="$12" gap="$2" ai='flex-start'>
					<ActiveTilesHistogram />
				</YStack>
			</XStack>
		</YStack>
	)
})