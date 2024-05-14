// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict";

function calculatePayAndTaxes() {
    // input
    const numberOfHoursYouWorked = parseFloat(document.getElementById('number-of-hours-you-worked').value);
    const timesYourSalary = parseFloat(document.getElementById('times-your-salary').value);
    const taxRate = 0.18;

    // process
    const pay = (numberOfHoursYouWorked * timesYourSalary) * (1 - taxRate);
    const taxes = (numberOfHoursYouWorked * timesYourSalary) * taxRate;

    // output
    document.getElementById('pay').innerHTML = 'Your pay will be: $' + pay.toFixed(2);
    document.getElementById('taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2);
}