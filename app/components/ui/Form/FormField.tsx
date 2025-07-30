'use client';


import { ChangeEvent, ElementType, useCallback, useRef, useState } from "react";
import { FormElementProps, FormElementType } from "./types";
import { UseFormRegisterReturn } from "react-hook-form";
import { hasNumericValue } from "@/app/utils/utils";


/* 

passing one of FormElementType options as generic type should automatically narrow-down props which are available in "fieldProps"
so for <FormField as="Button" fieldProps={{ ... }} /> in fieldProps there should be only props avaiable for Button component

-----

to add support for new element - please check notes at the top of ./types.ts file

*/

type FormFieldProps<E extends FormElementType> = {
    as: E,
    fieldProps: FormElementProps<E>
    registerOptions: UseFormRegisterReturn,
    errorMessage: string,
    formId: string,
    hintMessage?: string,
    label?: string,
    showLabel?: boolean,
    maxLen?: number,
    className?: string
}


export default function FormField<C extends FormElementType>({ as, fieldProps, registerOptions, errorMessage, formId, label, showLabel = true, hintMessage, maxLen, className }: FormFieldProps<C>) {
    const FormFieldComponent = (as) as ElementType;


    const fieldId = useRef(formId + '-' + registerOptions.name);
    const fieldRef = useRef<HTMLElement | null>(null);

    const [textLength, setTextLength] = useState<number | null>(maxLen ? 0 : null);
    

    const {
        ref: refFn, // to get reference to input object so we could get its text length
        onChange: onChangeFn, // to get access to onChange event that react-hook-form assigns so we know when to perform a check for input's text length
        ...restOptions 
    } = registerOptions;

    

    const refCallback = useCallback(
        function (el: HTMLElement | null) {
            fieldRef.current = el; // saving to our fieldRef variable
            refFn(el); // calling React Hook Form's ref() fn so it gets reference to input and attaches its needed behavior
        },
        [refFn]
    );

    const onChangeCallback = useCallback(
        function (event: ChangeEvent) {
            if (fieldRef.current instanceof HTMLInputElement || fieldRef.current instanceof HTMLTextAreaElement)
                setTextLength(fieldRef.current.value.length);
            else setTextLength(null);

            onChangeFn(event);
        },
        [onChangeFn]
    );


    return (
        <div className={"form-field" + (errorMessage ? ' form-field--error' : '') + (className ? ' ' + className : '')}>
            {label && <label className={"form-field__label" + (showLabel ? '' : ' css-clip')} htmlFor={fieldId.current}>{label}</label>}

            <FormFieldComponent onChange={onChangeCallback} ref={refCallback} id={fieldId.current} className="form-field__el" {...(fieldProps || {})} {...(restOptions || {})} />

            <div className="form-field__bottom">
                <div className="flex flex-col">
                    {errorMessage && <p className="form-field__error-msg">{errorMessage}</p>}
                    {(hintMessage && !errorMessage) && <p className="form-field__hint-msg">{hintMessage}</p>}
                </div>
                {(hasNumericValue(maxLen, textLength)) && <span className="form-field__max-len">{textLength}/{maxLen}</span>}
            </div>
        </div>
    )
}