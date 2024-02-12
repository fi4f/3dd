from flask import Flask, render_template

app = Flask(__name__, static_folder="static", template_folder="static", static_url_path="/")


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return render_template("index.html")