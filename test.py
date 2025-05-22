import psycopg2

try:
    conn = psycopg2.connect(
        dbname="Diplom_Step",      # Или другая база, если ты её создал
        user="postgres",
        password="Aboka2008",   # Новый пароль
        host="localhost",
        port="5432"
    )
    print("Connection successful")
    conn.close()
except Exception as e:
    print("Connection failed:", e)
