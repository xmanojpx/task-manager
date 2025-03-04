from flask import Flask, render_template, request, redirect

app = Flask(__name__)

tasks = []  # List to store tasks hi hi hi

@app.route("/")
def home():
    return render_template("index.html", tasks=tasks)

@app.route("/add", methods=["POST"])
def add_task():
    task = request.form.get("task")
    if task:
        tasks.append(task)
    return redirect("/")

@app.route("/delete", methods=["POST"])
def delete_task():
    task = request.form.get("task")
    if task in tasks:
        tasks.remove(task)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)
