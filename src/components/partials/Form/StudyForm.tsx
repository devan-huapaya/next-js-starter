import { useText } from 'hooks/useText'
import { Form } from 'partials/Form'
import { Button } from 'common/Button'
import { ImageInput } from 'common/ImageInput'
import { Input } from 'common/Input'
import { SubmitButton } from 'common/SubmitButton'
import { StudyFormProps } from './Form.types'

export const StudyForm = ({
	isError,
	isLoading,
	onSubmit,
	testId = 'CreateStudy'
}: StudyFormProps) => {
	const { t } = useText('createStudy')

	return (
		<Form
			data-testid={testId}
			onSubmit={onSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<div className='grid grid-cols-3 gap-2'>
						<ImageInput name='image' className='row-span-3' />
						<div className='col-span-2 row-span-2'>
							<Input name='title' placeholder='Title' type='textarea' />
						</div>
						<div>
							<label className='text-xs text-gray-500' htmlFor='coordinator'>
								{t('fields.coordinator')}
							</label>
							<Input name='coordinator' type='text' placeholder='Coordinator' />
						</div>
						<div>
							<label className='text-xs text-gray-500' htmlFor='endDate'>
								{t('fields.endDate')}
							</label>
							<Input name='endDate' type='date' placeholder='Select End Date' />
						</div>
						<label className='text-xs text-gray-500' htmlFor='description'>
							{t('fields.description')}
						</label>
						<div className='col-span-3'>
							<Input name='description' placeholder='Description' type='textarea' rows={5} />
						</div>
						<div className='col-span-3 flex gap-2'>
							<SubmitButton isError={isError} isLoading={isLoading} disableOnLoading>
								{t('buttons.submit')}
							</SubmitButton>
							<Button onClick={close}>{t('buttons.cancel')}</Button>
						</div>
					</div>
				</form>
			)}
		/>
	)
}
