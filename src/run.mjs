import schema from "./schema.mjs";

export function validate(input) {
  const validated = schema.parse(input);
  return validated;
}

const input = {
  id: "123",
  //   youtubeid: "12345678901",
  //   pincode: "1234",
  //   email: "glenn@fddfdf.com",
};

const INPUT = validate(input);
console.log(INPUT);
