from flask import Flask, render_template
import markdown
import os

app = Flask(__name__)

@app.route("/")
def home():
    md_file_path = os.path.join("markdown", "example.md")
    with open(md_file_path, "r") as f:
        md_content = f.read()
        html_content = markdown.markdown(md_content, extensions = ["extra"])
    
    
    return render_template("index.html", content = html_content)


if __name__ == "__main__":
    app.run(debug = True)