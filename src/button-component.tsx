import * as React from "react";

export type buttonProps = {
    label: string
}

export function Button({ label }: buttonProps) {
    return (
        <>
           <button>{label}</button>
        </>
    );
}