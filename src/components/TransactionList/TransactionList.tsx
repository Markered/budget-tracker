import type { Entry } from "src/types";
import '@styles/TransactionList.scss'
import { Suspense } from "react";
import React from "react";
import TransactionEntrySkeleton from "../skeleton/TransactionEntrySkeleton";
import TransactionListDate from "./TransactionListDate";

export default function TransactionList() {
    const TransactionEntry = React.lazy(() => import("./TransactionEntry"));

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
        {
            type: 'income',
            title: 'Test',
            category: null,
            amount: 5000,
            date: '2025-11-12T13:15:00Z',
        },
    ];

    const formattedData = testData.reduce<Record<string, Entry[]>>((acc, tx) => {
        const date = tx.date.split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(tx);
        return acc;
    }, {});

    return (
        <section className="TransactionList">
            {Object.keys(formattedData).map((date, index) => (
                <div key={index}>
                    <TransactionListDate date={date}/>
                    {formattedData[date].map((entry, i) => (
                        <Suspense fallback={<TransactionEntrySkeleton />}>
                            <TransactionEntry key={i} {...entry} />
                        </Suspense>
                    ))}
                </div>
            ))}
        </section>
    )
}
