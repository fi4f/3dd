### Setup

Setup a python virtual environment
```ps
python -m venv ./.venv
```

Activate the virtual environment
```ps
.\.venv\Scripts\activate
```

If you see the error `cannot be loaded because the execution of scripts is disabled on this system`, run the following command and try again.
```ps
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Installing Dependencies

Upgrade pip to the latest version
```ps
python -m pip install --upgrade pip
```

Install python dependencies
```ps
pip install -r requirements.txt
```

Install npm dependencies
```
npm install
```


### Build and Run

Build the frontend
```
npm run build
```

Host the application using flask
```
flask run
```