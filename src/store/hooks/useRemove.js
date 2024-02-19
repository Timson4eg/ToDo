import { useContext } from 'react'
import { Context } from '../../providers/TasksProviders'

export const useRemove = id => {
	const { dispatch, lastKey, setLastKey } = useContext(Context)
	const removeTask = id => {
		if (id === Number(lastKey)) setLastKey(lastKey - 1) // проверка если удаляю последний ключ изменить lastKey
		dispatch({ type: 'remove', payload: id })
	}
	return { removeTask }
}
