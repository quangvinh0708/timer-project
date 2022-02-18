import { useState } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import style from "./index.module.scss";

const TimerForm = ({ data, onCancel, onSubmit }) => {
    const [title, setTitle] = useState(data ? data.title : "");
    const [project, setProject] = useState(data ? data.project : "");

    const handleSubmit = () => {
        onSubmit({ title, project, id: data?.id || null });
    };

    const handleSetTitle = (e) => {
        setTitle(e.target.value);
    };
    const handleSetProject = (e) => {
        setProject(e.target.value);
    };

    return (
        <div style={{ marginTop: `3%`, width: `50%`, margin: `auto` }}>
            <Input
                label="Title"
                className={style.input}
                value={title}
                onChange={handleSetTitle}
                type={"text"}
                placeholder="Title ..."
                htmlFor={"title"}
                id="title"
                classNameForLabel={style.label}
            ></Input>
            <Input
                classNameForLabel={style.label}
                label="Project"
                className={style.input}
                value={project}
                onChange={handleSetProject}
                type={"text"}
                placeholder="Project ..."
                htmlFor={"project"}
                id="project"
            ></Input>

            <div className={style.btnContainer}>
                <Button className={"btn btn-primary"} onClick={onCancel}>
                    Cancel
                </Button>
                <Button className={"btn btn-warning"} onClick={handleSubmit}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default TimerForm;
