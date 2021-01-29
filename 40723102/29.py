
"""
from pyslvs.graph import *
 
nl,nj = [8,10]

type1= link_synthesis(nl , nj)
print(type1)

cg_list = contracted_graph(type1[0])
c_j_list=contracted_link_synthesis(type1[0])
print(c_j_list)
#print(c_j_list[0][0])
# c_j_list = contracted_link_assortment(type1)
answer = conventional_graph(cg_list, c_j_list[1])
print(answer)
"""

from pyslvs.graph import *
import math
 
#dof=3(nl-1)-2(nj)
dof=1
nl=6
nj=(dof*3(nl-1))/-2
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])

L=[]
for  x in range(3):
    answer = conventional_graph(cg_list, c_j_list[x])
    L.append(answer )
    
   # print(x)
    #print(c_j_list[x])
    #print(answer)
    #print(x,c_j_list[x],answer)
print(L)

"""

from pyslvs.graph import *
 
nl,nj = [8,10]
type1= link_synthesis(nl , nj)
print(type1)

cg_list =contracted_graph(type1[0]) 
c_j_list=contracted_link_synthesis(type1[0])


for  x in range(3):
    answer=conventional_graph(cg_list, c_j_list[x])
    
    print(x)
    print(c_j_list[x])
    print(answer)
    #print(x,c_j_list[x],answer)
#print(L
"""