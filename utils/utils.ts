import dayjs from 'dayjs';
import { currency } from '@/next-i18next.config';

export function formatMoney(number: number, locale: string) {
  return new Intl.NumberFormat(currency[locale]?.locales, {
    style: 'currency',
    currency: currency[locale]?.currency,
  }).format(number);
}

export function stripHTML(str: string | undefined = '') {
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/ +/g, ' ')
    .trim();
}

export function removeUnicode(str: string) {
  return stripHTML(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd');
}

export function toSlug(str: string) {
  return removeUnicode(str)
    .replace(/([^0-9a-z-\s])/g, '-')
    .replace(/(\s+)/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const truncateWords = (str: string, number: number = 10) => {
  const arrayWords = stripHTML(str).trim().split(' ');
  return arrayWords.splice(0, number).join(' ') + '...';
};

export function formatDate(date: string, format?: string) {
  return dayjs(date).format(format ?? 'MMM D, YYYY');
}

export const removeEmptyParams = (obj: { [key: string]: string | undefined | null | boolean }) => {
  return Object.values(obj).filter((value: any) => !['', undefined, null].includes(value));
};
