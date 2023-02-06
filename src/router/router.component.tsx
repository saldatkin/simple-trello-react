import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';

import { AddTask } from './add-task/add-task.component';
import { Columns } from './columns/columns.component';
import { Home } from './home/home.component';


export const Router = () => {
  return(
    <Container sx={{pt:9}}>
      <Routes>
        <Route path='/tasks' element={<Columns />}/>
        <Route path='/add' element={<AddTask />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </Container>
  )
}