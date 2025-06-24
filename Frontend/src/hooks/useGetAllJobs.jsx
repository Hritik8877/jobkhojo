import { setAlljobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch=useDispatch();
 useEffect(()=>{
    const fetchAllJobs=async ()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/get`,{withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setAlljobs(res.data.data))
            }
            
        } catch (error) {
            console.log(error.message);
            
            
        }
    }
    fetchAllJobs();
 },[])
}

export default useGetAllJobs
