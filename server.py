from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "status": "ok",
        "message": "Python engine running"
    })

@app.route("/signal", methods=["POST"])
def signal():
    data = request.get_json()

    symbol = data.get("symbol", "BTCUSDT")

    response = {
        "symbol": symbol,
        "signal": "BUY",
        "entry": 100,
        "sl": 90,
        "tp": 120
    }

    return jsonify(response)

if name == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )
