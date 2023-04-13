import { SerializedError } from "@reduxjs/toolkit";

import { AsyncData } from "~/lib/types/store";

export function setDataPending<T>(state: AsyncData<T>): AsyncData<T> {
  return {
    ...state,
    isLoading: true,
  };
}

export function setDataResult<T>(data: T): AsyncData<T> {
  return {
    error: null,
    isLoading: false,
    data,
  };
}

type DataEntity<T> = [T[keyof T], T];
type NormalisedAsyncData<T> = AsyncData<Record<string, T>>;

export function setDataResultNormalized<T>(
  state: NormalisedAsyncData<T>,
  data: T[] | T,
  key: keyof T
): NormalisedAsyncData<T> {
  let normalizedData: DataEntity<T>[];
  if (Array.isArray(data)) {
    normalizedData = data.map((item) => [item[key], item]);
  } else {
    normalizedData = [[data[key], data]];
  }

  return {
    error: null,
    isLoading: false,
    data: {
      ...state.data,
      ...Object.fromEntries(normalizedData),
    },
  };
}

export function setDataRejected<T>(
  state: AsyncData<T>,
  error: SerializedError
): AsyncData<T> {
  return {
    ...state,
    isLoading: false,
    error,
  };
}
