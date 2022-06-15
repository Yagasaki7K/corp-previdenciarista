const normalize = str =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "-");

export default (city, state) => `${normalize(state)}/${normalize(city)}`;
