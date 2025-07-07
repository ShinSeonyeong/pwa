# 최근접 이웃 알고리즘 숫자 입력들이 들어옴. 
# 머신러닝, 딥러닝
# 정형데이터 숫자
import matplotlib.pyplot as plt
from sklearn.neighbors import KNeighborsClassifier # 최근접 이웃 알고리즘

a_x = [5,7,4,6,8]
a_y = [10,11,13,15,18]

b_x = [20,25,22,23,24]
b_y = [30,31,32,33,34]

c_x = [4,2,6,8,2]
c_y = [1,5,3,2,4]

d_x = [13,23,42,11,15]
d_y = [1,2,4,2,5]

xx = a_x + b_x + c_x + d_x
yy = a_y + b_y + c_y + d_y

data = [[x,y] for x,y in zip(xx, yy)] # 2차원 배열로 변환
target = [0]*5 + [1]*5 + [2]*5 + [3]*5 # 각 그룹에 대한 레이블
# print(data)
# print(target)

kn = KNeighborsClassifier() # 최근접 이웃 알고리즘 객체 생성
kn.fit(data, target) # fit 메소드로 학습을 시킴

result = kn.predict([[3,5], [2,7]])
# print(result) # 예측 결과 출력

# plt.scatter(a_x, a_y)
# plt.scatter(b_x, b_y)
# plt.scatter(c_x, c_y)
# plt.scatter(d_x, d_y)
# plt.scatter([3,2], [5,7], marker='*',color='purple') # 예측한 점을 빨간색 X로 표시
# plt.show()