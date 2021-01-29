import math 
import time
import sim 
#import simConst

sim.simxFinish(-1)

clientID = sim.simxStart('127.0.0.1', 19997, True, True, 5000, 5)
print("Connection success")

if clientID!=-1:
    print ('Connected to remote API server')
    sim.simxSynchronous(clientID,True)
    #同步模式
    sim.simxSynchronousTrigger(clientID)
    # Start simulation
    sim.simxStartSimulation(clientID, sim.simx_opmode_streaming)
    print ("Simulation start")
    
    res,bubbleRob_leftMotor = sim.simxGetObjectHandle(clientID, "left_motor",  sim.simx_opmode_oneshot_wait)
    res,bubbleRob_rightMotor = sim.simxGetObjectHandle(clientID, "right_motor",  sim.simx_opmode_oneshot_wait)
    res, main_handle = sim.simxGetObjectHandle(clientID, 'mainobject', sim.simx_opmode_blocking)
    
    left_Code =sim.simxSetJointTargetVelocity(clientID,bubbleRob_leftMotor ,50,sim.simx_opmode_oneshot_wait)
    right_Code = sim.simxSetJointTargetVelocity(clientID,bubbleRob_rightMotor ,50,sim.simx_opmode_oneshot_wait)
    print('finish velocity setting')
    #time.sleep(20)
    
    #sim.simxSynchronousTrigger(clientID)
    res, main_position = sim.simxGetObjectPosition(clientID, main_handle, -1, sim.simx_opmode_blocking)
    if res >= 0:
        print('main_position' + str(main_position))
    else:
        print('cant found main_position')
        
    

    
    #print('main position = ' + str(main_position))
    
    #Stop simulation
    #sim.simxStopSimulation(clientID, sim.simx_opmode_blocking)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    