a = [1, 2]
b = [1, 2]
from scipy.stats import linregress
print(linregress(a, b))
import numpy
print(numpy.corrcoef(a, b)[0, 1])
from scipy.stats.stats import pearsonr
print(pearsonr(a, b))