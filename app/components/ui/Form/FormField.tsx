import { ElementType } from "react";
import { FormElementProps, FormElementType } from "./types";
import { UseFormRegisterReturn } from "react-hook-form";


/* 

passing one of FormElementType options as generic type should automatically narrow-down props which are available in "fieldProps"
so for <FormField as="Button" fieldProps={{ ... }} /> in fieldProps there should be only props avaiable for Button component

-----

to add support for new element - please check notes at the top of ./types.ts file

*/

type FormFieldProps<E extends FormElementType> = {
    as: E,
    fieldProps: FormElementProps<E>
    registerOptions: UseFormRegisterReturn
}


export default function FormField<C extends FormElementType>({ as, fieldProps, registerOptions }: FormFieldProps<C>) {
    const FormFieldComponent = (as) as ElementType;

    return (
        <FormFieldComponent className="border border-amber-500" {...fieldProps} {...registerOptions} />
    )
}