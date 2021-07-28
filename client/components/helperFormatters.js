export const formatPhone = (phoneStr) => {
  let areaCode = phoneStr.slice(0, 3);
  let prefix = phoneStr.slice(3, 6);
  let line = phoneStr.slice(6);

  return `(${areaCode}) ${prefix}-${line}`;
};

export const formatAddress = (addressStr) => {
  let commaIdx = addressStr.indexOf(',');
  let lineOne = addressStr.slice(0, commaIdx);
  let lineTwo = addressStr.slice(commaIdx + 1);
  return [lineOne, lineTwo];
};

export const formatReadiness = (readinessScore) => {
  if (readinessScore < 30) return 'low';
  if (readinessScore < 45) return 'mid';
  return 'high';
};
