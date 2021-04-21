import React from 'react';
import { useSelector } from 'react-redux';
import RootState from '../../states';
import Label from '../Atoms/Label';
import ListLabel from '../Atoms/ListLabel';
import GridArea from '../../styles/GridArea';
import { queryClient } from '../App';
import { AxiosResponse } from 'axios';
import UserModel from '../../apis/User/Model';

type Props = {
  area: string
}
const ProfileArea: React.FC<Props> = (props) => {
  const { area } = props;

  const getUserCash: AxiosResponse<UserModel> | undefined = queryClient.getQueryData("user")
  const user: UserModel | undefined = getUserCash?.data

  const tasks = useSelector<RootState, RootState['tasks']>(state => state.tasks);
  if (user) {
    return (
      <GridArea area={area}>
        <Label text={`Name: ${user.name}`} />
        <Label text={`Age: ${user.age}`} />
        <Label text="Tasks:" />
        {tasks.map((task, index) => {
          return <ListLabel key={task + index} text={task} />
        })}
      </GridArea>
    )
  } else {
    return (
      <GridArea area={area}>
        <Label text="login failed" />
      </GridArea>
    )
  }
}

export default ProfileArea;