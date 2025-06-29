import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/Table'
import { Badge } from './ui/Badge'

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of Applied Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right" >Status</TableHead>
            
          </TableRow>

        </TableHeader>
        <TableBody>
          {
            [1,2,3,4].map((item,idx)=>(
              <TableRow key={idx}>

                <TableCell>17-07-2024</TableCell>
                <TableCell>Backend Developer</TableCell>
                <TableCell>Dell</TableCell>
                <TableCell className="text-right"><Badge>Selected</Badge></TableCell>


              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
