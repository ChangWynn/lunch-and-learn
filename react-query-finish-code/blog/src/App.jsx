import { Posts } from "./Posts";
import "./css/App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Blog &apos;em Ipsum</h1>
        <Posts />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
