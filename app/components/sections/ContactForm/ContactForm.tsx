'use client';


import { ComponentPropsWithoutRef, ReactNode } from "react";
import Container from "../../ui/Container/Container";
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import { type CircleIcon as CircleIconData } from "../../ui/CircleIcon/types";
import Form, { type Form as FormData } from "../../ui/Form/Form";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import CircleIcon from "../../ui/CircleIcon/CircleIcon";
import { submitContactRequest } from "../../lib/actions";


type ContactFormFields = {
    fullName: string,
    email: string,
    message: string
}


export type ContactFormProps = {
    sectionHeading: SectionHeadingData;
    contactDataRows: {
        icon: CircleIconData,
        content: ReactNode
    }[];
    formData: FormData<ContactFormFields>;
}
    & ComponentPropsWithoutRef<'div'>


export default function ContactForm({ sectionHeading, contactDataRows, formData }: ContactFormProps) {

    return (
        <Container>
            <div className="flex items-center flex-wrap lg:flex-nowrap gap-6">
                <div className="w-full lg:w-1/2 lg:pr-6 xxl:pr-12">
                    <SectionHeading {...sectionHeading} />

                    {Array.isArray(contactDataRows) && (
                        <ul className="mt-10 flex flex-col gap-10">
                            {contactDataRows.map((row, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <CircleIcon {...row.icon} />
                                    {row.content}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="w-full lg:w-1/2">
                    <Form className="shadow-lg mt-8 lg:mt-0 p-4 md:p-7 lg:p-9 rounded-lg border border-secondary-border"
                        {...formData}
                        onFormSubmit={(data) => submitContactRequest(data.fullName, data.email, data?.message)}
                    />
                </div>
            </div>
        </Container>
    )
}