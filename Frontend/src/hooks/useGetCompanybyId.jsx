import { setsingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT} from '@/utils/constant';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetCompanybyId = (cid) => {
    const dispatch=useDispatch();
 useEffect(()=>{
    const fetchSingleCompany=async ()=>{
        try {
            const res=await axios.get(`${COMPANY_API_END_POINT}/get/${cid}`,{withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setsingleCompany(res.data.company))
            }
            
        } catch (error) {
            console.log(error.message);
            
            
        }
    }
    fetchSingleCompany();
 },[cid,dispatch])
}

export default useGetCompanybyId
