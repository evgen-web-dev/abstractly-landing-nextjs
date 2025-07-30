'use client';


import { ComponentPropsWithoutRef } from "react"
import { type SectionHeading as SectionHeadingData } from "../../ui/SectionHeading/types";
import Form, { type Form as FormData } from "../../ui/Form/Form";
import { type Image as ImageData } from "../../ui/types";
import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import IconList from "../../ui/IconList/IconList";
import Image from "next/image";
import { signUpUserToUpdates } from "../../lib/actions";



type UpdatesSubscriptionForm = {
    email: string;
}


export type SubscribeToUpdatesProps = {
    sectionHeading: SectionHeadingData;
    listItems: string[];
    formData: FormData<UpdatesSubscriptionForm>;
    image: ImageData
} & ComponentPropsWithoutRef<'div'>


export default function SubscribeToUpdates({ sectionHeading, listItems, formData, image, className }: SubscribeToUpdatesProps) {

    return (
        <Container className={className}>
            <div className="flex flex-wrap lg:flex-nowrap gap-4 items-center">
                <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-20">
                    <SectionHeading {...sectionHeading} />
                    <IconList listItems={listItems} className="mt-10 lg:mt-14" />
                    <Form className="lg:max-w-[420px] mt-13" 
                        {...formData}
                        onFormSubmit={(data) => signUpUserToUpdates(data.email)}
                    />
                </div>

                <div className="w-full lg:w-1/2 max-lg:mt-10">
                    <Image className="rounded-md" {...image} quality={100} />
                </div>
            </div>
        </Container>
    )
}