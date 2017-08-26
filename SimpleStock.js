//This program will be written in Javascript for use in web-integration.The program will produce a buy or sell-order recommendation for users based on relevant input metrics for given stocks in the stock market on the NYSE and other American exchanges.
//Input metrics for this program include: P/E ratio, Beta, Trading volumes, Market caps, 

// Following code related to "safe investing profile"

function pE(inputNumber)// This simple function will evaluate the price to earnings ratio of a company, and, using an industry benchmark of 7, will produce a buy or sell order
{if (inputNumber > 7){
console.log("Sell order based on PE ratio.")}
else if (inputNumber <= 7){
console.log("Buy order based on PE ratio.")}}


function Beta(inputNumber)//This simple fuction will take the volatility of the input stock as and produce a buy or sell rating a result.
{if (inputNumber <= 1){
console.log("Buy order based on Beta.")}
else if (inputNumber > 1){
console.log("Sell order based on Beta.")}}

 
function tradVol(inputNumber)//4,180,652 figure taken from NYSE Group Volume as an aggregate average (NYXdata.com); July 31st, 2017
{if (inputNumber >= 4180652)
{console.log("Buy order based on average daily trading volumes.")}
else if (inputNumber < 4180652)
{console.log("Sell order based on average daily trading volumes.")}}

 
function marketCaps(inputNumber)//This function is responsible for analyzing the market capitalization of the input stock and determining whether or not it fits the appropriate risk profile.
{if (inputNumber >= 10000000000)
{console.log("Buy order based on this market capitalization")}
else if (inputNumber < 10000000000){
console.log("Sell order based on market capitalization.")}}

 
function EPS(inputNumber)//This function is responsible for evaluating the inputted earnings per share metric in order to establich whether or not it fits the necessitated criteria
{if (inputNumber >= 10)
{console.log("Buy order based on EPS.")}
else if (inputNumber <10){
console.log("Sell order based on EPS.")}}

 
function divYield(inputNumber)//This function is responsible for evaluating the dividend yield of a given stock and evaluating whether or not it should be bought or sold by the user based on their risk profile. 
{if (0 < inputNumber < 5)
{console.log("Buy order based on dividend yield.")} else {console.log("Sell order based on dividend yield.")}}

function aggScore()
{if (EPS() + divYield() + marketCaps() + tradvol() + Beta() + pE() >= 10004180649)
{console.log("Buy order based on all metrics.");
} else {console.log("Sell order based on all metrics.")}}

//end of the code segment for safe investment profile 

//start 
 


 
