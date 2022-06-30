import { IconProps } from 'common/Icon/Icon.types'

export interface SidebarRoute {
	className?: string
	href: string
	icon: IconProps['icon']
	labelKey: string
}