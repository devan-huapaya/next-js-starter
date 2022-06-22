import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useText } from 'hooks/useText'
import { DropDown } from 'components/common/DropDown'
import { ProfileDropDownProps } from './ProfileDropDown.types'

export const ProfileDropDown = ({
	testId = 'ProfileDropDown',
	className
}: ProfileDropDownProps) => {
	const { t } = useText('common.userDropdown')
	const { data: session } = useSession()
	const label = session?.user?.name || t('signIn')
	const { push } = useRouter()

	return (
		<DropDown
			className={className}
			items={[
				{
					children: t('profile'),
					onClick: () => {
						push('/profile')
					},
					value: 'profile'
				},
				{ children: t('logout'), onClick: () => signOut(), value: 'logout' }
			]}
			testId={testId}
			v='secondary'
		>
			{label}
		</DropDown>
	)
}
