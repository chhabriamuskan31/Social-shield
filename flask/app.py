import tensorflow as tf
import numpy as np
from flask import Flask, request, jsonify,  render_template
from tensorflow.keras.layers import TextVectorization
import pickle
import pandas as pd
from flask_cors import CORS
# inf=new_v("hello my name is suhail shaikh shut the fuck up")
# res=model.predict(np.expand_dims(inf, 0))
# print(res)

def load():
    from_disk=pickle.load(open("models/tv_layer.pkl", "rb"))
    model=pickle.load(open("models/deeplearing_model.pkl", "rb"))
    new_v=TextVectorization.from_config(from_disk['config'])
    new_v.adapt(tf.data.Dataset.from_tensor_slices(["xyz"]))
    new_v.set_weights(from_disk['weights'])
    return (new_v,model)

app = Flask(__name__)
CORS(app)
@app.route("/predict",methods=["post"])
def api():
    s=request.get_data()
    print(s)
    (new_v,model)=load()
    temp=new_v(s)
    res=model.predict(np.expand_dims(temp,0))
    count=0
    print(res)
    for i in range(0,len(res[0])):
        if res[0][i] > 0.4:
            count=count+1
    return jsonify(
        {
            "count":count
        }
    )


if __name__ == '__main__':
    app.run(debug=True)
