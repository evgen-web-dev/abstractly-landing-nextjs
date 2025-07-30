'use server';

import { FormSubmissionResponse } from "../ui/Form/types";

// mock action
export async function signUpUserToUpdates(email: string): Promise<FormSubmissionResponse> {
    let response: FormSubmissionResponse = {
        success: false,
        message: 'Something went wrong. Please try again.'
    };

    if (email.trim()) {
        response.success = true;
        response.message = 'You successfully subscribed to updates!'
    }

    await new Promise((resolve, _) => setTimeout(resolve, 3000));

    return response;
}