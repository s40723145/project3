from sympy import * 
import matplotlib.pyplot as plt


theta3 = symbols("θ3")
r1, r2, theta2 = symbols("r1, r2, θ2")
stroke = symbols("S")
r3 = symbols("r3")

# theta1 = symbols("theta1")
omega2 = symbols("omega2")
omega3 = symbols("omega3")
time = symbols("t")


def deg2rad(deg):
    rad = (pi.evalf() / 180) * deg
    return rad
# print(deg2rad(50))


def show_equation():
    theta3 = atan( (r1 + r2 * sin(theta2)) / (r2 * cos(theta2)) )  #crank_shaper theta3
    # pprint(theta3)
    # print("-"*80)
    stroke = r3 * cos(theta3)                                      #crank_shaper stroke
    pprint(stroke)


def crank_shaper_theta3():
    theta3_list = []
    for i in range(0, 361, 10):
        theta3 = atan( (r1 + r2 * sin(theta2)) / (r2 * cos(theta2)) )
        theta3 = theta3.subs([(r1, 16), (r2, 5.7), (theta2, deg2rad(i))])
        # print("%d deg: " %i , theta3, "rad")
        if theta3 < 0:
            theta3 += deg2rad(180)
            # print(theta3)
        theta3_list.append(theta3)
    # print(theta3_list)
    # print(len(theta3_list))
    return theta3_list


def crank_shaper_stroke_pos():
    s_list = []
    count = 0
    for _ in range(0, 361, 10):
        stroke = r3 * cos(theta3)
        stroke = stroke.subs( [(r3, 35), (theta3, crank_shaper_theta3()[count]) ]) 
        count += 1
        # print(count)
        # print(crank_shaper_theta3()[count])
        s_list.append(stroke)
    # print(stroke)
    return s_list


def crank_shaper_stroke_vel():
    _theta2 = omega2 * time
    theta3 = atan( (r1 + r2 * sin(_theta2)) / (r2 * cos(_theta2)) )
    stroke = r3 * cos(theta3)
    stroke_vel_time = diff(stroke, time)


    stroke_vel_theta = stroke_vel_time.subs(omega2 * time, theta2)
    # pprint(stroke_vel_theta)

    
    for i in range(0, 360, 10):
        stroke_vel_theta= stroke_vel_theta.subs([(r3, 35), ()])
    


def crank_shaper_stroke_acc():
    theta2 = omega2 * time
    theta3 = atan( (r1 + r2 * sin(theta2)) / (r2 * cos(theta2)) )
    stroke = r3 * cos(theta3)
    stroke_vel = diff(stroke, time)
    stroke_acc = diff(stroke_vel, time)
    # pprint(stroke_acc)


def show_img():
    y_list = []
    for i in range(0, 361, 10):
        y_list.append(i)

    self_img = plt.imread("crank shaper self.png")
    plt.subplot(1, 2, 1,)
    # plt.plot(y_list, crank_shaper_stroke_pos())
    plt.imshow(self_img)
    plt.title("self-derived")
    plt.axis("off")
    
    pyslvs_img = plt.imread("crank shaper p3 pyslvs.png")
    plt.subplot(1, 2, 2)
    plt.imshow(pyslvs_img)
    plt.title("pyslvs")
    plt.axis("off")
    
    plt.show()


if __name__ == "__main__":
    # print(crank_shaper_theta3())
    # print(crank_shaper_stroke_pos())
    # show_equation()
    # show_img()
    crank_shaper_stroke_vel()
    crank_shaper_stroke_acc()
