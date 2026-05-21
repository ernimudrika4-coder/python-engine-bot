from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return {"status": "ok"}

@app.route("/signal", methods=["POST"])
def signal():
    data = request.get_json()
    symbol = data.get("symbol")

    return {
        "symbol": symbol,
        "signal": "BUY",
        "entry": 100,
        "sl": 90,
        "tp": 120
    }

if name == "__main__":
    app.run(host="0.0.0.0", port=int(__import__("os").environ.get("PORT", 5000)))
