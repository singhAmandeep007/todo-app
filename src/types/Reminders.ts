export const REMINDER_STATE = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
} as const;

export type TReminderState = (typeof REMINDER_STATE)[keyof typeof REMINDER_STATE];

export type TReminder = {
  id: string;
  title: string;
  state: TReminderState;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
  group?: TReminderGroup;
};

export type TReminderGroup = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type TMessageResponsePaylaod = {
  message: string;
};

export type TDataResponsePayload<T> = {
  data: T;
};

/**
 * Error
 */
export type THTTPError = {
  message: string;
};

/**
 * Reminder
 */
export type TGetRemindersQueryParams = Partial<{
  groupId: TReminderGroup["id"];
  state: TReminder["state"];
}>;

export type TGetRemindersResponsePayload = TDataResponsePayload<TReminder[]>;

export type TGetReminderRequestPayload = TReminder["id"];

export type TGetReminderResponsePayload = TDataResponsePayload<TReminder>;

export type TCreateReminderRequestPayload = Pick<TReminder, "title"> & Partial<{ groupId: TReminderGroup["id"] }>;

export type TCreateReminderResponsePayload = TDataResponsePayload<TReminder>;

export type TUpdateReminderRequestPayload = Pick<TReminder, "id"> &
  Partial<Pick<TReminder, "title" | "state" | "isPinned"> & { groupId: TReminderGroup["id"] }>;

export type TUpdateReminderResponsePayload = TDataResponsePayload<TReminder>;

export type TDeleteReminderRequestPayload = TReminder["id"];

export type TDeleteReminderResponsePayload = TMessageResponsePaylaod;

/**
 * Reminder Group
 */
export type TGetReminderGroupsResponsePayload = TDataResponsePayload<TReminderGroup[]>;

export type TGetReminderGroupRequestPayload = TReminderGroup["id"];

export type TGetReminderGroupResponsePayload = TDataResponsePayload<TReminderGroup>;

export type TCreateReminderGroupRequestPayload = Pick<TReminderGroup, "name">;

export type TCreateReminderGroupResponsePayload = TDataResponsePayload<TReminderGroup>;

export type TUpdateReminderGroupRequestPayload = Pick<TReminderGroup, "id"> & Partial<Pick<TReminderGroup, "name">>;

export type TUpdateReminderGroupResponsePayload = TDataResponsePayload<TReminderGroup>;

export type TDeleteReminderGroupRequestPayload = TReminderGroup["id"];

export type TDeleteReminderGroupResponsePayload = TMessageResponsePaylaod;