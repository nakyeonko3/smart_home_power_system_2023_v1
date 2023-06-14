from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


app.run(host="0.0.0.0", port=18081, debug=True)
