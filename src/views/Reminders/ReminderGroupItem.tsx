import { FC, PropsWithChildren, useCallback } from "react";

import { TReminderGroup } from "types";

import { Typography } from "components";

import { useAppDispatch, setQueryParams, useAppSelector, selectQueryParams, cn } from "shared";

import { DeleteButton } from "./components";

export type TReminderGroupItemProps = {
  reminderGroup?: TReminderGroup;
};

export const ReminderGroupItem: FC<PropsWithChildren<TReminderGroupItemProps>> = ({ reminderGroup }) => {
  const dispatch = useAppDispatch();

  const { groupId } = useAppSelector(selectQueryParams);

  const isSelected = groupId === reminderGroup?.id;

  const className = cn("py-2 flex items-center justify-between cursor-pointer gap-2");

  const titleClassName = cn("text-nowrap overflow-x-scroll py-2", isSelected && "text-primary");

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
        <Typography
          variant={"p"}
          className={titleClassName}
        >
          All
        </Typography>
      </div>
    );
  }

  return (
    <div
      className={className}
      data-testid={`reminder-group-item-${reminderGroup.id}`}
    >
      <Typography
        variant={"p"}
        className={titleClassName}
        onClick={() => handleOnClick({ groupId: reminderGroup.id })}
      >
        {reminderGroup.name}
      </Typography>

      <DeleteButton data-testid={`delete-reminder-group-item-${reminderGroup.id}`} />
    </div>
  );
};