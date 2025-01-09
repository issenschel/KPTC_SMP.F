import { useState } from 'react';

import '../input.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import TextButton from './TextButton';

interface Props {
	placeholderInput: string;
	type?: string;
    maxLength?: number;
    isHasRequestButton?: boolean,
    styles?: string;
    value: string;
    handleChange: (value: string) => void;
}

export default function InputField({ placeholderInput, type = 'text', maxLength, isHasRequestButton, styles, value, handleChange }: Props) {
    const [isActive, setIsActive] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    function showPassword() {
        setIsShowPassword(!isShowPassword);
        type === 'text' ? type = 'password' : type = 'text';
    }

	return (
		<div className={`filed flex relative text-left pl-3 border rounded-xl bg-[#FAFAFC] ${styles}`}>
			<label className={`field-label ${value || isActive ? '-translate-x-6 -translate-y-3 scale-[0.7] text-[#4A88FC]' : ''}`} htmlFor='input'>{placeholderInput}</label>
			<input className="field-input relative z-10 w-full h-12 pt-3 bg-transparent focus:outline-none"
                   type={type} 
                   maxLength={maxLength}
                   placeholder='' 
                   value={value}
                   onChange={event => handleChange(event.target.value)}
                   onFocus={() => setIsActive(true)}
                   onBlur={() => setIsActive(false)}/>
            { value && 
            <div className='flex' 
                 onClick={() => handleChange('')}>
                <FontAwesomeIcon className='my-auto mx-2 h-4 w-4 text-[#B9B6CC] hover:text-gray-500' icon={faCircleXmark} />
            </div> }
            { type === 'password' && 
            <button className='p-0 pr-2 border-none text-[#B9B6CC] hover:text-zinc-500 focus:outline-none' onClick={() => showPassword()}>
                { isShowPassword ? <FontAwesomeIcon className='my-auto mx-2 h-4 w-4' icon={faEye}/> : <FontAwesomeIcon className='my-auto mx-2 h-4 w-4' icon={faEyeSlash}/> }
            </button> }
            { isHasRequestButton && 
            <div className='flex items-center pr-6'>
                <hr className='h-4 w-[1px] mx-2 bg-[#e7e8ee]'/>
                <TextButton text='Отправить' onPress={alert} />
            </div> }
		</div>
	);
}