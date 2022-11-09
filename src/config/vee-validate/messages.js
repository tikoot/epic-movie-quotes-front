import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json ";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: "This field is required",
        email: "This input is not in email format",
        min: "{field} must have at least 0:{min} symbols",
        max: "{field} must have at least 0:{max} symbols",
        symbols:
          "{field} must contain only lowercase Latin characters and numbers",
        confirmed: "This field must match the password field",
      },

      names: {},
    },
    ka: {
      ...ka,
      messages: {
        required: "გთხოვთ შეავსოთ მოცემული ველი",
        email: "თქვენს მიერ შეყვანილი ტექსტი არ აკმაყოფილებს მეილის ფორმატს",
        min: "{field} უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს",
        max: "{field} უნდა შეიცავდეს მაქსიმუმ 0:{min} სიმბოლოს",
        symbols:
          "{field} უნდა შეიცავდეს მხოლოდ დაბალი რეგისტრის ლათინურ სიმბოლოებს და რიცხვებს",
        confirmed: "ეს ველი უნდა შეესაბამებოდეს პაროლის ველს",
      },

      names: {
        password: "პაროლი",
        username: "მომხმარებლის სახელი",
        email: "მეილი",
      },
    },
  }),
});
