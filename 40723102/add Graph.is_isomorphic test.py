
##### add def#####

from pyslvs.graph import *
 
def test():
    #dof=3*(NL-1)-2*(J1)-J2
    #nl=NL=Number of links.
    #nj=J1=Number of joints. 
    ##J2=Two degree of freedom

    [dof,J2]=[1,0]
    nl=6 #Input
    nj=( dof-3*(nl-1)+J2 )/-2
    type1= link_synthesis(nl , nj)
    #print(type(type1))


    cg_list =contracted_graph(type1[0]) 
    c_j_list=contracted_link_synthesis(type1[0])

    L=[]
    for  x in range(3):
        answer = conventional_graph(cg_list, c_j_list[x])
        L.append(answer)
    #print(L)
    return L
    
print(test()[0])
print(type(test()[0]))
print((" ,").join(str(i) for i in (test()[0])))#去除中括號
print(test()[2])
result = Graph.is_isomorphic(test()[0],test()[2])
print(result)


'''
#####Graph.is_isomorphic()#####
from pyslvs.graph import *
g1 = Graph([(0, 1), (0, 4), (1, 5), (2, 3), (2, 4), (3, 5), (4, 5)])
g2 = Graph([(0, 2), (0, 4), (1, 3), (1, 4), (2, 5), (3, 5), (4, 5)])
#g3 = Graph([(0, 1), (0, 2), (1, 4), (2, 5), (3, 4), (3, 5), (4, 5)])
print(type(g1))

result_1  = Graph.is_isomorphic(g1,g2)
print(result_1 )

'''