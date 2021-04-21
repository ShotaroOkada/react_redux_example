import React from 'react';
import TaskTemplate from '../Templates/TaskTemplate';
import { useQuery } from 'react-query';
import { getUserApi, GetUserParam } from '../../apis/User/GetUserApi';

// ここでこのページを描画するために必要なデータを取得する
const TaskPage: React.FC = () => {
  const getUserParam: GetUserParam = { id: "user01" }
  useQuery("user", async () => getUserApi(getUserParam))
  return (
    <TaskTemplate />
  )
}

export default TaskPage;