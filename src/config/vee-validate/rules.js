import { defineRule } from "vee-validate";
import { required, email, min, max, confirmed } from "@vee-validate/rules";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);
defineRule("max", max);
defineRule("confirmed", confirmed);
defineRule("symbols", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-z0-9_.]+$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("english_alphabet", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[a-zA-Z_. ]+$/.test(value)) {
    return false;
  }
  return true;
});

defineRule("georgian_alphabet", (value) => {
  if (!value || !value.length) {
    return true;
  }
  if (!/^[ა-ჰ_. ]+$/.test(value)) {
    return false;
  }
  return true;
});
