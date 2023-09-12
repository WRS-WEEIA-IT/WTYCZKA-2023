export const authEN = {
  mail: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 6 characters long",
    },
    maxLength: {
      value: 20,
      message: "Name must be at most 20 characters long",
    },
  },
  surname: {
    required: "Surname is required",
    minLength: {
      value: 2,
      message: "Surname must be at least 6 characters long",
    },
    maxLength: {
      value: 20,
      message: "Surname must be at most 20 characters long",
    },
  },
  phone: {
    required: "Phone number is required",
    minLength: {
      value: 9,
      message: "Phone number must be at least 9 characters long",
    },
    maxLength: {
      value: 9,
      message: "Phone number must be at most 9 characters long",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Phone number must contain only numbers",
    },
  },
  pesel: {
    required: "Pesel number is required",
    minLength: {
      value: 11,
      message: "Pesel number must be at least 11 characters long",
    },
    maxLength: {
      value: 11,
      message: "Pesel number must be at most 11 characters long",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Pesel number must contain only numbers",
    },
  },
  postalCode: {
    required: "Postal code is required",
    minLength: {
      value: 5,
      message: "Postal code must be at least 5 characters long",
    },
    maxLength: {
      value: 5,
      message: "Postal code must be at most 5 characters long",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Postal code must contain only numbers",
    },
  },
  city: {
    required: "City is required",
    minLength: {
      value: 2,
      message: "City must be at least 2 characters long",
    },
    maxLength: {
      value: 20,
      message: "City must be at most 20 characters long",
    },
  },
  street: {
    required: "Street is required",
    minLength: {
      value: 2,
      message: "Street must be at least 2 characters long",
    },
    maxLength: {
      value: 20,
      message: "Street must be at most 20 characters long",
    },
  },
};

export const authPL = {
  mail: {
    required: "Email jest wymagany",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Niepoprawny adres email",
    },
  },
  name: {
    required: "Imię jest wymagane",
    minLength: {
      value: 2,
      message: "Imię musi mieć przynajmniej 6 liter",
    },
    maxLength: {
      value: 20,
      message: "Imię musi mieć najwyżej 20 liter",
    },
  },
  surname: {
    required: "Nazwisko jest wymagane",
    minLength: {
      value: 2,
      message: "Nazwisko musi mieć przynajmniej 6 liter",
    },
    maxLength: {
      value: 20,
      message: "Nazwisko musi mieć najwyżej 20 liter",
    },
  },
  phone: {
    required: "Numer telefonu jest wymagany",
    minLength: {
      value: 9,
      message: "Numer telefonu musi mieć 9 cyfr",
    },
    maxLength: {
      value: 9,
      message: "Numer telefonu musi mieć 9 cyfr",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Numer telefonu musi mieć tylko cyfry",
    },
  },
  pesel: {
    required: "Pesel jest wymagany",
    minLength: {
      value: 11,
      message: "Pesel musi mieć 11 liter",
    },
    maxLength: {
      value: 11,
      message: "Pesel musi mieć 11 liter",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Pesel musi mieć tylko cyfry",
    },
  },
  postalCode: {
    required: "Kod pocztowy jest wymagany",
    minLength: {
      value: 5,
      message: "Kod pocztowy musi mieć 5 liter",
    },
    maxLength: {
      value: 5,
      message: "Kod pocztowy musi mieć 5 liter",
    },
    pattern: {
      value: /^[0-9]*$/,
      message: "Kod pocztowy musi mieć tylko cyfry",
    },
  },
  city: {
    required: "Miasto jest wymagane",
    minLength: {
      value: 2,
      message: "Miasto musi mieć przynajmniej 2 litery",
    },
    maxLength: {
      value: 20,
      message: "Miasto musi mieć najwyżej 20 liter",
    },
  },
  street: {
    required: "Ulica jest wymagana",
    minLength: {
      value: 2,
      message: "Ulica musi mieć przyajmniej 2 litery",
    },
    maxLength: {
      value: 20,
      message: "Ulica musi mieć najwyżej 20 liter",
    },
  },
};
