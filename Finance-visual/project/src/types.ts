export interface Transaction {
  id: string;
  amount: number;
  date: string;
  description: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  budget: number;
  color: string;
}

export interface DashboardSummary {
  totalExpenses: number;
  categoryBreakdown: {
    category: string;
    amount: number;
  }[];
  recentTransactions: Transaction[];
}