export {};

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: { client_id: string; callback: (response: any) => void }) => void;
          prompt: (callback?: (notification: google.accounts.id.PromptMomentNotification) => void) => void;
        };
      };
    };
  }

  namespace google.accounts.id {
    interface PromptMomentNotification {
      isNotDisplayed: () => boolean;
      isSkippedMoment: () => boolean;
      isDismissedMoment: () => boolean;
    }
  }
}
