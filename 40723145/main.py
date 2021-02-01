from pyslvs import *

def collect_format(expr, input, graph, placement, target, cus, same):
    {
    'expression':       # the dot may be repositioned.
        "M["+
        expr +
        "]",
    'input': input,
    'graph': graph,
    'placement':placement,
    'target':target,
    'cus':cus,
    'same':same
    }
    
# print(type(format))


def expression():
    vertice = 5
    expr_list = []
    vp1 = VPoint(["ground", "L1"], 0, 0, "green", 0, 0)
    vp2 = VPoint(["ground", "L2"], 0, 0, "green", 90, 0)
    vp3 = VPoint(["L1", "L3"], 0, 0, "green", 12.92, 32.53)
    vp4 = VPoint(["L2", "L3"], 0, 0, "green", 73.28, 67.97)
    vp5 = VPoint(["L3"], 0, 0, "green", 33.3, 66.95)
    vp_list = [vp1, vp2, vp3, vp4, vp5]
    for i in vp_list:
        vp_expr = i.expr()
        expr_list.append(vp_expr)
    # print(vp_expr_list)
    return expr_list
    
             
def test_expr():
    vp1 = VPoint(["ground", "L1"], 0, 0, "green", 0,0)
    vp1_expr = vp1.expr()
    print(f"vp1: {vp1}",
             f"vp1_expr: {vp1_expr}",
             sep='\n')
            
    
if __name__ == "__main__":
    # test_expr()
    print( expression() )
    