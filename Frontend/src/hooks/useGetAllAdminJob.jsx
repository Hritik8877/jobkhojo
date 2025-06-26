
import { setAlladminJob} from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllAdminJob = () => {
    const dispatch=useDispatch();
 useEffect(()=>{
    const fetchAllAdminJobs=async ()=>{
        try {
            const res=await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setAlladminJob(res.data.data))
            }
            
        } catch (error) {
            console.log(error.message);
            
            
        }
    }
    fetchAllAdminJobs();
 },[])
}

export default useGetAllAdminJob
