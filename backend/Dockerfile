FROM python:3.11-slim

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Встановлюємо залежності
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копіюємо код backend
COPY . .

# Відкриваємо порт
EXPOSE 8000

# Запускаємо сервер (manage.py вже в /app)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]