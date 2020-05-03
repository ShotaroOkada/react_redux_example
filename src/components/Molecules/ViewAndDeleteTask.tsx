import React from "react"
import ListLabel from "../Atoms/ListLabel";
import Button from "../Atoms/Button";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/Tasks/ActionCreator";

type Props = {
    index: number;
    task: string;
    
}

const ViewAndDeleteTask: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const {index, task} = props;

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(deleteTask(index))
    }
    
    return (
        <div>
            <ListLabel text={task} />
            <Button label="削除" onClick={onClick} />
        </div>
        

    );
}

export default ViewAndDeleteTask;