//This program will be written in Javascript for use in web-integration.The program will produce a buy or sell-order recommendation for users based on relevant input metrics for given stocks in the stock market on the NYSE and other American exchanges.
//Input metrics for this program include: P/E ratio, Beta, Trading volumes, Market caps, 

// Following code related to "safe investing proflie

var stockPrice = inputNumber

function pE(inputNumber)// This simple function will evaluate the price to earnings ratio of a company, and, using an industry benchmark of 7, will produce a buy or sell order
{if (inputNumber > 7)
console.log("Sell order based on PE ratio.")
else if (inputNumber) <= 7)
console.log("Buy order based on PE ratio.")}
pe()

function Beta(inputNumber)//This simple fuction will take the volatility of the input stock as and produce a buy or sell rating a result.
{if (inputNumber <= 1)
console.log("Buy order based on Beta.")
else if (inputNumber > 1)
console.log("Sell order based on Beta.")}
Beta()
 
function tradVol(inputNumber)
{if (inputNumber >= 4180652)
console.log("Buy order based on average daily trading volumes.")
else if (tradVol() < 4180652)
console.log()
//4,180,652 figure taken from NYSE Group Volume as an aggregate average (NYXdata.com); July 31st, 2017
tradVol()
 
function marketCaps(inputNumber)
{if (inputNumber >= 10000000000)
console.log("Buy order based on this market capitalization")
else if inputNumber < 10000000000
console.log("Sell order based on market capitalization.")}
marketCaps()
 
funtion EPS(inputNumber)
{if inputNumber >= 10
console.log("Buy order based on EPS.")
else if (inputNumber <10)
console.log("Sell order based on EPS.")}
EPS()
 
function divYield(inputNumber)
{if (0 < inputNumber < 5)
console.log("Buy order based on dividend yield.")else console.log("Sell order based on dividend yield.")}
divYield()
 
function targEst(inputNumber)
{if (inputNumber > stockPrice)
console.log("Buy order based on target estimate.") else console.log("Sell order based on target estimate.")}
targEst()
 
