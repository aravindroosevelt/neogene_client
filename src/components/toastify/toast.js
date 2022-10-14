import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from '../../store/features/toastSlice'

function Toast() {
  let selector = {
    success: {
      color: 'green',
      header: 'Success',
    },
    warn: {
      color: 'yellow',
      header: 'Warning',
    },
    error: {
      color: 'red',
      header: 'Error',
    },
  }

  const dispatch = useDispatch()
  const data = useSelector((state) => state.toast)

  console.log(data)

  return (
    data &&
    data.type && (
      <div className={`flex flex-col justify-center absolute right-1 top-1`}>
        <div
          className={`bg-${
            selector[data?.type]['color']
          }-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3`}
        >
          <div
            className={`bg-${
              selector[data?.type]['color']
            }-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-${
              selector[data?.type]['color']
            }-500 rounded-t-lg`}
          >
            <p className={`font-bold text-white flex items-center`}>
              {selector[data?.type]['header']}
            </p>
            <strong
              class='text-xl align-center cursor-pointer alert-del text-white'
              onClick={() => dispatch(toast.close())}
            >
              &times;
            </strong>
          </div>
          <div
            className={`p-3 bg-${
              selector[data?.type]['color']
            }-600 rounded-b-lg break-words text-white`}
          >
            {data?.msg}
          </div>
        </div>
      </div>
    )
  )
}

export default Toast
