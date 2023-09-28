import {FC} from 'react'

interface IFormField {
    labelName: string
    type: 'text' | 'password'
    name: string
    placeholder: string
    value: string
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    isSurpriseMe?: boolean
    handleSurpriseMe?: () => void
}

const FormField: FC<IFormField> = ({
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
}) => {
  return (
    <div className='mt-5'>
        <div className='flex items-center gap-2 mb-2'>
            <label 
                htmlFor={name}
                className='block text-sm font-medium text-gray-900'
            >
                {labelName}
            </label>
            {isSurpriseMe && (
                <button
                    type='button'
                    onClick={handleSurpriseMe}
                    className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'
                >
                    Surprise me
                </button>
            )}
        </div>
        <input
            type={type}
            id={name}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            required
        />
    </div>
  )
}

export default FormField