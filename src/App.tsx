import Navbar from './components/Navbar/Navbar';
import { Router } from './router/Router';
import {
  QueryClient,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import './App.css';
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";



function App() {
  const queryClient2 = new QueryClient({
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

  queryClient2.setQueryData(['tasks'], []);
  queryClient2.setQueryData(['maxId'], 1);

  
  return (
    <PersistQueryClientProvider
      client={queryClient2}
      persistOptions={{ persister }}>
        <Navbar/>
        <Router/>
        <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

export default App;

