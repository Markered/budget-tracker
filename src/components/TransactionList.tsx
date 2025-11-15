import type { Entry } from "src/types";
import TransactionEntry from "./TransactionEntry";

export default function TransactionList() {
    const testData: Entry[] = [
        {
            type: 'income',
            title: 'Salary',
            category: 'Work',
            amount: 50000,
            date: '2025-11-01T09:00:00Z',
        },
        {
            type: 'expense',
            title: 'Groceries',
            category: 'Food',
            amount: 3500,
            date: '2025-11-02T15:30:00Z',
        },
        {
            type: 'expense',
            title: 'Electric Bill',
            category: 'Utilities',
            amount: 2200,
            date: '2025-11-05T12:00:00Z',
        },
        {
            type: 'income',
            title: 'Freelance Project',
            category: 'Side Hustle',
            amount: 12000,
            date: '2025-11-07T20:00:00Z',
        },
        {
            type: 'expense',
            title: 'Dinner Out',
            category: 'Entertainment',
            amount: 1800,
            date: '2025-11-10T19:45:00Z',
        },
        {
            type: 'income',
            title: 'Gift',
            category: null,
            amount: 5000,
            date: '2025-11-12T14:15:00Z',
        },
    ];

    return (
        <section className="TransactionList">
            {testData.map((entry, index) => (
                <TransactionEntry key={index} {...entry}/>
            ))}
        </section>
    )
}

