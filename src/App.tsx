import './App.css';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Routes from './routes/routes';


function App() {
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries : {
          retry : false,
          refetchInterval: 1000 * 60,
          refetchOnWindowFocus: false
        }
      }
    }
  )
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
}

export default App;
