x_input = [0.1, 0.5, 0.2]
w_weights = [0.3, 0.2, 0.9]
threshold = 0.5

def step(weighted_sum):
    if weighted_sum > threshold:
        return 1
    else:
        return 0
    
def perceptron(input, weights):
    weighted_sum = 0
    for x,w in zip(input, weights):
        weighted_sum += x*w
        print("Weighted sum = {}".format(weighted_sum))
    return step(weighted_sum)

output = perceptron(x_input, w_weights)
print("Output = {}".format(output))