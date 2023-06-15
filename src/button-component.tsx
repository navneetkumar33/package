import * as React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export type buttonProps = {
    label: string
}

export function Button({ label }: buttonProps) {
    return (
        <>
           <button type="button" className="btn btn-outline-secondary">{label}</button>
        </>
    );
}