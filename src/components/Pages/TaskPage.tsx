import React, { useEffect } from 'react';
import TaskTemplate from '../Templates/TaskTemplate';
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/User/ActionCreator';

// ここでこのページを描画するために必要なデータを取得する
const TaskPage: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers.request({ id: "user01" }));
  })
  return (
    <TaskTemplate />
  )
}

export default TaskPage;