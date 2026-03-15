import React, { useState } from 'react'

import { X } from 'lucide-react';
const App = () => {
  const [Title, setTitle] = useState('');
  const [Details, setDetails] = useState('');
  const [Task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...Task];
    copyTask.push({ Title, Details });
    setTask(copyTask);


    //console.log(Title, Details);
    setTitle('');
    setDetails('');
  }
  const deleteNote=(idx)=>{
    const copyTask=[...Task];
    copyTask.splice(idx,1)
    setTask(copyTask);
  }

  return (
    <div className='h-screen  lg:flex w-full gap-5 bg-black text-white p-10'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex lg:w-1/2 gap-4 flex-col items-start'>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* first input */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className='px-5 w-full py-2 border-2 outline-none rounded'
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* second input */}
        <textarea
          type="text"
          placeholder="Write Details"
          className='px-5 w-full py-2 h-32 flex item-start flex-row outline-none border-2 rounded'
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className='bg-white active:bg-green-500 w-full outline-none text-black px-5 py-2 rounded'
        >Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-10 mt-5 pt-9 pb-4 h-[90%] overflow-auto'>
          {Task.map(function (elem, idx) {
            return <div key={idx} className="h-52 w-42 flex justify-between flex-col item-start text-black rounded-xl py-8  px-4 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-xl font-bold'>{elem.Title}</h3>
                <p classNAme='mt-4 leading-tight text-xs font-semi text-grey-700'> {elem.Details}</p>
              </div>
                <button onClick={deleteNote} className='w-full bg-red-500 py-1  curdor-pointer active:scale-95 text-xs rounded font-bold text-white'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
