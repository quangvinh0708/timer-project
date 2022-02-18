import { millisecondsToHuman } from "../../utils/TimerUtils";
import Button from "../common/Button";
import style from "./index.module.scss";

const Timer = ({ data, handleToggleStartTimer, onEditToggle, handleRemoveTimer }) => {
    return (
        <div className={style.timerContainer}>
            <p className={style.title}>{data.title}</p>
            <p className={style.project}>{data.project}</p>
            <p className={style.time}>{millisecondsToHuman(data.timer)}</p>

            <div className={style.btnContainer}>
                <Button className="btn btn-primary" onClick={onEditToggle}>
                    Edit
                </Button>
                <Button
                    className="btn btn-warning"
                    onClick={() => {
                        handleRemoveTimer(data.id);
                    }}
                >
                    Remove
                </Button>
            </div>

            <Button
                className={"btn btn-secondary" + " " + style.startBtn}
                onClick={() => {
                    handleToggleStartTimer(data.id);
                }}
            >
                {data.isRunning ? "Stop" : "Start"}
            </Button>
        </div>
    );
};

export default Timer;
