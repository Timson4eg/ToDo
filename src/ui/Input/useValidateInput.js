import { useEffect, useState } from 'react'

export const useValidateInput = (value, validations) => {
	const [isEmpty, setIsEmpty] = useState(true)
	const [inputValidate, setValidate] = useState(false)

	useEffect(() => {
		value ? setIsEmpty(false) : setIsEmpty(true)
	}, [value])

	useEffect(() => {
		if (isEmpty) {
			setValidate(true)
		} else {
			setValidate(false)
		}
	}, [isEmpty])

	return { isEmpty, inputValidate }
}
