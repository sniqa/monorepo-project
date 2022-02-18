import { Avatar, Typography } from '@mui/material'
import { UserProfile as AsideUserProfile } from '@monorepo/types'

type UserProfileProps = AsideUserProfile & {
	onClick?: () => void
}

export default function UserProfile(props: UserProfileProps) {
	const { avatar = '', nickname, desc, onClick = () => {} } = props

	return (
		<div className="h-8rem w-full border-b border-gray-200 flex justify-center items-center" onClick={onClick}>
			<Avatar src={avatar} sx={{ width: 56, height: 56 }} />

			<div className="flex flex-col justify-around w-12rem  ml-10px h-4rem">
				<Typography sx={{ fontSize: '1.5rem' }}>{nickname}</Typography>
				<Typography> {desc}</Typography>
			</div>
		</div>
	)
}
