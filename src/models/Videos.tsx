export interface VideoId {
	kind: string
	videoId?: string
	channelId?: string
}

export interface Thumbnail {
	url: string
	height: number
	width: number
}

export interface Thumbnails {
	default: Thumbnail
	high: Thumbnail
	medium: Thumbnail
}

export interface Snippet {
	channelId: string
	channelTitle: string
	description: string
	liveBroadcastContent: string
	publishTime: string
	publishedAt: string
	thumbnails: Thumbnails
	title: string
}

export interface Statistic {
	subscriberCount?: string
	viewCount?: string
	likeCount?: string
}

export interface IVideo {
	id: VideoId
	kind: string
	snippet: Snippet
	statistics?: Statistic
}
