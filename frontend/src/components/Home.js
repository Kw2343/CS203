import {React, useEffect, useMemo, useState} from 'react'
import AxiosInstance from './Axios'
import {MaterialReactTable,  useMaterialReactTable} from 'material-react-table';
import Dayjs from 'dayjs';
import { Box, IconButton} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import {Link} from 'react-router-dom';

const Home = () => {

  const[myData, setMydata] = useState()
  const[loading,setloading] = useState(true)

  const GetData = () => {
    AxiosInstance.get(`project/`).then((res) =>{
      setMydata(res.data)
      console.log(res.data)
      setloading(false)
    })
    

  }

  useEffect(() => {
    GetData();
  },[])

  
  
    const columns = useMemo(
  
      () => [
  
        {
  
          accessorKey: 'name', //access nested data with dot notation
  
          header: 'Name',
  
          size: 150,
  
        },
  
        {
  
          accessorKey: 'status',
  
          header: 'Status',
  
          size: 150,
  
        },
  
        {
  
          accessorKey: 'comment', //normal accessorKey
  
          header: 'Comment',
  
          size: 200,
  
        },
  
        {
  
          accessorFn:(row) => Dayjs(row.start_date).format('DD-MM-YYYY') ,
  
          header: 'Start Date',
  
          size: 150,
  
        },
  
        {
  
          accessorFn:(row) => Dayjs(row.end_date).format('DD-MM-YYYY') ,

  
          header: 'End Date',
  
          size: 150,
  
        },
  
      ],
  
      [],
  
    );
  

    


  
  return (
    <div>
      { loading ? <p>loading data ...</p>:
    <MaterialReactTable 
    columns={columns}
    data={myData} 
    enableRowActions
      renderRowActions={({row}) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
         
          <IconButton color="secondary" component={Link} to={`edit/${row.original.id}`}>
            <EditIcon />
          </IconButton>

          <IconButton color="error" component={Link} to={`delete/${row.original.id}`}>
            <DeleteIcon />
          </IconButton>
        </Box>

      )}
    
    />
      }
    </div>
  )
}

export default Home
