
"""
from pyslvs.graph import *
 
nl,nj = [6,7]

type1= link_synthesis(nl , nj)
print(type1)

cg_list = contracted_graph(type1[0])
c_j_list=contracted_link_synthesis(type1[0])
print(c_j_list)
#print(c_j_list[0][0])
# c_j_list = contracted_link_assortment(type1)
answer = conventional_graph(cg_list, c_j_list[2])
print(answer)
"""

#########add for迴圈##########
from pyslvs.graph import *
 
nl,nj = [6,7]
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])


for  x in range(3):
    answer=conventional_graph(cg_list, c_j_list[x])
    print(x,c_j_list[x],answer)
    
    
#########add L=[]##########
from pyslvs.graph import *

nl=6
nj=7
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])

L=[]
for  x in range(3):
    answer = conventional_graph(cg_list, c_j_list[x])
    L.append(answer)
print(L)
