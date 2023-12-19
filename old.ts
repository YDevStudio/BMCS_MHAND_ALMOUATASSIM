import { createMachine, assign,interpret } from 'xstate';

const in_Route_for_police_vehicles_approved = (context: any, event: any, { state }: { state: any }) => {
  // Check if the current state matches '_Route_for_police_vehicles_approved'
  return state.matches('_Route_for_police_vehicles_approved');
};

const guards = {
    in_Route_for_police_vehicles_approved: (context: any, event: any, { state }: { state: any }) => {
      // Check if the current state matches '_Route_for_police_vehicles_approved'
      return state.matches('_Route_for_police_vehicles_approved');
    },
    not_in_Route_for_police_vehicles_approved: (context: any, event: any, { state }: { state: any }) => {
      // Check if the current state does not match '_Route_for_police_vehicles_approved'
      return !state.matches('_Route_for_police_vehicles_approved');
    },
    in_Route_for_fire_trucks_approved: (context: any, event: any, { state }: { state: any }) => {
      return state.matches('_Route_for_fire_trucks_approved');
    },
    not_in_Route_for_fire_trucks_approved: (context: any, event: any, { state }: { state: any }) => {
      return !state.matches('_Route_for_fire_trucks_approved');
    },
    fire_truck_dispatched_less_than_number_of_fire_truck_required: (context: any, event: any) => {
      // Assuming 'dispatchedFireTrucks' is part of your context and it's an array
      return context.dispatchedFireTrucks.length < context.numberOfFireTrucks;
    },
    
    police_vehicle_dispatched_less_than_number_of_police_vehicle_required: (context: any, event: any) => {
      return context.dispatchedPoliceVehicles.length < context.numberOfPoliceVehicles;
    },
    fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required: (context: any, event: any) => {
      //return get_fire_trucks(Status.Dispatched).length >= get_number_of_fire_truck_required();
    },
   
  };
  // à faire 
//   public int get_number_of_fire_truck_required() throws java.sql.SQLException {
//     try ( java.sql.Connection connection = java.sql.DriverManager.getConnection("jdbc:derby:memory:BCMS_database")) {
//         //        java.sql.ResultSet rs = connection.createStatement().executeQuery("SELECT fire_truck_number FROM Crisis WHERE crisis_id = (SELECT MAX(crisis_id) FROM Crisis)");
//         java.sql.ResultSet rs = connection.createStatement().executeQuery("SELECT fire_truck_number FROM Crisis WHERE crisis_id = " + _crisis_id);
//         if (rs.next()) {
//             return rs.getInt(1);
//         }
//     }
// // Error:
//     return -1;
// }

// à faire
// public java.util.List<String> get_fire_trucks(Status status) throws java.sql.SQLException {
//   java.util.List<String> fire_trucks = new java.util.ArrayList<>();
//   try ( java.sql.Connection connection = java.sql.DriverManager.getConnection("jdbc:derby:memory:BCMS_database")) {
//       java.sql.ResultSet rs = connection.createStatement(java.sql.ResultSet.TYPE_SCROLL_INSENSITIVE, java.sql.ResultSet.CONCUR_READ_ONLY).executeQuery("SELECT * FROM Fire_truck_in_crisis WHERE crisis_id = " + _crisis_id + " AND fire_truck_status = " + '\'' + status + '\'');
//       rs.beforeFirst();
//       while (rs.next()) {
//           fire_trucks.add(rs.getString("fire_truck_name"));
//       }
//   }
//   return fire_trucks;
// }
  const actions = {
    set_number_of_fire_truck_required: assign({
      // Assuming 'numberOfFireTrucks' is part of your context
      
    }),
    set_number_of_police_vehicle_required: assign({
      // Assuming 'numberOfPoliceVehicles' is part of your context
      
    }),
    dispatch_fire_truck:assign ({
     // TODO
    }),
    enough_fire_trucks_dispatched: assign ({
       // Perform the logic to check if enough fire trucks are dispatched
    // This might update the context or trigger another event
    }),
    dispatch_police_vehicle : assign ({
      // TODO   
    }),
    enough_police_vehicles_dispatched: assign ({
      //perfom the logic after
    })
  };
  
  
