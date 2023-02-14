import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';

import { AddTaskPage } from './AddTaskPage/AddTaskPage';
import { Columns } from './Columns/Columns';


export const Router = () => {
  return(
    <Container sx={{pt:9}}>
      <Routes>
        <Route path='/' element={<Columns />}/>
        <Route path='/tasks' element={<Columns />}/>
        <Route path='/add' element={<AddTaskPage />}/>
      </Routes>
    </Container>
  )
}