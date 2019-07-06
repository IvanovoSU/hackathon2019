import numpy as np
import statsmodels.api as sm
import sklearn.linear_model as lm

x = [[2894, 14318], [2214, 14644], [2180, 14157], [2037, 23081], [2032, 21020], [2575, 21580]]
y = [1287, 884, 747, 968, 976, 1174]

x_ = sm.add_constant(x)
smm = sm.OLS(y, x_)
res = smm.fit()
print(res.params)
d = 600
s = 25000
print(res.params[0] + res.params[1]*d + res.params[2]*s)

x1 = [[1287, 14318], [884, 14644], [747, 14157], [968, 23081], [976, 21020], [1174, 21580]]
y1 = [2894, 2214, 2180, 2037, 2032, 2575]

x_ = sm.add_constant(x1)
smm = sm.OLS(y1, x_)
res = smm.fit()
print(res.params)
d = 652
s = 30812
print(res.params[0] + res.params[1]*d + res.params[2]*s)


x = [[1, 2894], [2, 2214], [3, 2180], [4, 2037], [5, 2032]]
y = [1287, 884, 747, 800, 750]

x_ = sm.add_constant(x)
smm = sm.OLS(y, x_)
res = smm.fit()
print(res.params)
for i in range(1, 21):
    print(res.params[0] + res.params[1]*i + res.params[2]*2000)


