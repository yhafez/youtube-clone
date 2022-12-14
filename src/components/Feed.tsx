import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

import { IVideo } from '../models/Videos'

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New')
	const [videos, setVideos] = useState<IVideo[]>([])

	useEffect(() => {
		fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(data => setVideos(data.items))
	}, [selectedCategory])

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: { md: 'column', sm: 'row' },
					height: { sx: 'auto', md: '92vh' },
					borderRight: '1px solid #3d3d3d',
					px: { sx: 0, md: 2 },
					overflow: 'hidden',
				}}
			>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<Typography
					className="copyright"
					variant="body2"
					sx={{ mt: 1.5, color: '#fff', display: { sm: 'none', md: 'initial' } }}
				>
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
