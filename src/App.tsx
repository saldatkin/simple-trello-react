import Navbar from './components/Navbar/Navbar';
import { Router } from './router/Router';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';

function App() {
  const queryClient = new QueryClient();

  queryClient.setQueryData(['tasks'], []);
  queryClient.setQueryData(['maxId'], 1);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}

export default App;
