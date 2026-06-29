export function beautifyJson(json) {
  return JSON.stringify(JSON.parse(json), null, 2);
}

export function minifyJson(json) {
  return JSON.stringify(JSON.parse(json));
}

export function validateJson(json) {
  JSON.parse(json);
  return true;
}
