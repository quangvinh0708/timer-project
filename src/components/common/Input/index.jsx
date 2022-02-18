import React from "react";

const Input = ({ label, htmlFor, classNameForLabel, ...props }) => {
    return (
        <form style={{ textAlign: "left" }}>
            <label
                className={classNameForLabel}
                htmlFor={htmlFor}
                style={{ textAlign: `left !important` }}
            >
                {label}
            </label>
            <input {...props} />
        </form>
    );
};

export default Input;
