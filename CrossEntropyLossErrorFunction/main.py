import math

threshold = 0.5
weights = [0.3, 0.2, 0.9]

def step(weighted_sum):
    if weighted_sum > threshold:
        return 1
    else:
        return 0
    
def perceptron(input, weights):
    weighted_sum = get_weighted_sum(input, weights)
    return step(weighted_sum)

def get_weighted_sum(input, weights):
    weighted_sum = 0
    for x,w in zip(input, weights):
        weighted_sum += x*w
    return weighted_sum

# (input, target)
input = [
    ([0.1, 0.5, 0.2], 1),
    ([0.3, 0.1, 0.8], 0),
    ([0.6, 0.2, 0.7], 1),
    ([0.5, 0.8, 0.1], 0),
]
# (weighted_sum, target)
output = [(get_weighted_sum(x, weights), t) for x,t in input]
print("Output = {}".format(output))

def cross_entropy(input_data):
    loss = 0
    n = len(input_data)
    for w_sum,t in input_data:
        loss += -(t*math.log(w_sum) + (1-t)*math.log(1-w_sum))
    return loss/n

error_term = cross_entropy(output)
print("Error term = {}".format(error_term))