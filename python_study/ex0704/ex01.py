import matplotlib.pylab as plt
plt.rcParams['font.family'] = 'Malgun Gothic' # 한글 폰트 설정
plt.rcParams['axes.unicode_minus'] = False # 마이너스 폰트
from sklearn.neighbors import KNeighborsClassifier

# 도미, 빙어 데이터로 학습 진행

bream_length = [25.4, 26.3, 26.5, 29.0, 29.0, 29.7, 29.7, 30.0, 30.0, 30.7, 31.0, 31.0, 31.5, 32.0, 32.0, 32.0, 33.0, 33.0, 33.5, 33.5, 34.0, 34.0, 34.5, 35.0, 35.0, 35.0, 35.0, 36.0, 36.0, 37.0, 38.5, 38.5, 39.5, 41.0, 41.0]
bream_weight = [242.0, 290.0, 340.0, 363.0, 430.0, 450.0, 500.0, 390.0, 450.0, 500.0, 475.0, 500.0, 500.0, 340.0, 600.0, 600.0, 700.0, 700.0, 610.0, 650.0, 575.0, 685.0, 620.0, 680.0, 700.0, 725.0, 720.0, 714.0, 850.0, 1000.0, 920.0, 955.0, 925.0, 975.0, 950.0]

smelt_length = [9.8, 10.5, 10.6, 11.0, 11.2, 11.3, 11.8, 11.8, 12.0, 12.2, 12.4, 13.0, 14.3, 15.0]
smelt_weight = [6.7, 7.5, 7.0, 9.7, 9.8, 8.7, 10.0, 9.9, 9.8, 12.2, 13.4, 12.2, 19.7, 19.9]

length = bream_length + smelt_length
weight = bream_weight + smelt_weight

# for l, w in zip(length, weight):
#     print('l', l)
#     print('w', w)

fish_data = [[l, w] for l, w in zip(length, weight)]
fish_target = [1]*35 + [0]*14

kn = KNeighborsClassifier()
kn.fit(fish_data, fish_target) # 학습 진행: fit

result = kn.predict([[30, 200]]) # 예측: predict
print(result)

# print(fish_data)

# print([1]*10)
# print([1]*5+[2]*3)

# print(len(bream_length))
# print(len(smelt_length))
# print(len(length))

# print('length', length)
# print('weight', weight)

# plt.scatter([1,2,3,10,20],[100,200,300,400,500])
# plt.plot([1,2,3,10,20],[100,200,300,400,500])
# plt.bar([10,20,30],[100,200,300])

plt.scatter(bream_length, bream_weight)
plt.scatter(smelt_length, smelt_weight)
plt.scatter(30, 200, marker='^') # 예측한 도미 위치
plt.scatter(30, 200, marker='*') # 예측한 빙어
plt.title('class')
plt.legend(['도미', '빙어', '예측 도미', '예측 빙어'])

plt.savefig('ex01.png')
plt.show()