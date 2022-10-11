import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ViewPatientTask from '../viewPatientTask/ViewPatientTask'
import ViewPatientTable from '../viewPatientTable/ViewPatientTable'
import './FetchPatientTask.scss'

export default function FetchPateintTask() {
  const [viewData, setViewData] = useState({
    COI: '',
    SubjectNumber: '',
    LotNumber: '',
  })
  const [sendingSingleData, setSendingSingleData] = useState('')
  const [error, setError] = useState('')
  const [fetchedData, setFetchedData] = useState([])
  const [fetchedPatientTask, setFetchedPatientTask] = useState([])

  useEffect(() => {
    if (!viewData.COI) {
      if (!viewData.SubjectNumber) {
        if (!viewData.LotNumber) {
        } else {
          setSendingSingleData(viewData.LotNumber)
        }
      } else {
        setSendingSingleData(viewData.SubjectNumber)
      }
    } else {
      setSendingSingleData(viewData.COI)
    }
  }, [viewData, fetchedData])

  const handleChange = (e) => {
    setViewData({ ...viewData, [e.target.name]: e.target.value })
  }

  const fetchData = async () => {
    const response = await axios.get(
      `http://localhost:8000/getSubject/${sendingSingleData}`
    )
    setFetchedData(response.data)
    try {
      fetchSubjectTask(response.data.data.SubjectID)
    } catch (error) {
      console.error('error')
    }
  }

  const fetchSubjectTask = async (id) => {
    const response = await axios.get(
      `http://localhost:8000/getSubjectTasks/${id}`
    )
    setFetchedPatientTask(response.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (sendingSingleData) {
      try {
        fetchData()
      } catch (error) {
        console.log('error')
      }
      setError('')
    } else {
      setError('*Fill Any One to View the data')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex flex-wrap gap-8  '>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            COI :{' '}
          </label>
          <input
            className='appearance-none block   text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='COI'
            value={viewData.COI}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            Subejct Number :{' '}
          </label>
          <input
            className='appearance-none block  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='SubjectNumber'
            value={viewData.SubjectNumber}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className='block  tracking-wide text-gray-700 text-xs  '>
            LOT Number :
          </label>
          <input
            className='appearance-none block  text-gray-700 border  rounded-sm py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
            name='LotNumber'
            value={viewData.LotNumber}
            onChange={handleChange}
          ></input>
        </div>
        <button
          className='text-white bg-purple-900 px-8  h-11 mt-4 rounded-sm'
          type='submit'
        >
          View
        </button>
      </div>
      <div
        className='my-5  align-center'
        style={{
          color: '#D8000C',
          backgroundColor: '#FFBABA',
          display: 'inline-block',
        }}
      >
        {error}
      </div>
      <ViewPatientTable
        subjectData={fetchedData.data}
        status={fetchedData.status}
      />
      <ViewPatientTask
        fetchedPatientTask={fetchedPatientTask.data}
        status={fetchedPatientTask.status}
      />
    </form>
  )
}
