import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { IVideo } from '../models/Videos'

const ChannelDetail = () => {
	const [channelDetail, setChannelDetail] = useState<IVideo>()
	const [videos, setVideos] = useState([])

	const { id } = useParams()

	useEffect(() => {
		fetchFromAPI(`channels?part=snippet&id=${id}`).then(data => setChannelDetail(data?.items[0]))

		fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(data =>
			setVideos(data?.items),
		)
	}, [id])

	return (
		<Box minHeight="95vh">
			<Box>
				<div
					style={{
						background:
							'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(55,2,29,1) 13%, rgba(93,3,24,1) 38%, rgba(103,3,23,1) 45%, rgba(238,6,6,1) 100%)',
						zIndex: 10,
						height: '300px',
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop="-110px" />
			</Box>
			<Box display="flex" p={2}>
				<Box sx={{ mr: { sm: '100px' } }} />
				<Videos videos={videos} />
			</Box>
		</Box>
	)
}

export default ChannelDetail
