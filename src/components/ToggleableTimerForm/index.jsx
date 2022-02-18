import { useState } from "react";
import Button from "../common/Button";
import TimerForm from "../TimerForm";
import style from "./index.module.scss";

const ToggleableTimerForm = ({ onSubmit }) => {
    const [isRenderForm, setIsRenderForm] = useState(false);

    const handleToggleForm = () => {
        setIsRenderForm(!isRenderForm);
    };

    const handleSubmit = (data) => {
        onSubmit(data);
        handleToggleForm();
    };

    if (isRenderForm)
        return <TimerForm onCancel={handleToggleForm} onSubmit={handleSubmit}></TimerForm>;

    return (
        <Button onClick={handleToggleForm} className={"btn-info " + style.addBtn}>
            +
        </Button>
    );
};

export default ToggleableTimerForm;
