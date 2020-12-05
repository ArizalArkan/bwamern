export default (number) => {
  const formatnUmber = new Intl.NumberFormat("id-ID");
  return formatnUmber.format(number);
};
