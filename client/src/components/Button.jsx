import { useDispatch, useSelector } from "react-redux"

export default function Button(props) {
  const { id, text, handleClick, params } = props
  const dispatch = useDispatch()
  
  return (
    <button
      id={id}
      className='px-4 py-2 flex items-center text-white bg-blue-600 rounded-full hover:bg-blue-700 duration-150'
      onClick={() => dispatch(handleClick(...params))}>
      {text}
    </button>
  )
}