import express from 'express';
import addIncome from '../controllers/addIncome.js';
import getIncome from '../controllers/getIncome.js';
import deleteIncome from '../controllers/deleteIncome.js';
import addExpense from '../controllers/addExpense.js';
import getExpenses from '../controllers/getExpenses.js';
import deleteExpense from '../controllers/deleteExpense.js';

const router = express.Router();

router.post('/add-income',addIncome);
router.get('/get-incomes',getIncome);
router.delete('/delete-income/:id',deleteIncome);
router.post('/add-expense',addExpense);
router.get('/get-expenses',getExpenses);
router.delete('/delete-expense/:id',deleteExpense);


export default router;