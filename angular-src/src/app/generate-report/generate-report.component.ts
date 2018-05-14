import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CustomizePropertyService } from '../services/customizeProperty.service';

import { Property } from '../models/Property';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  private currentMonth: any;
  private currentYear: any;
  private date: Date;

  // set for previous year and next year buttons
  private finalPaymentYear: any;
  private firstYear: boolean = true;
  private lastYear: boolean = false;

  private property: any;
  private propertyId: string;

  private amortizationPayments: any;
  private appreciation: any;
  private averageRent: any;
  private balloonPayment: any;
  private balloonPaymentYear: any;
  private balloonPaymentBalance: any;
  private capEx: any;
  private capRate: any;
  private cashFlow: any;
  private cashOnCashReturn: any;
  private currentPITI: any;
  private depreciation: any;
  private equityBuilt: any;
  private extraIncomes: Array<any> = [];
  private extraFixedExpenses: Array<any> = [];
  private extraVariableExpenses: Array<any> = [];
  private HOA: any;
  private incomeSavedTaxes: any;
  private insurance: any;
  private monthlyPayment: any;
  private netOperatingIncome: any;
  private pmiAmount: any;
  private propertyManagement: any;
  private propertyTax: any;
  private smallRepairs: any;
  private totalEquityBuilt: any;
  private totalExpenses: any;
  private totalFixedExpense: any;
  private totalFixedExpenses: any;
  private totalIncome: any;
  private totalReturnDollars: any;
  private totalReturnPercent: any;
  private totalVariableExpense: any;
  private totalVariableExpenses: any;
  private utilities: any;
  private vacancy: any;
  private yearlyTotals: any = {};


  constructor(private customizePropertyService: CustomizePropertyService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.date = new Date();
    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();
    this.checkYear();

    if (this.customizePropertyService.customizedPropertyExists) {
      this.property = this.customizePropertyService.getCustomizedProperty();
      this.setNumbers(this.currentYear)
      this.setLastYear();
    } else {
      this.propertyId = this.route.snapshot.params['id'];
      this.router.navigate(['/customizeproperty/', this.propertyId]);
    }
  }

  checkYear() {
    this.firstYear = this.date.getFullYear() == this.currentYear ? true : false;
    this.lastYear = this.finalPaymentYear == this.currentYear;
  }

  setLastYear() {
    if (this.balloonPayment) {
      this.finalPaymentYear = this.currentYear + this.balloonPaymentYear;
      return;
    }
    this.finalPaymentYear = (this.property.numberOfPayments / 12) + this.currentYear;
    if (this.currentMonth == 'January') {
      this.finalPaymentYear = this.finalPaymentYear - 1;
    }
  }

  setNumbers(year) {
    this.HOA = this.property.HOANumbers[year];
    this.currentPITI = this.property.PITINumbers[year];
    this.amortizationPayments = this.property.amortizationPayments[year];
    this.appreciation = this.property.appreciationNumbers[year];
    this.averageRent = this.property.averageRentNumbers[year];
    this.balloonPayment = this.property.balloonPayment == 'Yes' ? true : false;
    this.balloonPaymentYear = this.property.balloonPaymentYear;
    this.balloonPaymentBalance = this.property.balloonPaymentBalance;
    this.capEx = this.property.capExNumbers[year];
    this.capRate = this.property.capRate[year];
    this.cashFlow = this.property.cashFlowNumbers[year];
    this.cashOnCashReturn = this.property.cashOnCashReturnNumbers[year];
    this.depreciation = this.property.depreciationNumbers[year];
    this.equityBuilt = this.property.equityBuiltNumbers[year];
    this.getExtraIncomes(this.property.extraIncomesNumbers[year]);
    this.getExtraFixedExpenses(this.property.extraFixedExpensesNumbers[year]);
    this.getExtraVariableExpenses(this.property.extraVariableExpensesNumbers[year]);
    this.incomeSavedTaxes = this.property.incomeSavedTaxesNumbers[year];
    this.insurance = this.property.insuranceNumbers[year];
    this.monthlyPayment = this.property.monthlyPayment;
    this.netOperatingIncome = this.property.netOperatingIncomeNumbers[year];
    this.pmiAmount = this.property.PMIAmountNumbers[year];
    this.propertyManagement = this.property.propertyManagementNumbers[year];
    this.propertyTax = this.property.propertyTaxesNumbers[year];
    this.smallRepairs = this.property.smallRepairsNumbers[year];
    this.totalEquityBuilt = this.property.totalEquityBuiltNumbers[year];
    this.totalExpenses = this.property.totalExpensesNumbers[year];
    this.totalFixedExpense = this.property.totalFixedExpenseNumbers[year];
    this.totalFixedExpenses = this.property.totalFixedExpensesNumbers[year];
    this.totalIncome = this.property.totalIncomeNumbers[year];
    this.totalReturnDollars = this.property.totalReturnDollarsNumbers[year];
    this.totalReturnPercent = this.property.totalReturnPercentNumbers[year];
    this.totalVariableExpense = this.property.totalVariableExpenseNumbers[year];
    this.totalVariableExpenses = this.property.totalVariableExpensesNumbers[year];
    this.utilities = this.property.utilitiesNumbers[year];
    this.vacancy = this.property.vacancyNumbers[year];



    this.yearlyTotals["totalPayments"] = 0;
    this.yearlyTotals["totalPrincipal"] = 0;
    this.yearlyTotals["totalInterest"] = 0;
    this.yearlyTotals["balance"] = 0;
    this.amortizationPayments.forEach((payment) => {
      this.yearlyTotals["totalPayments"] += payment.payment;
      this.yearlyTotals["totalPrincipal"] += payment.principalPaid;
      this.yearlyTotals["totalInterest"] += payment.interestPaid;
      this.yearlyTotals["balance"] = payment.balance;
    });
    this.yearlyTotals["totalPrincipal"] = Number.parseFloat(this.yearlyTotals["totalPrincipal"]).toFixed(2);
    this.yearlyTotals["totalPrincipal"] = parseFloat(this.yearlyTotals["totalPrincipal"]);
    this.yearlyTotals["totalInterest"] = Number.parseFloat(this.yearlyTotals["totalInterest"]).toFixed(2);
    this.yearlyTotals["totalInterest"] = parseFloat(this.yearlyTotals["totalInterest"]);
    this.yearlyTotals["totalPayments"] = Number.parseFloat(this.yearlyTotals["totalPayments"]).toFixed(2);
    this.yearlyTotals["totalPayments"] = parseFloat(this.yearlyTotals["totalPayments"]);
  }

  previousYear() {
    this.currentYear = this.currentYear - 1;
    this.checkYear();
    this.setNumbers(this.currentYear);
  }

  nextYear() {
    this.currentYear = this.currentYear + 1;
    this.checkYear();
    this.setNumbers(this.currentYear);
  }

  getExtraIncomes(incomes) {
    for (let key in incomes) {
      this.extraIncomes.push({
        incomeName: incomes[key]["incomeName"],
        incomeAmount: incomes[key]["incomeAmount"]
      });
    }
  }

  getExtraFixedExpenses(expenses) {
    for (let key in expenses) {
      this.extraFixedExpenses.push({
        expenseName: expenses[key]["expenseName"],
        expenseAmount: expenses[key]["expenseAmount"]
      });
    }
  }

  getExtraVariableExpenses(expenses) {
    for (let key in expenses) {
      this.extraVariableExpenses.push({
        expenseName: expenses[key]["expenseName"],
        percent: expenses[key]["percent"],
        expenseAmount: expenses[key]["expenseAmount"]
      });
    }
  }

}
