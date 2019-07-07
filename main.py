import numpy as np
import statsmodels.api as sm
import sklearn.linear_model as lm
import sys
import json
import math

regions = ['ivanovo', 'vladimir', 'yaroslavl']

d = {}
regd = {}
salary = {}
trend = {}
student = {}
def add_data(f, region):
    regd[region] = {}
    for line in f:
        l = line.split()
        k = " ".join(l[:-3])
        try:
            p1 = int(l[-3])
            p2 = int(l[-2])
            p3 = int(l[-1])
            if not (k in d):
                d[k] = []
            if not (k in regd[region]):
                regd[region][k] = []
            d[k].append(([p2, p3], p1))
            regd[region][k].append((p1, p2, p3))
        except Exception:
            print(l)

def get_trend(region, param, trend_data):
    trend_data[region] = {}
    for k in regd[region]:
        if len(regd[region][k]) < 2:
            continue
        x = []
        y = []
        q = 1
        for t in regd[region][k]:
            x.append(q)
            q += 1
            y.append(t[param])
        x_ = sm.add_constant(x)
        smm = sm.OLS(y, x_)
        res = smm.fit()
        trend_data[region][k] = math.ceil(res.params[0] + 4*res.params[1])

for r in regions:
    f = open('rawdata_' + r + '.txt', 'r')
    add_data(f, r)

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
    coeffs[k] = list(res.params)
p = json.dumps(coeffs, ensure_ascii=False)
f = open('js/data.json', 'w')
print(p, file=f)
f = open('js/salary_data.json', 'w')
trend_data = {}
for r in regions:
    get_trend(r, 2, trend_data)
p = json.dumps(trend_data, ensure_ascii=False)
print(p, file=f)
f = open('js/trend.json', 'w')
trend_data = {}
for r in regions:
    get_trend(r, 1, trend_data)
p = json.dumps(trend_data, ensure_ascii=False)
print(p, file=f)
f = open('js/student.json', 'w')
trend_data = {}
for r in regions:
    get_trend(r, 0, trend_data)
p = json.dumps(trend_data, ensure_ascii=False)
print(p, file=f)

