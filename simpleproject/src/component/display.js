import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { gettingDataFromServer } from '../slice/tasksSlice';

const Display = () => {
    let {tasksList}=useSelector((state)=>state.tasks);
    let dispatch=useDispatch();
    let [nextval,setNextVal]=useState(0);
    let [preval,setPreval]=useState(0);
    useEffect(()=>{
         let task=0
        dispatch(gettingDataFromServer(task));
    },[])

    useEffect(()=>{
        dispatch(gettingDataFromServer(nextval));
     },[nextval])

    let nextpage=()=>{

         setNextVal(nextval+5);
    }
    let previouspage=()=>{
        setNextVal(nextval-5)
        
    }
  return (
    <div>
        {
            tasksList.map((task,index)=>{
                return(
                    <div>
                    <h1>{` ${task.id} ${task.title}`}</h1>
                    <h6>{task.body}</h6>
                    </div>
                   )
              })
        }

      <button onClick={previouspage}>Previouspage</button>
      <button onClick={nextpage}>Nextpage</button>
                    
    </div>
  )
}

export default Display;