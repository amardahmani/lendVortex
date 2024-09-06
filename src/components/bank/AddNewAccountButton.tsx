import React from 'react'


interface addNewAccountButtonProps {
    onClick: () => void;
}
const AddNewAccountButton:React.FC<addNewAccountButtonProps> = ({onClick}) => {
  return (
    <button
    onClick={onClick}
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mb-5"
    >
    Link Account
  </button>
  )
}

export default AddNewAccountButton