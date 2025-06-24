import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table'
import { Avatar, AvatarImage } from '../ui/Avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover'
import { Edit2, MoreHorizontal } from 'lucide-react'

const CompaniesTable = () => {
  return (
    <div>
      
      <Table>
        <TableCaption>A List of your recent registered companies</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Logo</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead classsName="text-right">Action</TableHead>

            </TableRow>
        </TableHeader>
        <TableBody>
            <TableCell>
                <Avatar>
                    <AvatarImage src="https://static.vecteezy.com/system/resources/previews/019/466/990/non_2x/dell-logo-on-white-background-free-vector.jpg"/>
                </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>18-07-2024</TableCell>
            <TableCell classsName="text-right cursor-pointer">
                <Popover>
                    <PopoverTrigger> <MoreHorizontal/> </PopoverTrigger>
                    <PopoverContent classsName="w-32">
                        <div className='flex items-center gap-2 w-fit cursor-pointer'>
                            <Edit2 className='w-4'/>
                            <span>Edit</span>
                        </div>
                         
                    </PopoverContent>
                </Popover>
            </TableCell>
        </TableBody>
      </Table>

    </div>
  )
}

export default CompaniesTable
