import React from 'react'
import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard } from './'
import { IVideo } from '../models/Videos'

const Videos = ({
	videos,
	direction,
}: {
	videos: IVideo[]
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | undefined
}) => {
	return (
		<Stack
			direction={direction || 'row'}
			flexWrap="wrap"
			justifyContent="center"
			alignItems="start"
			gap={2}
		>
			{videos.map((item, i) => (
				<Box key={i}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard channelDetail={item} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos
