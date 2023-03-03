import Navbar from './components/Navbar/Navbar';
import { Router } from './router/Router';
import {
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';
import { PersistQueryClientProvider, persistQueryClientRestore } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";



function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60 * 60 * 24,
        staleTime: 1000 * 60 * 60 * 24
      },
      
    },
  })

  const persister = createSyncStoragePersister({
    storage: window.localStorage,
  })

  persistQueryClientRestore({
    queryClient,
    persister,
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
    buster: '',
  })

  
  //queryClient.setQueryData(['maxId'], 1);
  // look at queryCache and https://tkdodo.eu/blog/inside-react-query - set initial value once, and further with value from cache
  
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}>
        <Navbar/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

export default App;

