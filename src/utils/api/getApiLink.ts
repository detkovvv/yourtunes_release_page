export const getApiLink = (route: string, additionRoute?: string): string => {
    return `${route}/${additionRoute ? `/${additionRoute}` : ''}`;
};
