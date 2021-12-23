import {useState} from 'react'

const InputHook = (userInptut) => {
    const [inputValue, setInputValue] = useState(userInptut)
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const resetValue = () => {
        setInputValue('')
    }
    return [inputValue,handleChange, resetValue]
}

export default InputHook;