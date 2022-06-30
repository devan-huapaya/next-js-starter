import { Form as FinalForm } from 'react-final-form'
import { FormProps } from './Form.types'

export const Form = <T extends Record<string, unknown>>({
	className,
	initialValues,
	onSubmit,
	render,
	testId = 'Form'
}: FormProps<T>) => (
	<FinalForm
		className={className}
		testId={testId}
		initialValues={initialValues}
		onSubmit={onSubmit}
		render={(props) => {
			const body = render(props)

			return body ? <div data-testid={testId}>{body}</div> : null
		}}
	/>
)