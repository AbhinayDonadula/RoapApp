export const capitalizeFirstLetter = (str = '') => {
  return [...str]
    .map((each, index) => {
      if (index === 0) {
        return each.toUpperCase();
      }
      return each;
    })
    .join('');
};

export const isValidEmail = email => {
  const isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; // eslint-disable-line
  return isValidEmail.test(email);
};

export const isValidPhone = phone => {
  return /^\d{3}-\d{3}-\d{4}$/.test(phone) || /^\d{10}$/;
};

export const isValidDate = date => /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date);

export const isValidZip = zip => /\b\d{5}\b/g.test(zip);

export const isValidPwd = pwd => {
  // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
  const isValidPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // eslint-disable-line
  return isValidPwd.test(pwd);
};

export const getImmigrationOptions = () => [
  { value: 'CPT', label: 'CPT' },
  { value: 'OPT', label: 'OPT' },
  { value: 'H1B', label: 'H1B' },
  { value: 'Other', label: 'Other' }
];

export const formatPhone = phone => {
  const ph = String(phone);
  if (ph.length && !ph.includes('-')) {
    return `${ph.slice(0, 3)}-${ph.slice(3, 6)}-${ph.slice(6, 10)}`;
  }
  return ph;
};
