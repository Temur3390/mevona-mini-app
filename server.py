from flask import Flask, render_template, request, send_from_directory
import os

app = Flask(__name__, static_folder='.', template_folder='.')

# Asosiy sahifa — foydalanuvchi Telegram username bilan kirganda shu joy ochiladi
@app.route('/')
def home():
    user = request.args.get('user', 'Mehmon')  # Telegram username keladi
    return f'''
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="0; url=/index.html?user={user}">
      </head>
      <body></body>
    </html>
    '''

# index.html faylni yuborish
@app.route('/index.html')
def serve_index():
    return send_from_directory('.', 'index.html')

# Render yoki lokal ishga tushirish uchun
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)