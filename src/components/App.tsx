import React, { useEffect } from 'react';
import TaskPage from './Pages/TaskPage';
import { useDispatch } from 'react-redux';
import { getUsers } from '../actions/User/ActionCreator';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers.request({ id: "user01" }));
  })
  return (
    <TaskPage />
  );
}

export default App;
