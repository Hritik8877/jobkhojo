import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { data } from 'autoprefixer'
import { Label } from './ui/label'


const filterData=[
{
   filterType:"Location",
   array:["Delhi Ncr","Banglore","Hydrabad","Pune","Mumbai"]
},
{
   filterType:"Intustry",
   array:["Frontend Developer","Backend Developer","FullStack Developer"]
},

{
   filterType:"Salary",
   array:["0-40k","42-1Lakh","1Lakh to 5Lakh"]
}

]
const Filtercard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filters Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data,index)=>(
            <div>
              <h1>{data.filterType}</h1>
              {
                data.array.map((item,index)=>{
                  return(
                    <div className='flex items-center space-x-2 my-2'>
                     <RadioGroupItem value={item}/>
                      <Label>{item}</Label>
                    </div>
                  )
                })
              }
            </div>
          ))
        }
      </RadioGroup>


    </div>
  )
}

export default Filtercard
