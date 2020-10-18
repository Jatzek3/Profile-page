export const nameNormalize = (value: string) => value && value.charAt(0).toUpperCase() + value.slice(1);

export const mobileNormalize = (value: string) => value.replace(/[^\d]/g, '').slice(0, 9);

