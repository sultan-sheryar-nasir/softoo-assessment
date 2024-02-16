import { Stock } from './interfaces/stock.interface';
import { Transaction } from './interfaces/transaction.interface';
import { getStock } from './services/stock.services'
import { getTransactions } from './services/transactions.service'

export async function getCurrentStockLevel(sku: string): Promise<{ sku: string, qty: number }> {
    try {
        const stockDetails: Stock[] = await getStock()
        const transactionsDetails: Transaction[] = await getTransactions()
        
        const stock: Stock | undefined = stockDetails.find(data => data.sku === sku)
        if(!stock){
            throw new Error(`${sku} Not Found - Stock`)
        }
        const transactions: Transaction[] = transactionsDetails.filter(data => data.sku === sku)

        if(!transactions){
            throw new Error(`${sku} Not Found - Transactions`)
        }
        const total: number = transactions.reduce((acc: number, curr: Transaction) => {
            return curr.type === 'order' ? acc - curr.qty : acc + curr.qty;
        }, stock.stock);

        return {sku: sku, qty: total}
    } catch (error) {
        throw error
    }
}

// Sample usage
getCurrentStockLevel("LTV719449/39/39")
  .then(stock => console.log(stock))
  .catch(error => console.error(error.message));