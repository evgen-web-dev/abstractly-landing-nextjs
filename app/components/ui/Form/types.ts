import { ComponentProps, JSX } from "react";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";


export type FormSubmissionResponse = {
    success: boolean;
    message: string;
}



// ---------------- NOTE ABOUT ADDING SUPPORT FOR NEW ELEMENT ----------------
/*

To add support for new form-element type - add it either 
- to FormIntrinsicElements type as union option, if it's native HTML-like element
   OR
- to formCustomElementComponents object as key-value pair, if it's React component (best is to keep "key" and "value" same)

*/


// Here - there should be added form-elements which are in form of native HTML elements (exist among keys of JSX.IntrinsicElements)
export type FormIntrinsicElements = 'input' | 'textarea';



// Here - there should be added form-elements which are in form of React component
const formCustomElementComponents = {
    /*
     this feature for supporting custom components as elements to be passed as 
     form-fields-elements needs more testing and is not completed yet
    */
} as const;


// ---------------- NOTE ABOUT ADDING SUPPORT FOR NEW ELEMENT ----------------






// -------------------------------------------------------------------------------------------------------------------------------- //





/* 
Please change types from below only if you know for sure what you are doing :)

All types below are already "set-and-go" and should be "auto-extended" on the 
basis of FormIntrinsicElements and formCustomElementComponents.

*/



type FormComponentElementProps = {
    [K in keyof typeof formCustomElementComponents]: ComponentProps<typeof formCustomElementComponents[K]>
}



type FormFieldConfig<FV extends FieldValues> = {
    name: Path<FV>;
    hint?: string,
    label?: string;
    showLabel?: boolean
    registerOptions?: RegisterOptions<FV>
}



export type FormElementType = FormIntrinsicElements | keyof FormComponentElementProps



// here we automatically type-narrow props depending on form-element's type
export type FormElementProps<E extends FormElementType> = Omit<JSX.IntrinsicElements[E extends keyof JSX.IntrinsicElements ? E : never], 'value' | 'onBlur' | 'onChange'>
    | FormComponentElementProps[E extends keyof FormComponentElementProps ? E : never]



/*
Creating "FormFieldDataItem" union type consisting of BaseFormFieldData<"input"> | BaseFormFieldData<"textarea"> | ... BaseFormFieldData<"..."> via:

1. Making mapped key-value type in "{ [E in FormElementType]: BaseFormFieldData<E> }" part so intermediate result looks something like:

    // example type
    type BaseFormFieldDataMap = {
        input: BaseFormFieldData<"input">;
        textarea: BaseFormFieldData<"textarea">;
        select: BaseFormFieldData<"select">;
        .....
    }

2. Then we are getting only values from that mapped key-value type on-the-fly - by getting values via [FormElementType] keys in " [FormElementType]" part.
This works because an intermediate BaseFormFieldDataMap key-value mapped type is being made on the basis of looping through 
union options of FormElementType, so 
we can use FormElementType to get values of that mapped type via "[FormElementType]" on-the-fly;




Final FormFieldDataItem type will be a union type of BaseFormFieldData<"input"> | BaseFormFieldData<"textarea"> | ... BaseFormFieldData<"..."> options
and this type will allow automatically narrow down available options under "fieldProps" for every variable of type FormFieldDataItem.


For instance, in following array - because of the fact that for the first item "fieldElement" property is set to 'Button' - 
in "fieldProps" we will have only options only available for Button component.

const dataItems: FormFieldDataItem<*particular-form-type-definition*>[] = [
    {
        fieldElement: 'Button',
        fieldProps: {
            buttonType: 'formButton',
        },
        fieldConfig: {
            name: 'Test',
            label: 'Test button'
        }
    }
];

*/


type BaseFormFieldData<E extends FormElementType, FV extends FieldValues> = {
    fieldElement: E,
    fieldProps: FormElementProps<E>,
    /* 
    by passing type that describes the shape of particular form via FV generic - we are autmatically narrowing down values
    that can be set to fieldConfig.name
    */ 
    fieldConfig: FormFieldConfig<FV>
}


export type FormFieldDataItem<FV extends FieldValues> = { [E in FormElementType]: BaseFormFieldData<E, FV> } [FormElementType];