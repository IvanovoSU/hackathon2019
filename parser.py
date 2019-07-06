import sys

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
        d[k].append((p1, p2, p3))
    except Exception:
        print(l)
for k in d:
    if len(d[k]) < 3:
        print(k)
