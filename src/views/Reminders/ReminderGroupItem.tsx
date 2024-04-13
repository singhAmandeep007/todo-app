import { FC, PropsWithChildren, useCallback } from "react";

import { TReminderGroup } from "types";

import { useAppDispatch, setQueryParams, useAppSelector, selectQueryParams, cn } from "shared";

import { DeleteButton } from "./components";

export type TReminderGroupItemProps = {
  reminderGroup?: TReminderGroup;
};

export const ReminderGroupItem: FC<PropsWithChildren<TReminderGroupItemProps>> = ({ reminderGroup }) => {
  const dispatch = useAppDispatch();

  const { groupId } = useAppSelector(selectQueryParams);

  const isSelected = groupId === reminderGroup?.id;

  const className = cn("flex flex-1 items-center justify-between py-2 cursor-pointer gap-2");

  const titleClassName = cn(isSelected && "text-primary");

  const handleOnClick = useCallback(
    (queryParams: Parameters<typeof setQueryParams>[0]) => {
      dispatch(setQueryParams(queryParams));
    },
    [dispatch]
  );

  if (!reminderGroup) {
    return (
      <div
        className={className}
        data-testid="reminder-group-item-all"
        onClick={() => handleOnClick({ groupId: undefined })}
      >
        <div className={titleClassName}>All</div>
      </div>
    );
  }

  return (
    <div
      className={className}
      data-testid={`reminder-group-item-${reminderGroup.id}`}
      onClick={() => handleOnClick({ groupId: reminderGroup.id })}
    >
      <div className={titleClassName}> {reminderGroup.name}</div>

      <DeleteButton data-testid={`delete-reminder-group-item-${reminderGroup.id}`} />
    </div>
  );
};