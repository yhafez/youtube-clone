import React from 'react'
import { Stack } from '@mui/material'

import { categories } from '../utils/constants'

const Sidebar = ({
	selectedCategory,
	setSelectedCategory,
}: {
	selectedCategory: string
	setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}) => {
	return (
		<Stack
			direction="row"
			sx={{
				overflow: 'auto',
				height: { sx: 'auto' },
				flexDirection: { md: 'column' },
			}}
		>
			{categories.map(category => (
				<button
					key={category.name}
					className="category-btn"
					onClick={() => setSelectedCategory(category.name)}
					style={{
						background: category.name === selectedCategory ? '#FC1503' : '',
						color: 'white',
					}}
				>
					<span
						style={{
							color: category.name === selectedCategory ? 'white' : 'red',
							marginRight: '15px',
						}}
					>
						{category.icon}
					</span>
					<span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
						{category.name}
					</span>
				</button>
			))}
		</Stack>
	)
}

export default Sidebar
