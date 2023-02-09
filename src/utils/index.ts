export const onSuccess = (data: any) => {
  console.log("Perform side effect after data fetching", data);
};

export const onError = (error: any) => {
  console.log("Perform side effect after ecountering error", error);
};
