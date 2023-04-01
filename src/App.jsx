import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({defaultOptions:{
  queries:{
    refetchOnWindowFocus:false
  }
}});

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
};

export default App;
