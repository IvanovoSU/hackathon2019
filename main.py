import numpy as np
import statsmodels.api as sm
import sklearn.linear_model as lm
import sys
import json

d = {}

f = open('rawdata.txt', 'r')

for line in f:
    l = line.split()
    k = " ".join(l[:-3])
    try:
        p1 = int(l[-3])
        p2 = int(l[-2])
        p3 = int(l[-1])
        if not (k in d):
            d[k] = []
        d[k].append(([p1, p3], p2))
    except Exception:
        print(l)

coeffs = {}
for k in d:
    if len(d[k]) < 3:
        continue
    x = []
    y = []
    for t1, t2 in d[k]:
        x.append(t1)
        y.append(t2)
    x_ = sm.add_constant(x)
    smm = sm.OLS(y, x_)
    res = smm.fit()
    coeffs[k] = json.dumps(list(map(float, res.params)))
p = json.dumps(coeffs, ensure_ascii=False)
f = open('data.json', 'w')
print(p, file=f)
