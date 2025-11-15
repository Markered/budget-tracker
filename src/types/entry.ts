export interface Entry {
    type: 'income' | 'expense',
    title: string,
    category?: string | null,
    amount: number,
    date: string,
};