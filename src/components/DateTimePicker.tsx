import * as React from "react";
import { format, set } from "date-fns";
import { Clock } from "lucide-react";

import { Input, Label } from "components";

import { Calendar, TCalendarProps } from "./Calendar";

type TTime = `${string}:${string}`;

const TimeField = ({
  time,
  onChange,
  disabled = false,
}: {
  time: TTime;
  onChange?: (value: TTime) => void;
  disabled?: boolean;
}) => {
  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      onChange?.(value as TTime);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="time">Select time :</Label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 end-0 top-0 flex items-center pe-3.5">
          <Clock size={16} />
        </div>
        <Input
          id="time"
          type="time"
          className="block min-w-[calc(100%-1rem)] max-md:flex"
          value={time}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export type TDateTimePickerProps = {
  date?: Date;
  withTime?: boolean;
  isLoading?: boolean;
  isErrored?: boolean;
  children?: ({ selectedDateTime }: { selectedDateTime?: Date }) => React.ReactNode;
} & TCalendarProps;

export function DateTimePicker({
  date,
  withTime = true,
  isLoading = false,
  isErrored = false,
  children,
  ...props
}: TDateTimePickerProps) {
  const [selectedDateTime, setSelectedDateTime] = React.useState<TDateTimePickerProps["date"]>(date);

  const handleTimeChange = React.useCallback(
    (time: TTime) => {
      const hours = Number.parseInt(time.split(":")[0] || "00", 10);
      const minutes = Number.parseInt(time.split(":")[1] || "00", 10);
      if (selectedDateTime) {
        setSelectedDateTime(set(selectedDateTime, { hours, minutes }));
      }
    },
    [selectedDateTime]
  );

  const handleDateChange = React.useCallback(
    (v: Date | undefined) => {
      if (v instanceof Date) {
        const modifiedDate = set(selectedDateTime || new Date(), {
          date: v.getDate(),
          month: v.getMonth(),
          year: v.getFullYear(),
        });

        setSelectedDateTime(modifiedDate);
      }
    },
    [selectedDateTime]
  );

  const isDisabled = () => {
    return isLoading;
  };

  return (
    <div className=" flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Calendar
          showOutsideDays={false}
          mode="single"
          selected={selectedDateTime}
          // @ts-ignore
          onSelect={handleDateChange}
          defaultMonth={selectedDateTime ? selectedDateTime : new Date()}
          initialFocus
          required
          fromDate={new Date()}
          disabled={isDisabled()}
          className="p-0"
          {...props}
        />
        {withTime && selectedDateTime && (
          <TimeField
            time={format(selectedDateTime, "HH:mm") as TTime}
            onChange={handleTimeChange}
            disabled={isDisabled()}
          />
        )}
      </div>

      {typeof children === "function" && children({ selectedDateTime })}
    </div>
  );
}
