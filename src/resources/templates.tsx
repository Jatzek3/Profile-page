import { Fragment } from "react";
import React from 'react';


export const formInputTemplate: React.FC = (field: any) => {
    return (
        <Fragment>
            <label>{field.label}</label>
            <input
                {...field.input}
            />
            {field.meta.touched && <p /*className="text-danger"*/>{field.meta.error}</p>}
        </Fragment>
    )
}
export const formSelectTemplate: React.FC = (field: any) => (
    <Fragment>
        <label>{field.label}</label>
        <select {...field.input} disabled={field.disabled}>
            {field.datas.map((data: any, i: number) => {
                return (
                    <option key={i} value={data.value}>
                        {data.label}
                    </option>
                );
            })}
        </select>
    </Fragment>

)
