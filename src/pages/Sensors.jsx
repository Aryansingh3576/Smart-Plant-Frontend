import { useEffect, useState } from "react";
import Sidebar from "../components/Layout/Sidebar";
import Navbar from "../components/Layout/Navbar";
import axios from "../services/api";
import { Thermometer, Droplets, Sprout, Activity, RefreshCw } from "lucide-react";

export default function Sensors() {
  const [sensor, setSensor] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("/sensor/latest");
      setSensor(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000); // refresh every 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 p-6 lg:p-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-green-800 mb-2">Sensor Live Data</h2>
                <p className="text-green-600">Real-time monitoring of your plant environment</p>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-md border-2 border-green-100">
                <RefreshCw className="w-4 h-4 text-green-600 animate-spin" />
                <span className="text-sm font-medium text-green-700">Auto-refresh: 3s</span>
              </div>
            </div>
          </div>

          {sensor ? (
            <>
              {/* Sensor Status Banner */}
              <div className="mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-3">
                    <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold">All Sensors Active</p>
                      <p className="text-sm text-green-100">Last updated: Just now</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Live</span>
                  </div>
                </div>
              </div>

              {/* Sensor Data Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Temperature Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-green-100 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl">
                        <Thermometer className="w-7 h-7 text-orange-600" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Temperature</p>
                    <p className="text-4xl font-bold text-gray-800 mb-1">{sensor.temp} °C</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-xs text-gray-500">Optimal: 18-24°C</p>
                      <div className={`w-2 h-2 rounded-full ${sensor.temp >= 18 && sensor.temp <= 24 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-500"></div>
                </div>

                {/* Humidity Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-green-100 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl">
                        <Droplets className="w-7 h-7 text-blue-600" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Humidity</p>
                    <p className="text-4xl font-bold text-gray-800 mb-1">{sensor.humidity} %</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-xs text-gray-500">Optimal: 40-60%</p>
                      <div className={`w-2 h-2 rounded-full ${sensor.humidity >= 40 && sensor.humidity <= 60 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
                </div>

                {/* Soil Moisture Card */}
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-green-100 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl">
                        <Sprout className="w-7 h-7 text-green-600" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Soil Moisture</p>
                    <p className="text-4xl font-bold text-gray-800 mb-1">{sensor.moisture}</p>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <p className="text-xs text-gray-500">Keep soil moist</p>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="h-2 bg-gradient-to-r from-green-400 to-green-500"></div>
                </div>
              </div>

              {/* Additional Info Panel */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-100">
                  <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center space-x-2">
                    <Activity className="w-5 h-5" />
                    <span>Sensor Health</span>
                  </h3>
                  <p className="text-gray-600 mb-4">All sensors are functioning optimally and transmitting data every 3 seconds.</p>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-green-100 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                    <span className="text-sm font-semibold text-green-700">100%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl shadow-lg p-6 border-2 border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">Quick Tips</h3>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Monitor temperature during seasonal changes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Maintain humidity levels for healthy growth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Check soil moisture before watering</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-white rounded-xl shadow-lg p-12 border-2 border-gray-200 text-center max-w-md">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-10 h-10 text-gray-400 animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Waiting for Sensor Data</h3>
                <p className="text-gray-500">Connecting to sensors and retrieving live data...</p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}