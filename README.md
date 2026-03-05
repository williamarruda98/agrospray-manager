# AgroSpray Manager

Dashboard web para gestão inteligente de aplicações de defensivos agrícolas com análise climática, alertas automáticos e classificação de condições.

## 📋 Visão Geral

Sistema completo para gerenciar aplicações de defensivos agrícolas com integração de previsão do tempo, classificação automática de condições climáticas e sistema de alertas.

## ✨ Funcionalidades Principais

### 🌤️ Análise Climática Inteligente

**Classificação Automática por Condição:**

- **Temperatura:**
  - 🟢 ÓTIMO: 20-30°C
  - 🟡 BOM: 10-20°C ou 30-35°C
  - 🔴 RUIM: <10°C ou >35°C

- **Umidade:**
  - 🟢 ÓTIMO: 50-70%
  - 🟡 BOM: 40-50% ou 70-80%
  - 🔴 RUIM: <40% ou >80%

- **Vento:**
  - 🟢 ÓTIMO: <10 km/h
  - 🟡 BOM: 10-15 km/h
  - 🔴 RUIM: >15 km/h

### 📱 Sistema de Alertas

- Notificações push para mudanças nas condições climáticas
- Alertas 1 dia antes se previsão mudar de boa para ruim
- Avisos sobre condições ideais para aplicação

### 👥 Gestão de Usuários

**Usuários Internos (Funcionários):**
- Acesso completo ao dashboard
- Gerenciamento de fazendas e talhões
- Visualização de relatórios e estatísticas
- Registro de aplicações

**Usuários Externos (Agricultores):**
- Acesso através de código único
- Registro de aplicações em suas propriedades
- Visualização de histórico próprio
- Recebimento de alertas

### 🏡 Gestão de Propriedades

- Cadastro de múltiplas fazendas
- Divisão por talhões
- Histórico de aplicações por área
- Coordenadas geográficas para previsão local

### 📊 Relatórios e Estatísticas

- Histórico completo de aplicações
- Análise de condições climáticas por período
- Estatísticas de eficácia
- Gráficos de evolução
- Exportação de dados

## 🛠️ Stack Tecnológica

### Frontend
- **React** - Framework principal
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos e visualizações
- **React Router** - Navegação
- **Axios** - Requisições HTTP

### Backend
- **FastAPI** - API REST
- **MongoDB** - Banco de dados
- **Motor** - Driver assíncrono para MongoDB
- **Pydantic** - Validação de dados

### Integrações
- **WeatherAPI** - Previsão do tempo
- **Firebase Cloud Messaging** - Notificações push

## 📦 Estrutura do Projeto

```
agrospray-manager/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── WeatherCard.jsx
│   │   │   ├── ApplicationForm.jsx
│   │   │   ├── AlertsPanel.jsx
│   │   │   └── FarmManagement.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── models.py
│   │   ├── routes/
│   │   │   ├── applications.py
│   │   │   ├── farms.py
│   │   │   ├── users.py
│   │   │   └── weather.py
│   │   ├── services/
│   │   │   ├── weather_service.py
│   │   │   └── alert_service.py
│   │   └── database.py
│   ├── requirements.txt
│   └── .env.example
│
└── README.md
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js 18+
- Python 3.9+
- MongoDB 5.0+
- Conta na WeatherAPI (gratuita)

### Backend

1. Clone o repositório:
```bash
git clone https://github.com/williamarruda98/agrospray-manager.git
cd agrospray-manager/backend
```

2. Crie um ambiente virtual:
```bash
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
```

3. Instale as dependências:
```bash
pip install fastapi uvicorn motor pymongo pydantic python-dotenv httpx
```

4. Configure as variáveis de ambiente (.env):
```env
MONGODB_URL=mongodb://localhost:27017
DATABASE_NAME=agrospray
WEATHER_API_KEY=sua_chave_aqui
SECRET_KEY=sua_chave_secreta
```

5. Inicie o servidor:
```bash
uvicorn app.main:app --reload
```

### Frontend

1. Navegue até a pasta frontend:
```bash
cd ../frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente (.env):
```env
VITE_API_URL=http://localhost:8000
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

## 📱 Como Usar

### Para Usuários Internos

1. Faça login no sistema
2. Cadastre fazendas e talhões
3. Visualize as condições climáticas em tempo real
4. Registre aplicações de defensivos
5. Monitore alertas e recomendações
6. Acesse relatórios e estatísticas

### Para Usuários Externos

1. Receba seu código de acesso único
2. Registre-se no sistema usando o código
3. Registre suas aplicações
4. Receba alertas sobre condições climáticas
5. Visualize seu histórico de aplicações

## 🔐 Segurança

- Autenticação JWT
- Senhas criptografadas com bcrypt
- Validação de dados no backend
- Códigos únicos para usuários externos
- Sanitização de inputs

## 📈 Próximas Funcionalidades

- [ ] App mobile (React Native)
- [ ] Integração com drones para aplicação
- [ ] Machine Learning para recomendações
- [ ] Múltiplos idiomas
- [ ] Relatórios em PDF
- [ ] Integração com sistemas de gestão agrícola
- [ ] Mapa interativo das fazendas

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

William Arruda
- GitHub: [@williamarruda98](https://github.com/williamarruda98)

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do perfil.

---

**Nota:** Este projeto está em desenvolvimento ativo. Contribuições e feedback são muito bem-vindos!
