export default cleanObject = (object) => {
  return Object.entries(object)
    .filter(([key, value]) => value !== undefined)
    .reduce((obj, [key, value]) => {
      obj[
        key
          .split(/(?=[A-Z])/)
          .join('_')
          .toLowerCase()
      ] = value;
      return obj;
    }, {});
};
