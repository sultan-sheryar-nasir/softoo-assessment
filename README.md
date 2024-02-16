# softoo-assessment
Node JS assessment provided by SOFTOO

## Assessment

You are given two json files:
 - stock.json: contains objects which represent the starting stock levels for given SKUS
 - transactions.json: contains an array of transactions since the stock levels were recorded in `stock.json`
The objective is to create a function which is able to return the current stock levels for a given SKU by combining the data in these two files. These are the requirements.
- The function must match the following signature: `(sku: string) => Promise<{ sku: string, qty: number }>`.
- The function must read from the `stock` and `transactions` files on each invocation (totals cannot be precomputed)
- The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file
- All code must be adequately tested
Notes:
- Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity for these is 0.
- Functionality can be split into many files to help keep the project clear and organised 

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/sultan-sheryar-nasir/softoo-assessment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd softoo-assessment
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## Usage

1. Ensure that you have Node.js installed on your machine.

2. Populate the `stock.json` and `transactions.json` files with your inventory data. These files should be located in the root directory of the project.

3. Complile and run the project:

    ```bash
    tsc main.ts
    node main.ts
    ```

## Testing

This project uses Jest as the testing framework. To run the tests, use the following command:

```bash
cd test-cases
tsc main.test.js
jest main.test.js
