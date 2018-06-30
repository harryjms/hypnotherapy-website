export const combineClasses = (...args) => {
  args = args.filter(o => o !== false || o !== null);
  return args.join(" ");
};
