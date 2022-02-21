from load_data import data
from recommender import algo

trainingSet = data.build_full_trainset()
algo.fit(trainingSet)


# Computing the cosine similarity matrix...
# Done computing similarity matrix.
# <surprise.prediction_algorithms.knns.KNNWithMeans object at 0x7f04fec56898>

prediction = algo.predict('E', 2)
print(prediction.est)
