FROM node:20-alpine

WORKDIR /app

# Копіюємо package files
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код
COPY . .

# Відкриваємо порт Vite
EXPOSE 5173

# Запускаємо dev сервер
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]