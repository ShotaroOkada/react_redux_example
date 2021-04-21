import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import TaskPage from './Pages/TaskPage';

export const queryClient = new QueryClient()

// ログインの画面処理や画面遷移などを記述
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskPage />
    </QueryClientProvider>
  );
}

export default App;
