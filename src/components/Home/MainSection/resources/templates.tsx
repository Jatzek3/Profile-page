import { Fragment } from "react";
import React from 'react';

import { FormGroup, Input, Label } from 'reactstrap';


export const formInputTemplate: React.FC = (field: any) => {
    return (
        <FormGroup>
            <Label>{field.label}</Label>
            <Input
                {...field.input}
            />
            {field.meta.touched && <p className="text-danger">{field.meta.error}</p>}
        </FormGroup>
    )
}
export const formSelectTemplate: React.FC = (field: any) => (
    <Fragment>
        <Label>{field.label}</Label>
        <Input type="select" name="select" id="exampleSelect">
            {field.datas.map((data: any, i: number) => {
                return (
                    <option key={i} value={data.value}>
                        {data.label}
                    </option>
                );
            })}
        </Input>
    </Fragment>

)
