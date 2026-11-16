import type { PostConfirmationTriggerHandler } from 'aws-lambda';

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log('User confirmed:', event.request.userAttributes.email);
  return event;
};
