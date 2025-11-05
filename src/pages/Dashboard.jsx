import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import { Thermometer, Droplets, Sprout } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-green-800 mb-2">Dashboard</h2>
            <p className="text-green-600">Monitor your plant's health in real-time</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Temperature Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-green-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg">
                    <Thermometer className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-1">Temperature</p>
                <p className="text-3xl font-bold text-gray-800">-- °C</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Optimal: 18-24°C</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-500"></div>
            </div>

            {/* Humidity Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-green-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-lg">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-1">Humidity</p>
                <p className="text-3xl font-bold text-gray-800">-- %</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Optimal: 40-60%</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
            </div>

            {/* Soil Moisture Card */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-2 border-green-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
                    <Sprout className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-600 mb-1">Soil Moisture</p>
                <p className="text-3xl font-bold text-gray-800">--</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500">Keep soil moist</p>
                </div>
              </div>
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-2 border-green-100">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-green-800">System Status</h3>
            </div>
            <p className="text-gray-600">All sensors are connected and monitoring your plant's environment.</p>
          </div>
        </main>
      </div>
    </div>
  );
}