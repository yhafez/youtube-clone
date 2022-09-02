import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

import { IVideo } from '../models/Videos'
import { Co2Sharp } from '@mui/icons-material'

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New')
	const [videos, setVideos] = useState<IVideo[]>([])

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => {
			for (const video of data.items) {
				console.log(video.snippet.title)
			}
			setVideos(data.items)
		})
	}, [selectedCategory])

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box
				sx={{
					height: { sx: 'auto', md: '92vh' },
					borderRight: '1px solid #3d3d3d',
					px: { sx: 0, md: 2 },
				}}
			>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
					Copyright © 2022 YH Youtube Clone
				</Typography>
			</Box>
			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
					{selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	)
}

export default Feed