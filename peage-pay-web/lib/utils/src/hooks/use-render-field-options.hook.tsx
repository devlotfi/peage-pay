import { useTranslation } from 'react-i18next';

const useRenderFieldOptions = () => {
  const { t } = useTranslation();

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const renderFieldOptions = <T extends { [key: string]: string }>(
    enumObj: T,
  ) => {
    return (
      <>
        {Object.keys(enumObj).map((key) => {
          const keyValue = enumObj[key as keyof T];
          return (
            <option key={keyValue} value={keyValue}>
              {t(keyValue)}
            </option>
          );
        })}
      </>
    );
  };

  return {
    renderFieldOptions,
  };
};

export default useRenderFieldOptions;
