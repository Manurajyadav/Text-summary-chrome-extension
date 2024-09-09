from flask import Flask, request
from transformers import pipeline

app = Flask(__name__)

@app.get('/summary')
def summary_api():
    text = request.args.get('text', '')  # Get the text to summarize
    summary = get_summary(text)
    return summary, 200

def get_summary(text):
    summariser = pipeline('summarization')
    summary = ''
    for i in range(0, (len(text)//1000)+1):
        summary_text = summariser(text[i*1000:(i+1)*1000])[0]['summary_text']
        summary = summary + summary_text + ' '
    return summary

if __name__ == '__main__':
    app.run()
