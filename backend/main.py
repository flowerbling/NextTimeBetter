from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
async def read_root():
    return {"message": "Welcome to my FastAPI project!"}



if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='0.0.0.0', port=8888)