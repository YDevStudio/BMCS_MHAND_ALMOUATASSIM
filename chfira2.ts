import { createMachine,interpret } from "xstate";

export const crisisManagementMachine = createMachine(
  {
    context: {
      in_route_fsc: false,
      in_route_police: false,
      fire_trucks_fixed: false,
      fsc_route_approved: false,
      police_route_approved: false,
      police_vehicles_fixed: false,
      all_fire_trucks_arrived: false,
      all_fire_trucks_dispatched: false,
      all_police_vehicles_arrived: false,
      enough_fire_trucks_dispatched: false,
      all_police_vehicles_dispatched: false,
      enough_police_vehicles_dispatched: false,
    },
    id: "BCMS",
    initial: "_Init",
    states: {
      _Init: {
        on: {
          FSC_connection_request: {
            target: "FSC_connected",
            internal: false,
          },
          PSC_connection_request: {
            target: "PSC_connected",
            internal: false,
          },
        },
      },
      FSC_connected: {
        on: {
          PSC_connection_request: {
            target: "Crisis_details_exchange",
            internal: false,
          },
        },
      },
      PSC_connected: {
        on: {
          FSC_connection_request: {
            target: "Crisis_details_exchange",
            internal: false,
          },
        },
      },
      Crisis_details_exchange: {
        entry: [
          {
            type: "BCMS.to_be_killed",
          },
          {
            type: "BCMS.to_be_set(Long)",
          },
        ],
        on: {
          "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)": {
            target: "#BCMS.Coordination.Number_of_police_vehicule_defined",
            internal: false,
          },
          "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)": {
            target: "#BCMS.Coordination.Number_of_fire_truck_defined",
            internal: false,
          },
        },
      },
      Coordination: {
        initial: "Number_of_police_vehicule_defined",
        states: {
          Number_of_police_vehicule_defined: {
            on: {
              "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)": {
                target: "Route_plan_development",
                internal: false,
              },
            },
          },
          Route_plan_development: {
            on: {
              route_for_police_vehicles: {
                target:
                  "#BCMS.Coordination.Negotiation.Route_for_police_vehicles_development.Route_for_police_vehicles_fixed",
                internal: false,
              },
              FSC_agrees_about_fire_truck_route: {
                target: "#BCMS.Dispatching",
                cond: "Route_for_police_vehicles_approved",
                internal: false,
              },
              FSC_agrees_about_police_vehicle_route: {
                target: "#BCMS.Dispatching",
                cond: "Route_for_police_vehicles_approved",
                internal: false,
              },
              route_for_fire_trucks: {
                target:
                  "#BCMS.Coordination.Negotiation.Route_for_fire_trucks_development.Route_for_fire_trucks_fixed",
                internal: false,
              },
            },
          },
          Number_of_fire_truck_defined: {
            on: {
              "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)": {
                target: "Route_plan_development",
                internal: false,
              },
            },
          },
          Negotiation: {
            states: {
              Route_for_police_vehicles_development: {
                initial: "Route_for_police_vehicles_to_be_proposed",
                states: {
                  Route_for_police_vehicles_to_be_proposed: {
                    on: {
                      route_for_police_vehicles: {
                        target: "Route_for_police_vehicles_fixed",
                        internal: false,
                      },
                    },
                  },
                  Route_for_police_vehicles_fixed: {
                    on: {
                      "FSC_disagrees_about_police_vehicle_route": {
                        target: "Route_for_police_vehicles_to_be_proposed",
                        internal: false,
                      },
                      "FSC_agrees_about_police_vehicle_route[BCMS.not_in_Route_for_fire_trucks_approved]":
                        {
                          target: "Route_for_police_vehicles_approved",
                          cond: "not",
                          internal: false,
                        },
                      "FSC_agrees_about_police_vehicle_route[BCMS.in_Route_for_fire_trucks_approved]":
                        {
                          target: "#BCMS.Dispatching",
                          internal: false,
                        },
                    },
                  },
                  Route_for_police_vehicles_approved: {},
                },
              },
              Route_for_fire_trucks_development: {
                initial: "Route_for_fire_trucks_to_be_proposed",
                states: {
                  Route_for_fire_trucks_to_be_proposed: {
                    on: {
                      route_for_fire_trucks: {
                        target: "Route_for_fire_trucks_fixed",
                        internal: false,
                      },
                    },
                  },
                  Route_for_fire_trucks_fixed: {
                    on: {
                      "FSC_agrees_about_fire_truck_route": {
                        target: "#BCMS.Dispatching",
                        internal: false,
                      },
                      "FSC_disagrees_about_fire_truck_route": {
                        target: "Route_for_fire_trucks_to_be_proposed",
                        internal: false,
                      },
                      "FSC_agrees_about_fire_truck_route[BCMS.not_in_Route_for_police_vehicles_approved]":
                        {
                          target: "Route_for_fire_trucks_approved",
                          internal: false,
                        },
                    },
                  },
                  Route_for_fire_trucks_approved: {},
                },
              },
            },
            on: {
              no_more_route_left: {
                target: "#BCMS.Dispatching",
                internal: false,
              },
            },
            type: "parallel",
          },
        },
      },
      Dispatching: {
        on: {
          "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched":
            {
              target: "Dispatching",
              internal: false,
            },
          "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched":
            {
              target: "Dispatching",
              internal: true,
            },
          "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]":
            {
              target: "All_police_vehicles_dispatched",
              internal: false,
            },
          "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]":
            {
              target: "All_fire_trucks_dispatched",
              internal: false,
            },
        },
      },
      All_police_vehicles_dispatched: {
        on: {
          "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched":
            {
              target: "All_police_vehicles_dispatched",
              internal: true,
            },
          "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]":
            {
              target: "Arrival",
              internal: false,
            },
        },
      },
      All_fire_trucks_dispatched: {
        on: {
          "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched":
            {
              target: "All_fire_trucks_dispatched",
              internal: true,
            },
          "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]":
            {
              target: "Arrival",
              internal: false,
            },
        },
      },
      Arrival: {
        states: {
          Police_vehicles_arrival: {
            initial: "Police_vehicles_arriving",
            states: {
              Police_vehicles_arriving: {
                on: {
                  "police_vehicle_arrived/BCMS.arrive_police_vehicle(String);^BCMS.enough_police_vehicles_arrived":
                    {
                      target: "Police_vehicles_arriving",
                      internal: true,
                    },
                  "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived]":
                    {
                      target: "All_police_vehicles_arrived",
                      internal: false,
                    },
                  "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]":
                    {
                      target: "#BCMS.Completion_of_objectives",
                      internal: false,
                    },
                },
              },
              All_police_vehicles_arrived: {},
            },
          },
          Fire_trucks_arrival: {
            initial: "Fire_trucks_arriving",
            states: {
              Fire_trucks_arriving: {
                on: {
                  "fire_truck_arrived/BCMS.arrive_fire_truck(String);^BCMS.enough_fire_trucks_arrived":
                    {
                      target: "Fire_trucks_arriving",
                      internal: true,
                    },
                  "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived]":
                    {
                      target: "All_fire_trucks_arrived",
                      internal: false,
                    },
                  "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived]":
                    {
                      target: "#BCMS.Completion_of_objectives",
                      internal: false,
                    },
                },
              },
              All_fire_trucks_arrived: {},
            },
          },
        },
        on: {
          "fire_truck_blocked/BCMS.block_fire_truck(String)": {
            target: "Crisis_details_exchange",
            internal: false,
          },
          "crisis_is_more_severe": {
            target: "Crisis_details_exchange",
            internal: false,
          },
          "police_vehicle_blocked/BCMS.block_police_vehicle(String)": {
            target: "Crisis_details_exchange",
            internal: false,
          },
        },
        type: "parallel",
      },
      Completion_of_objectives: {
        on: {
          close: {
            target: "End_of_crisis",
            internal: false,
          },
        },
      },
      End_of_crisis: {
        type: "final",
      },
    },
    schema: {
      events: {} as
        | { type: "" }
        | { type: "close" }
        | { type: "no_more_route_left" }
        | { type: "crisis_is_more_severe" }
        | { type: "route_for_fire_trucks" }
        | { type: "FSC_connection_request" }
        | { type: "PSC_connection_request" }
        | { type: "route_for_police_vehicles" }
        | { type: "FSC_agrees_about_fire_truck_route" }
        | { type: "FSC_disagrees_about_fire_truck_route" }
        | { type: "FSC_agrees_about_police_vehicle_route" }
        | { type: "FSC_disagrees_about_police_vehicle_route" }
        | { type: "fire_truck_blocked/BCMS.block_fire_truck(String)" }
        | { type: "police_vehicle_blocked/BCMS.block_police_vehicle(String)" }
        | { type: "state_fire_truck_number/BCMS.set_number_of_fire_truck_required(Integer)" }
        | { type: "FSC_agrees_about_police_vehicle_route[BCMS.in_Route_for_fire_trucks_approved]" }
        | {
            type: "state_police_vehicle_number/BCMS.set_number_of_police_vehicle_required(Integer)";
          }
        | {
            type: "FSC_agrees_about_fire_truck_route[BCMS.not_in_Route_for_police_vehicles_approved]";
          }
        | {
            type: "FSC_agrees_about_police_vehicle_route[BCMS.not_in_Route_for_fire_trucks_approved]";
          }
        | {
            type: "fire_truck_arrived/BCMS.arrive_fire_truck(String);^BCMS.enough_fire_trucks_arrived";
          }
        | {
            type: "police_vehicle_arrived/BCMS.arrive_police_vehicle(String);^BCMS.enough_police_vehicles_arrived";
          }
        | {
            type: "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_in_All_police_vehicles_arrived]";
          }
        | {
            type: "enough_fire_trucks_arrived[BCMS.no_more_dispatched_fire_trucks_and_not_in_All_police_vehicles_arrived]";
          }
        | {
            type: "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_in_All_fire_trucks_arrived]";
          }
        | {
            type: "enough_police_vehicles_arrived[BCMS.no_more_dispatched_police_vehicles_and_not_in_All_fire_trucks_arrived]";
          }
        | {
            type: "enough_fire_trucks_dispatched[BCMS.fire_truck_dispatched_greater_than_or_equal_to_number_of_fire_truck_required]";
          }
        | {
            type: "enough_police_vehicles_dispatched[BCMS.police_vehicle_dispatched_greater_than_or_equal_to_number_of_police_vehicle_required]";
          }
        | {
            type: "fire_truck_dispatched[BCMS.fire_truck_dispatched_less_than_number_of_fire_truck_required]/BCMS.dispatch_fire_truck(String);^BCMS.enough_fire_trucks_dispatched";
          }
        | {
            type: "police_vehicle_dispatched[BCMS.police_vehicle_dispatched_less_than_number_of_police_vehicle_required]/BCMS.dispatch_police_vehicle(String);^BCMS.enough_police_vehicles_dispatched";
          },
      context: {} as {
        in_route_fsc: boolean;
        in_route_police: boolean;
        fire_trucks_fixed: boolean;
        fsc_route_approved: boolean;
        police_route_approved: boolean;
        police_vehicles_fixed: boolean;
        all_fire_trucks_arrived: boolean;
        all_fire_trucks_dispatched: boolean;
        all_police_vehicles_arrived: boolean;
        enough_fire_trucks_dispatched: boolean;
        all_police_vehicles_dispatched: boolean;
        enough_police_vehicles_dispatched: boolean;
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  {
    actions: {
      "BCMS.to_be_killed": (context, event) => {console.log('im here')},
      "BCMS.to_be_set(Long)": (context, event) => {},
    },
    services: {},
    guards: {
      Route_for_police_vehicles_approved: (context, event) => {
        return false;
      },
      not: (context, event) => {
        return false;
      },
    },
    delays: {},
  },
);

// Create a service for the crisisManagementMachine
const service = interpret(crisisManagementMachine).onTransition((state) => {
  console.log(state.value);
});

// Start the service
service.start();
// Send events to the crisisManagementMachine

service.send('FSC_connection_request'); 
service.send('close'); 