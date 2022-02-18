import { useEffect, useState } from "react";
import "./App.css";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import { newTimer } from "./utils/TimerUtils";

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            project: "Intership",
            title: "Learning React",
            timer: 100000,
            isRunning: true,
            isEdit: false,
        },
        {
            id: 2,
            project: "Xagoe",
            title: "Dont Know",
            timer: 10000,
            isRunning: false,
            isEdit: false,
        },
    ]);

    useEffect(() => {
        let x = setTimeout(() => {
            const newData = data.map((timerData) => {
                if (!timerData.isRunning) return timerData;

                return {
                    ...timerData,
                    timer: timerData.timer + 1000,
                };
            });
            setData(newData);
        }, 1000);
        return () => {
            clearTimeout(x);
        };
    }, [data]);

    const handleCreateTimer = (newData) => {
        const nTimer = newTimer(newData);

        //* insert to the end of array
        // setData(data.concat(nTimer));

        //* insert to the first of array
        setData([nTimer, ...data]);
    };

    const handleToggleTimer = (id) => {
        const newData = data.map((timer) => {
            if (timer.id !== id) return timer;

            return {
                ...timer,
                isEdit: !timer.isEdit,
            };
        });

        setData(newData);
    };

    const handleToggleStartTimer = (id) => {
        const newData = data.map((timer) => {
            if (timer.id !== id) return timer;

            return {
                ...timer,
                isRunning: !timer.isRunning,
            };
        });

        setData(newData);
    };

    const handleRemoveTimer = (id) => {
        const newData = data.filter((timer) => {
            return timer.id !== id;
        });

        setData(newData);
    };

    const handleUpdateTimer = (newData) => {
        const updatedData = data.map((timer) => {
            if (timer.id !== newData.id) return timer;

            return {
                ...timer,
                isEdit: false,
                title: newData.title,
                project: newData.project,
            };
        });

        setData(updatedData);
    };

    return (
        <div className="App">
            <h1 className={"text-dark timer"}>Timers</h1>

            <ToggleableTimerForm onSubmit={handleCreateTimer}></ToggleableTimerForm>

            {data.map((timer) => {
                return (
                    <EditableTimer
                        data={timer}
                        key={timer.id}
                        onToggleTimer={handleToggleTimer}
                        onSubmit={handleUpdateTimer}
                        handleToggleStartTimer={handleToggleStartTimer}
                        handleRemoveTimer={handleRemoveTimer}
                    ></EditableTimer>
                );
            })}
        </div>
    );
}

export default App;
