import Navbar from './components/Navbar/Navbar';
import { Router } from './router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';
import { useEffect } from 'react';

function App() {
  // const queryClient = new QueryClient();


  // queryClient.setQueryData(['tasks'], []);
  // queryClient.setQueryData(['maxId'], 1);
  
//   <QueryClientProvider client={queryClient}>
//   <Navbar/>
//   <Router/>
//   <ReactQueryDevtools initialIsOpen={false} />
// </QueryClientProvider>

  return (
    <>
      <Navbar/>
      <Router/>
    </>
  )
}

export default App;
