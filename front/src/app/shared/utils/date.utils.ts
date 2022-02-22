import {
  add,
  format,
  isValid,
  parse,
  sub,
  getMonth,
  getDay,
  getYear,
  differenceInYears,
} from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

/**
 * Vérifie si une date (Date ou string) est valide
 * @param date valeur à vérifier
 */
export const isDateValid = (date: Date | string): boolean => {
  if (date) {
    return typeof date === 'string'
      ? isValid(parseStringToDate(date))
      : isValid(date);
  } else {
    return false;
  }
};

/**
 * Transfmorme un string en date
 * @param value valeur à transformer
 */
export const parseStringToDate = (value: string): Date =>
  parse(value, 'dd/MM/yyyy', new Date());

/**
 * Formate une date en string (dd/MM/yyyy/HH:mm)
 * @param date valeur à formater
 */
export const formatToDateWithSlashAndHours = (date: Date): string =>
  format(date ?? Date.now(), 'dd-MM-yyyy HH:mm');

/**
 * Formate une date en string (dd/MM/yyyy)
 * @param date valeur à formater
 */
export const formatToDateWithSlash = (date: Date): string =>
  format(date ?? Date.now(), 'dd/MM/yyyy');

export const formatToISODate = (date: Date): string =>
  format(date, 'YYYY-MM-DD');

/**
 * Soustrait un nombre une unite a une date
 * @param date date de laquelle on veut soustraire des annees
 * @param element unite a retirer
 * @param number le nombre d'unite que l'on veut soustraire a la date
 */
export const subtractElementToDate = (
  date: Date,
  element: string,
  number: number
): Date => {
  let dateReturned = new Date();
  switch (element) {
    case 'year':
      dateReturned = sub(date, {
        years: number,
      });
      break;
    case 'month':
      dateReturned = sub(date, {
        months: number,
      });
      break;
    case 'day':
      dateReturned = sub(date, {
        days: number,
      });
      break;
    case 'minutes':
      dateReturned = sub(date, {
        minutes: number,
      });
      break;
  }
  return dateReturned;
};

/**
 * Set une timezone à partir d'une date et d'une zone données
 * @param date
 * @param timeZone
 */
export const utcDate = (date: Date, timeZone: string): Date =>
  zonedTimeToUtc(date, timeZone);

/**
 * format une date passer précédamment en timezone
 * @param zonedDate
 * @param pattern
 */
export const formatZonedDate = (zonedDate: Date, pattern: string): string =>
  format(zonedDate, pattern);

/**
 * Ajoute un nombre d heure a une date
 * @param date
 * @param hours
 */
export const addHourstoDate = (date: Date, hours: number): Date =>
  add(date, {
    hours: hours,
  });

/**
 * Retourne le jour, le mois ou l'annee d'une date passee en pram
 * @param date
 * @param element string definissant si on retourne le jour, le mois, ou l'annee
 */
export const getElementOfDate = (date: Date, element: string): number => {
  if (element === 'day') {
    return getDay(date);
  } else if (element === 'month') {
    getMonth(date);
  } else if (element === 'year') {
    return getYear(date);
  }
  return 0;
};

/**
 * Retourne le nombre d'année d'écart entre 2 années
 * @param later La date la plus ancienne
 * @param earlier la date la plus récente
 */
export const diffInYearsToDate = (earlier: Date, later: Date): number =>
  differenceInYears(earlier, later);