export const crisisManagementMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCMDGBbWA6A+gSQDsBLAFwGIcAxAZQGEdUB7AgsVEo5nAJzAEcArnBIBtAAwBdRKAAOjWKU4FpIAB6IA7ACYArFgAsANgAcG42J0BGDTrOWANCACeiW4axatATi37vhsUNLSy8AX1DHNExcQlIKAAU6BmZWdiUefiFYUUkVOQUOZhV1BG09I1NzKxs7RxcEQwBmfSxtH0MdY31TLx0dcMiMbCokphY2EkgKGnox1MKCDMFhcSkkEHzFIvWSkMtGrDEtG2MTHUagr2M61w0Wq0sxUzFLJvMtAZAo4cTZlImpjhfslxmkuLxltlVnl5FtlDtENYvO4NB0NC9vI0vPpzjcGs1Wt4tB0uj0+p9vrhaNwiApYDgIGASABDIgAG3pYFUqAAFsyCDAKNQWZMcAAzIi8HAkbgCVAAaxwBAE6GQYG40PWmwWxUQWka+ywnWsjWO+kC12cmksLWaxkejXR530qIpQypNLpDKZrI5OC5vP5gpwwuZorkbKIqDAOAAbmAeVG2THlar1ZrZLCdQiEPrGgcLPpXoYNDZGhYdHjOl5WjovGJUfb6x1LG7ojgAHIqtXcHCMMXiyUxmVyxWMiWsCBCkUxiNRmPxxOoZNK7vp3JarNKXW5ryWLRYG0Nwz67yPV54sx6Gy2e3mbHGMIRL7uztr3v9nBz6NxhNJmPjkQk7TmGMYSlKI4KquaYahumYFNuOZngeR6oqee4vIYeImDW7yGPoe7mGI2L9M+lI4AASowAjhmy-LevGbKMDI6BgAQ5CUdRopiowvbgcOsoKrAGYbFu2ygCUjQ6B0WC9Pmeb4bolr1GYLQ+L43QukEfTGG2wxUTRs50YsjKMcxrHsRQBncbxX6MJGP6Lv+wlwaJCHiWoiBSTJcmmvmimdJeBJ+L4TQaM02LdHpuDCmAMj0vmzKWDgiVaJ2YBQIwHBhkoFAdowODoLxMbcFxMbJmKORrPBcI7n4jTGLJ5xiN06IBH0eLmAc+hSX4Vz1r0LXRZxhnirZ-HSoJ8r0iQBVql+pX5IC1lgeNQ6TaOLnVW5tU5t5ei+QpfiBVaCAPkaliVF4PgaK8LrDStY18etkHTYOqiAjMDK0syUC8HAODMsgXGDhBU08GVInaohEleXWNYNsYfkXMdymII+jUvKYJZiA1VzBA9ZVPaDAmbe9n1JL9-30kDIMTa9EOGVDYnwrDCD1Y1cktc87WVqdxjnLJvU2k0WivJYpGDO2j08c9YNkxKH1TiM9BU2AAO0zRJMbVBpVM5Y23Qx5JQc015atYEFZ4vWLQ9ToPU2FouM4q2ZGvjLtnfguf7LgDs04PNMiLfIy1E7LdkOd7S7JltMLuaznkIPtZvIwFaMNEjsmeOaxLXWYpyE6N4de7+0cA4rFP0BAP1-erNPA1rJdOb7jOTMz8c7snh3+aj2H5gY2dIp0tium70th579nzqXznk8rX1qxrDckBH0-Nyuett65RsJyb+qc81Fu89hPhYEjGEEei-j6IXNm9k3Psx3P0yU7XS8gw-Zet2AIgG3Hu1s1NlzI+VtToXDEAYbQpgCJ1nLNdYasUZA4H0DgAAIrSGQYZeRASgNMF64Nq6wEwSQXkkB24AMTgRE8RoBZ9ACOWY4jRLwNiwPJXQJxnj6BvmPYYiDkFoIwVgxMAo8HyygoQ4hpCIC-0NizOq2J3A6GPDYawTwrjYWCKwjQ9ZTj2jzNoBBkwkEoPQUQoROCEhT0co-ACgiSE8jIdvOROYCJiywCeboJ4cYYyrBLAe8N0J7nOIYuK-DTGSOEbgoEVio7-m+mY+xZC-6bg7i4+seh7aGBLFkqSdwtB4iLDWF0WhHyqTuF4ZoGgQnGIEQk7BIicAAFECDUSgDybWr16QSKEY42RqS2bSXRELcKmFclFkvE0VoRxHilhdFiTo1Swl2PqVE5prT2mf1nt0xJ0inH9MToMiBFSRmvDGQ4fmNoPBHGIr4YwpxAhVJ4bgAAgmyNkq9rFly6cshx898GjniRE3p-9swDMxnYF0dy7z7Wtp0VoHQOh+CMBiRow1XnvM2b7b5dTfmiNJuIn5SS+kUJNpYWS10KWUopRoTq1C9F9C8KiKS6S0VvI+bErFgKenKzWQINpHSprYqBbs4loLE5lAMCYMwFhrC3nOfUR4dYPCXTMFK+2DzWXvPpoKrlOzLGRxni3bZUjyFipKAigsdhiJ3H3PK607hiKPidpdJoARDCaoFWTY1uLokGvXrYnFRKQUw0Toi9wlL9RtULNhJ2h4cTlPNBS5oHrtVesJTylpfKNkxMNU-b1wKUkktcDjYZjptH+FMHiR4hgazEjuU7LhLoeqLJ0DgZ53AaSxmZGyCg1JaS0hwAOoqUpYBgHjLwU1IbdgYVaBcW6ngggGmCJ1Aih5MQ4kTeWEwLa20dqIF2ntVB-lQWQExBUBaapmsRNolEaIMQVJIkw069YCxokuvJdo3Cpa8KMTgVt7bO3dv1WvGxAcz3ygvTtK9CATQHBCFiA0uTHRcJPgcRdDwdB1vto879uBKDHresyPdsYLFNMzfy1NQlAbEcgzvHcEqKjSuqHKvEJSyWmm8C6S6SKXSSxfO2fDYjCPEdI7yijBGaY0ekcky9U7NC6ElZUGVNR7R4nzGS4wngKkhF0DiWww1BP4uE520jhmdaKiI522jzi2ZwNYQ7YIAsGHhSrVcAw1LbqObusNeIOb-WSZMw0sT2a-U2IC-u6z+ySgMalVUWVtRTrVEJOpMQDZfAlNRU831IGvnUcC6s8jIWcuz0sxF6Toq5OlAU4xuLKm7XsyyZAnwpp85PDrF+-jPw-Nhby-u0jvnQtf1K-GEVwbjZ6ntO566NbujpcumproBhAjEkw50MwzZhq0EYOgGQyYFh9gHIwZAAArCYEXYC9qYqOyd42YM3vhbYe9WIcRPvqDiWtRJXjsPCsEbhz4WmMngOsb4Y3d6IAALQOtS9DmH0OSl4nBwdKlSKKnEX3Hx8isQSCg7qiw0sUlAh3T6A2GNjU9EBGsLoYkQ0stfTmACCAOOcwSyValswxwTjrarKiZLDb7QXAQz50Y-x2CQCZ2zFnjVHs9XjbjdHfc9BaZW6SbR5Ist9q9IyFk7JOTcj5AKMA4vE5OzhXYfUTbbX1dLLhLEwRGx1nODhzrMVf2NBwFt3i1cCA5Q8nRpCZg42BFNCeB9L3sKmFYej04Rh8K3Uy7ht8MEDuevEWACcYvC3QeJIaZE2NVtXUvKcDwfQ7D3m6E+BPXYk+fkxSuQCk4jclF0NdWSy2OhKS56dGtECGH4UIqlkit8jL0VMmAJiLE2LY8z5V00fQPBItOdCrCp1reHAsKpKSxInbuqy4ghKjQkopQP2lDsGUspEB9wnP3tneg1iUWzkPz2Tr1C6kLe23hHzESUR18iHs5ZGa6THTH3Mkn0bz1AUzumWz5hfzJQImmwfDmzuSH2Jkozen9kDmDlHUZ2n1uw4zJW0Tjx6muiLH0GtnNDfxxA5z3GaA+Cyz-xTzegrmwNk1wN6DJ1gXrA70fE6jcysGxnRDxntFdgT3oNQJphkCDkYBGzAIQD4L0HrQuApQeBpWfRagoOklgSRhtGQOLm61y1H3HwsinxYLB1zCeHcReGkl0EvBxDPnR04KEJMB3xEInnvj0NnnQNnEwIzxMM7kukahLDFmaCxGxBtGwh53zD3EeAsA6FgR0MnkG1niYJkOew0AsN6H3FNAwgvC7yL3Ui4SeCMFRH3HiLcMSM5WZAkNKmkJwNMLkLPk00UOumULUwCFkjaH2GrRKV0Hj2dxDF-RMR+RwRkPqIUJrWaLt06nMJKXfyRg6AbAlg9VrwBnzWYKg0q18AgRrXOCkgaiXyrQsBrFunrSUU8EdGxBTQk11SkRkJMFxmVVMBCFmz8Hq3tDSIsCdgGhPG0DMB3QA33W7RkIlkfCNHNG2JCBam8BUIVUONaH8N0COEjQuNpyuOG2GNqM7k8DPhaiaETQ5nyTAQU2bHS0dEtmw0uKE3CxqN8OZ0wyOXOFUVLFdW0FY0m00yJCEIbE6B-1fDM06V6wPRkJKXcE01xg5zW0-2XwVSxHJWaJCgFxKR83cIqJEwFCFIqVYSdnNh5mjUS00XpXLGYzsCWOVKfmGx8PWNuwlljTkkZKZUCN8UaiVydjSz8CRiVPKLNOI0BIxP9wPERlORFkZWJClPRjUINHYVOKRIx1fC2x2z23SE-CO1OzSHjCBxpIl0wzJWJIFnoS6Hq3e1512IjNlWGmaQgGT1QE9FpCFIsEajN0qSLDFgLKVTaH1B2NtRsHCHCCAA */
  id: 'bcms',
  initial: '_Init',
  states: {
    _Init: {
      on: {
        _FSC_connection_request: '_FSC_connected',
        _PSC_connection_request: '_PSC_connected'
      }
    },
    _FSC_connected: {
      on: {
        _FSC_connection_request: '_Crisis_details_exchange'
      }
    },
    _PSC_connected: {
      on: {
        _PSC_connection_request: '_Crisis_details_exchange'
      }
    },
    _Crisis_details_exchange: {
      on : {
        _State_fire_truck_number : {
          target : '_Number_of_fire_truck_defined',
          actions : 'set_number_of_fire_truck_required'
        },
        _State_police_vehicle_number : {
          target : '_Number_of_police_vehicle_defined',
          actions : 'set_number_of_police_vehicle_required'
        }
      }
    },
    _Step_3_Coordination : {

    },
    _Number_of_fire_truck_defined : {
        on : {
            _State_police_vehicle_number : '_Route_plan_development',
        }
    },
    _Number_of_police_vehicle_defined : {
        on : {
            _State_fire_truck_number : '_Route_plan_development',
        }
    },

    _Route_plan_development : {
        on : {
            _Route_for_fire_trucks : '_Route_for_fire_trucks_fixed',
            _Route_for_police_vehicles : '_Route_for_police_vehicles_fixed',

        }
    },

    _Steps_33a1_33a2_Negotiation : {
      on : {
        _No_more_route_left : '_Step_4_Dispatching'
      }
    },
    _Route_for_fire_trucks_development : {

    },
    _Route_for_fire_trucks_to_be_proposed : {
        on : {
            _Route_for_fire_trucks : '_Route_for_fire_trucks_fixed',
        }
    },
    _Route_for_fire_trucks_fixed :{
        on : {
            _FSC_disagrees_about_fire_truck_route : '_Route_for_fire_trucks_to_be_proposed',
            _FSC_agrees_about_fire_truck_route : [
                {
                    target : '_Step_4_Dispatching',
                    cond : in_Route_for_police_vehicles_approved
                },
                {
                    target: '_Route_for_fire_trucks_approved',
                    cond : 'not_in_Route_for_police_vehicles_approved'
                }
            ]
           
        }
    },
    _Route_for_fire_trucks_approved: {

    },
    _Route_for_police_vehicles_development : {

    },
    _Route_for_police_vehicles_to_be_proposed : {
        on : {
            _Route_for_police_vehicles : '_Route_for_police_vehicles_fixed',
        }
    },
    _Route_for_police_vehicles_fixed:{
        on : {
            _FSC_disagrees_about_police_vehicle_route : '_Route_for_police_vehicles_to_be_proposed',
            _FSC_agrees_about_police_vehicle_route : [
              {
                target: '_Step_4_Dispatching',
                cond : 'in_Route_for_fire_trucks_approved'
              },
              {
                target : '_Route_for_police_vehicles_approved',
                cond :'not_in_Route_for_fire_trucks_approved'
              }
            ]
        }
    },
    _Route_for_police_vehicles_approved:{

    },
    _Step_4_Dispatching : {
      on: {
        _Fire_truck_dispatched : [
        {
          target : '_Step_4_Dispatching',
          cond: 'fire_truck_dispatched_less_than_number_of_fire_truck_required',
          actions: 'dispatch_fire_truck'
        },
        {
          target: '_Step_4_Dispatching',
          cond: 'fire_truck_dispatched_less_than_number_of_fire_truck_required',
          actions: 'enough_fire_trucks_dispatched'
        }
      ],
      _Police_vehicle_dispatched : [
        {
          target : '_Step_4_Dispatching',
          cond : 'police_vehicle_dispatched_less_than_number_of_police_vehicle_required',
          actions : 'dispatch_police_vehicle'
        },
        {
          target : '_Step_4_Dispatching',
          cond : 'police_vehicle_dispatched_less_than_number_of_police_vehicle_required',
          actions: 'enough_police_vehicles_dispatched'
        }
      ],
        
     
      _Enough_fire_trucks_dispatched : {
        target : '_All_fire_trucks_dispatched',
        cond : 'fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required'
      },
      _Enough_police_vehicles_dispatched : {
        target : '_All_fire_trucks_dispatched',
        cond : 'police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required'
      }
    },
  },
    _All_police_vehicles_dispatched : {
      on : {
        _Fire_truck_dispatched : [
          {
            target: '_All_police_vehicles_dispatched',
            cond: 'fire_truck_dispatched_less_than_number_of_fire_truck_required',
            actions:'dispatch_fire_truck'
          },
          {
            target : '_All_police_vehicles_dispatched',
            cond: 'fire_truck_dispatched_less_than_number_of_fire_truck_required',
            actions: 'enough_fire_trucks_dispatched'
          }
        ],
        _Enough_fire_trucks_dispatched : {
          target: '_Step_5_Arrival',
          cond: 'fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required'
        }
      }
    },
    _All_fire_trucks_dispatched : {
      on: {
        _Police_vehicle_dispatched : [
          {
            target:'_All_fire_trucks_dispatched',
            cond: 'police_vehicle_dispatched_less_than_number_of_police_vehicle_required',
            actions: 'dispatch_police_vehicle'
          },
          {
            target:'_All_fire_trucks_dispatched',
            cond: 'police_vehicle_dispatched_less_than_number_of_police_vehicle_required',
            actions: 'enough_police_vehicles_dispatched'
          }
        ],
        _Enough_police_vehicles_dispatched : {
          target : '_Step_5_Arrival',
          cond: 'police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required'
        }
      }
    },
    _Step_5_Arrival : {
      on : {
        _Crisis_is_more_severe: '_Crisis_details_exchange',
        _Fire_truck_blocked: {
          target: '_Crisis_details_exchange',
          actions: 'block_fire_truck'
        },
        _Police_vehicle_blocked: {
          target: '_Crisis_details_exchange',
          actions: 'block_police_vehicle'
        }
      }
    },
    _Fire_trucks_arriving : {
      on : {
        _Enough_fire_trucks_arrived: [
        {
          target : '_All_fire_trucks_arrived',
          cond: 'no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived'
        },
        {
          target :'_Completion_of_objectives',
          cond: 'no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived'
        }
        ],
        _Fire_truck_arrived : 
          {
            target: '_Fire_trucks_arriving',
            actions: ['arrive_fire_truck','enough_fire_trucks_arrived']
          }
        
        
      }
    },
    _All_fire_trucks_arrived : {

    },
    _Fire_trucks_arrival: {

    },
    _Police_vehicles_arriving : {
      on: {
        _Enough_police_vehicles_arrived: [
        {
          target: '_All_police_vehicles_arrived',
          cond:'no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived'
        },
        {
          target:'_Completion_of_objectives',
          cond:'no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived'
        }
      ],
      _Police_vehicle_arrived : {
        target : '_Police_vehicles_arriving',
        actions: ['arrive_police_vehicle','enough_police_vehicles_arrived']
      }
      }
      
    },
    _All_police_vehicles_arrived : {

    },
    _Police_vehicles_arrival : {

    },
    _Completion_of_objectives : {
      on: {
        _Close : '_End_of_crisis'
      }
      
    },
    _End_of_crisis : {

    },
  },
 
});

// Create a service for the machine
const service = interpret(crisisManagementMachine).onTransition((state) => {
  console.log(state.value);
});

// Start the service
service.start();
// Send events to the machine
service.send('_FSC_connected'); // Turn on the light
service.send('_PSC_connected'); // Turn off the light

console.log("Hi , i'm inside xstate");