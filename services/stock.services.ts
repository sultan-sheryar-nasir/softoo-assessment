import { readFile } from 'fs/promises';
import * as path from 'path';

export async function getStock() {
    try {
        const stocks = await readFile(path.resolve(__dirname, '../stock.json'), 'utf8');
        return JSON.parse(stocks)
    } catch (err) {
        throw new Error('Unable to Read Stock Document')
    }
}