'use client';


import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormFieldDataItem, FormSubmissionResponse } from "./types";
import FormField from "./FormField";
import { ComponentPropsWithoutRef, ReactNode, useEffect, useId, useRef, useState } from "react";
import Button from "../Button/Button";



export type Form<FV extends FieldValues> = {
  fields: FormFieldDataItem<FV>[],
  submitButtonData?: {
    caption?: string
    cssClasses?: string
  },
  onFormSubmit?: (data: FV) => Promise<FormSubmissionResponse>;
  formContainerClass?: string,
  fieldsContainerClass?: string,
}


export type FormProps<FV extends FieldValues> = Form<FV> & ComponentPropsWithoutRef<'div'>


export default function Form<FV extends FieldValues>({ fields, submitButtonData, onFormSubmit: onFormSubmit, fieldsContainerClass, formContainerClass, className }: FormProps<FV>) {

  const formId = useId();

  const [loadingResponse, setLoadingResponse] = useState<boolean>(false);
  const [submissionResponse, setSubmissionResponse] = useState<FormSubmissionResponse>({
    message: '', success: false
  });


  const responseMsgRef = useRef<HTMLDivElement | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FV>();

  const onSubmit: SubmitHandler<FV> = (data) => {
    setLoadingResponse(true);

    if (onFormSubmit) {
      const signUpRes = onFormSubmit(data);

      signUpRes.then((res) => {
        setSubmissionResponse(res)
        setLoadingResponse(false);

        setTimeout(() => {
          setSubmissionResponse(prev => ({ ...prev, message: '' }))
        }, 5000)
      });
    }
  };


  useEffect(() => {
    if (responseMsgRef.current && submissionResponse.message) {

      const toScrollDown = responseMsgRef.current.getBoundingClientRect().top > (document.documentElement.clientHeight / 2);

      // scrolling down a bit only in case when response message is in lower
      window.scrollTo({
        top: window.scrollY + (document.documentElement.clientHeight / 3 * (toScrollDown ? 1 : 0)),
        behavior: 'smooth'
      });
    }
  }, [submissionResponse]);



  return (
    <div className={"" + (className ? ' ' + className : '')}>
      <form className={formContainerClass} id={formId} onSubmit={handleSubmit(onSubmit)}>
        {
          fields && <div className={"grid max-md:grid-cols-1 max-md:w-full" + (fieldsContainerClass ? (" " + fieldsContainerClass) : "")}>
            {
              fields.map((field, index) => (
                <FormField
                  formId={formId}
                  label={field.fieldConfig.label}
                  hintMessage={field.fieldConfig.hint}
                  showLabel={field.fieldConfig.showLabel}
                  errorMessage={errors[field.fieldConfig.name]?.message?.toString() || ''}
                  key={index}
                  as={field.fieldElement}
                  fieldProps={{ ...field.fieldProps }}
                  registerOptions={{ ...register(field.fieldConfig.name, (field.fieldConfig.registerOptions || {})) }}
                  maxLen={typeof field.fieldConfig.registerOptions?.maxLength === 'number' ? field.fieldConfig.registerOptions?.maxLength : field.fieldConfig.registerOptions?.maxLength?.value}
                  className={field.cssClassName}
                />
              ))
            }
          </div>
        }

        <Button title="Submit" styleType="primary" buttonType="formButton" actionType="submit" className={"!inline-flex items-center gap-2" + (submitButtonData?.cssClasses ? ' ' + submitButtonData?.cssClasses : '')}>
          <span>{submitButtonData?.caption ?? 'Submit'}</span>
          <svg className={"size-4 animate-spin text-white " + (loadingResponse ? 'block' : 'hidden')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </Button>

      </form>

      {submissionResponse.message && (
        <div ref={responseMsgRef} className={"w-full border py-2 px-4 rounded mt-5 text-center " + (
          submissionResponse.success ? 'border-emerald-500 bg-emerald-100' : 'border-red-500 bg-red-100'
        )}>{submissionResponse.message}</div>
      )}

    </div>
  )
}