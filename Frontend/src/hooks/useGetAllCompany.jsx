import { setcompanies} from '@/redux/companySlice';
import { COMPANY_API_END_POINT} from '@/utils/constant';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllCompany = () => {
    const dispatch=useDispatch();
 useEffect(()=>{
    const fetchCompany=async ()=>{
        try {
            const res=await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials:true});
            console.log(res.data);
            
            if(res.data.success){
                dispatch(setcompanies(res.data.companies))
            }
            
        } catch (error) {
            console.log(error.message);
            
            
        }
    }
    fetchCompany();
 },[])
}

export default useGetAllCompany
