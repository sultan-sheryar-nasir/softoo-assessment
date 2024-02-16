const { getCurrentStockLevel } = require('../main');
const { Stock } = require('../interfaces/stock.interface');
const { Transaction } = require('../interfaces/transaction.interface');

describe('getStockLevel', () => {
  it('should return current stock level for existing SKU', async () => {
    expect(await getCurrentStockLevel("LTV719449/39/39")).toEqual({ sku: "LTV719449/39/39", qty: 8510 });
  });

  it('should return current stock level considering transactions', async () => {
    expect(await getCurrentStockLevel("KED089097/68/09")).toEqual({ sku: "KED089097/68/09", qty: 4842 });
  });

  it('should throw an error for non-existing SKU', async () => {
    await expect(getCurrentStockLevel("Invalid")).rejects.toThrow('Invalid Not Found - Stock');
  });
});