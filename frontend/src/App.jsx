import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchWeather()
  }, [])

  const fetchWeather = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/weather/Urai')
      setWeather(response.data)
      setLoading(false)
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error)
      setLoading(false)
    }
  }

  const getConditionColor = (condition) => {
    switch(condition) {
      case 'ÓTIMO': return 'bg-green-500'
      case 'BOM': return 'bg-yellow-500'
      case 'RUIM': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Carregando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            🌿 AgroSpray Manager
          </h1>
          <p className="text-gray-600 mt-1">Gestão Inteligente de Defensivos Agrícolas</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Weather Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              🌤️ Condições Climáticas
            </h2>
            {weather && (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Localização:</span>
                  <span className="font-semibold">{weather.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Temperatura:</span>
                  <span className="font-semibold">{weather.temperature}°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Umidade:</span>
                  <span className="font-semibold">{weather.humidity}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Vento:</span>
                  <span className="font-semibold">{weather.wind_speed} km/h</span>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className={`${getConditionColor(weather.condition)} text-white text-center py-2 px-4 rounded-lg font-bold`}>
                    Condição: {weather.condition}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              📊 Estatísticas
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded">
                <div className="text-2xl font-bold text-green-700">0</div>
                <div className="text-sm text-gray-600">Aplicações Hoje</div>
              </div>
              <div className="bg-blue-50 p-4 rounded">
                <div className="text-2xl font-bold text-blue-700">0</div>
                <div className="text-sm text-gray-600">Alertas Ativos</div>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              📝 Sobre o Sistema
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sistema completo para gerenciamento de aplicações de defensivos agrícolas com análise climática em tempo real.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <div>✅ Análise Climática</div>
              <div>✅ Alertas Automáticos</div>
              <div>✅ Gestão de Fazendas</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>AgroSpray Manager - v1.0.0</p>
          <p className="text-sm mt-1">Dashboard Web para Gestão Inteligente</p>
        </div>
      </footer>
    </div>
  )
}

export default App
