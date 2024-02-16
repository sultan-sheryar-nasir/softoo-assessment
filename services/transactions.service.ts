import { readFile } from 'fs/promises';
import * as path from 'path';

export async function getTransactions() {
    try {
        const transactions = await readFile(path.resolve(__dirname, '../transactions.json'), 'utf8');
        return JSON.parse(transactions)
    } catch (err) {
        throw new Error('Unable to Read Stock Document')
    }
}