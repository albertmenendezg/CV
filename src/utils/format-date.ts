import i18n from '../i18n';

const t = (key: string): string => (i18n as any).t(key);

export const formatDate = (date: Date | "Present") => {
    if (date === "Present") return t('experience.present');

    const monthKeys = [
        "months.jan", "months.feb", "months.mar", "months.apr",
        "months.may", "months.jun", "months.jul", "months.ago",
        "months.sep", "months.oct", "months.nov", "months.dec"
    ];

    const month = t(monthKeys[date.getUTCMonth()]);
    return month + ' ' + date.getFullYear();
}