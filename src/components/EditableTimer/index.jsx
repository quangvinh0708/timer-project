import Timer from "../Timer";
import TimerForm from "../TimerForm";

const EditableTimer = ({
    data,
    onToggleTimer,
    onSubmit,
    handleToggleStartTimer,
    handleRemoveTimer,
    ...props
}) => {
    const isEdit = data.isEdit;

    const handleToggle = () => {
        onToggleTimer(data.id);
    };

    const handleSubmitTimer = (data) => {
        onSubmit(data);
    };

    if (isEdit) {
        return (
            <div style={{ marginTop: `8%` }}>
                <TimerForm
                    data={data}
                    onCancel={handleToggle}
                    onSubmit={handleSubmitTimer}
                ></TimerForm>
            </div>
        );
    }

    return (
        <div style={{ marginTop: `-50px` }}>
            <Timer
                data={data}
                handleToggleStartTimer={handleToggleStartTimer}
                onEditToggle={handleToggle}
                handleRemoveTimer={handleRemoveTimer}
            ></Timer>
        </div>
    );
};

export default EditableTimer;
