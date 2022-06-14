/*!
 * Studies
 */
import { Button } from 'components/common/Button'
import { IconBadge } from 'components/common/IconBadge'
import { List } from 'components/partials/List'
import { PageWrapper } from 'partials/PageWrapper'
import { StudiesProps } from './Studies.types'
import { subtleText } from './styles'

export const Studies = function Studies({ testId = 'Studies' }: StudiesProps) {
	return (
		<PageWrapper title='Studies' data-testid={testId} className='flex flex-col items-start gap-10'>
			<Button>+ Add Study</Button>
			<List
				columns={[
					{
						key: 'image',
						title: 'Image',
						width: 1
					},
					{
						key: 'name',
						className: 'font-bold text-sm text-gray-700 line-clamp-2',
						title: 'Study Name',
						width: 6
					},
					{
						key: 'owner',
						className: 'text-base text-gray-900 font-semibold',
						title: 'Owner',
						width: 2
					},
					{
						key: 'submissionDate',
						className: subtleText,
						title: 'Submission Date',
						width: 2
					},
					{
						key: 'status',
						title: 'Status',
						width: 1
					}
				]}
				data={[
					{
						image: <img src='/images/study1.png' alt='PCR' className='rounded' />,
						name: 'Real-time PCR designs to estimate nuclear and mitochondrial DNA copy number in forensic and ancient DNA studies',
						owner: (
							<div className='flex flex-col'>
								Neil Sims <div className={subtleText}>email@example.com</div>
							</div>
						),
						submissionDate: '07/21/2022',
						status: <IconBadge variant='new' />
					},
					{
						image: <img src='/images/study2.png' alt='DNA' className='rounded' />,
						name: 'Distribution of mitochondrial DNA lineages among Native American tribes of Northeastern North America',
						owner: (
							<div className='flex flex-col'>
								Jane Williams
								<div className={subtleText}>email@example.com</div>
							</div>
						),
						submissionDate: '05/12/2022',
						status: <IconBadge variant='approved' />
					},
					{
						image: <img src='/images/study3.png' alt='Gene' className='rounded' />,
						name: 'Development of Gene Editing and Cell Culture Capacity and Expertise in the Tribal Northern Plains',
						owner: (
							<div className='flex flex-col'>
								Thomas Lean
								<div className={subtleText}>email@example.com</div>
							</div>
						),
						submissionDate: '03/04/2022',
						status: <IconBadge variant='archived' />
					}
				]}
			/>
		</PageWrapper>
	)
}
