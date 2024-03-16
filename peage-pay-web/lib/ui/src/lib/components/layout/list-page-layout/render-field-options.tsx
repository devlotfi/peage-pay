/* eslint-disable @typescript-eslint/no-explicit-any */
export const renderFieldOptions = <T extends { [key: string]: string }>(
  enumObj: T,
) => {
  return (
    <>
      {Object.keys(enumObj).map((key) => {
        const keyValue = enumObj[key as keyof T];
        return (
          <option key={keyValue} value={keyValue}>
            {keyValue}
          </option>
        );
      })}
    </>
  );
};
