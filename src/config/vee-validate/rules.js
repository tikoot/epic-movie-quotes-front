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
  if (!/^[a-z0-9]+$/.test(value)) {
    return false;
  }
  return true;
});
