import numpy as np

def sigmoid(weighted_sum):
    return 1/(1+np.exp(-weighted_sum))

def predict(feature, weights, bias):
    return sigmoid(np.dot(feature, weights) + bias)

def cross_entropy(target, prediction):
    return -(target*np.log10(prediction)+(1-target)*(np.log10(1-prediction)))


def gradient_descent(feature, weights, target, prediction, learning_rate, bias):
    new_wights = []
    new_bias = bias + learning_rate * (target - prediction)
    for x,w in zip(feature, weights):
        new_wights.append(w + learning_rate * (target - prediction) * x)
    return new_wights, new_bias


# Data
features = np.array(([0.1,0.5,0.2],[0.2,0.3,0.1],[0.7,0.4,0.2],[0.1,0.4,0.3]))
targets = np.array([0,1,0,1])

epochs = 1000000
learning_rate = 0.1
    
errors = []
weights = np.array([0.4, 0.2, 0.6])
bias = 0.5

new_weights = []

for e in range(epochs):
    for feature, target in zip(features, targets):
        prediction = predict(feature, weights, bias)
        error = cross_entropy(target, prediction)
        weights, bias = gradient_descent(
            feature, weights, target, prediction, learning_rate, bias
        )
    
    out = predict(features, weights, bias)
    loss = np.mean(cross_entropy(targets, out))
    errors.append(loss)
    print("\n========= Epoch", e,"=========")
    print("Average loss: ", loss)