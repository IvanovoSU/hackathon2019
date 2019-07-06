import numpy as np
import statsmodels.api as sm
import sklearn.linear_model as lm

x1 = [[968, 23081], [872, 24405], [1418, 23286], [1368, 18535], [1299, 20659], [976, 21020], [747, 14157], [872, 14644], [1287, 14318]]
y1 = [2037, 1780, 2517, 2525, 2734, 2032, 2180, 2214, 2894]

x_ = sm.add_constant(x1)
smm = sm.OLS(y1, x_)
res = smm.fit()
print(res.params)
d = 170
s = 13699
print(418.90199934849494 + 1.0900290166433344*d -0.013793619884638932*s)
