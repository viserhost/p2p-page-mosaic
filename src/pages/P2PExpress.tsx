
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, Shield, AlertCircle } from 'lucide-react';

const P2PExpress = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USDT');
  const currencies = ['USDT', 'BTC', 'ETH', 'BNB'];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-white">P2P Express</h1>
            <Badge variant="secondary" className="bg-yellow-600/20 text-yellow-500">
              Fast Trade
            </Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" className="text-gray-300 border-gray-700">
              How it works
              <AlertCircle className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Currency Selection */}
        <div className="flex flex-wrap gap-4 mb-6">
          {currencies.map((currency) => (
            <Button
              key={currency}
              variant={selectedCurrency === currency ? "default" : "outline"}
              className={`${
                selectedCurrency === currency
                  ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                  : "text-gray-300 border-gray-700 hover:bg-gray-800"
              }`}
              onClick={() => setSelectedCurrency(currency)}
            >
              {currency}
            </Button>
          ))}
        </div>

        {/* Quick Trade Card */}
        <Card className="bg-gray-800/50 border-gray-700 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Amount (USD)</label>
              <input
                type="number"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white"
                placeholder="Enter amount"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Payment Method</label>
              <Button variant="outline" className="w-full text-gray-300 border-gray-700 justify-between">
                Select method
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Best Price</label>
              <div className="text-xl font-bold text-white">7.35 USD</div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
              Buy {selectedCurrency}
            </Button>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-800/50 border-gray-700 p-6">
            <Shield className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Secure Trading</h3>
            <p className="text-gray-400">Trade with confidence using our secure escrow service</p>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 p-6">
            <Search className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Best Rates</h3>
            <p className="text-gray-400">Get the most competitive rates from verified traders</p>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 p-6">
            <AlertCircle className="h-8 w-8 text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-400">Professional support team available around the clock</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default P2PExpress;
