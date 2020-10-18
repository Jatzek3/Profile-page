export const nameNormalize = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);

export const mobileNormalize = (value: string) => value.replace(/[^\d]/g, '').slice(0, 9);

// export const mobileNumber = (value: string) =>
//     value && !/^([6-9]\d{9})$/.test(value) ? 'Invalid mobile number, must be 10 digits' : undefined;
