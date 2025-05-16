import { Dispatch, SetStateAction } from "react";

type DateRange = {
  startDate: Date;
  endDate: Date;
  key: string;
};

export type OnChangeType = Dispatch<SetStateAction<DateRange[]>>;
