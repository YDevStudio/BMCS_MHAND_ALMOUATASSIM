import { createMachine, interpret } from "xstate";

const crisisManagementMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMBOBLWmCyBDAdrjALZj4AuAdAJL7rkDEAYgMoDCA+mwPIByvAUTYAVanw4AlAQEUAqgJbCA2gAYAuolAAHAPZZy6Hfk0gAHogBMAFgDsARkp2ArADYrATit2rKlxacANCAAnpZ2AMwO4U424Z5O4S7h4TYAvqlBaJg4BERgpBQ0dIwACuxcfIIiYrySMvKKqhpIILr6hsYt5ggWdgAcfZRxKn3hfX7hKrZBoQiRI5Q+Nk527i5OfUvpmRhYsHiEJGRUrGxsRvhgyOSQDGWcPPxCouJScgrK6iZt9B0m3YkVpR3AlnE4VssbH0ZpZ3BFgSobFY+nCfH0LO5tiAsnsDnkClR7ud8JdrrdThUntVXvUPk1vnpfkZ-ohEr1gaDwRCYtCQqy7Aslis1hsthlsbscod8sdKGxJbAACJgci4dAAG1gAlMyAAFgQYAxFABBYQCDhMahSDjCCSyNgAaQ4vFk2AAQgIJPSWj8DMyuog7HYLDCEH4nBZHEiVBYVBFvOEsTipfjZfLskqVWrNdq9QawEbhKbzSVuAAZahsc0ANQEAAlK2XzS73Z7vdpGX7OqBusGQ3ywxEnEN0YkkcLxkmFXijoV03tlaqNVqdfr8IaJNxZGaLdwJBarebbfaHSx261O38Awh3LfKLHwr11hHYlYrKGxiphwl-PZnC50RURNxWTfZclnKh50wRdsxXPN1wLTdt3NJg9w4UsKyrDhawbNgmzPL4fUvf0e0DR9QxcEYrEoAYLESeibAsFEpwzGcZUKFgbi0cJzh0VAIHQQguwYJCdxKMtjVqRUBFrMtuBKbABF4T5mg7doSLMRA-FDZYrEjOw3CcFR3D6foXAAljcXA9iqE4sBuN4-jBNwYSWw9fduCYA9rWPR0OGky1BEVc9fSvUiEAFftZiSDxFmsICEncGNVkslMIMoOyHJ0PiBKEjoGDcz0OE89Dy0rGt60bc0AuoIKQuI7tNJvKKtORYdIXCZEUj6JxUrA6UCQyrieOypy8qMQsBDKDhkmNOwZvCY0LGdAQAHFuFEU0anq9TGu6RidIFBxwVfT8RiSPq2MG3gAFdiAAIzAVBuAAMyYdBUDAYRUBu5AAGtlRewTblEksJKkmSBDkhSlJUhldpZBAbBsdwaKS8NQw8aJKChCwXEY6w-BMy7rOuu7Huet6Pq+n7-sB4GIAK113OKryMPK7DKrw6qBECgRgsItSmT2xAoVRlFfH8CjkhUSgVERbqUUoqESYG2Vboep7Xvez7vt+gGwCBy5GcUKaWAWuaLeWwR1s2l5eB24XEZsJJFgA0yBWif8WrDRjBkmWJPyhUy0hA6dSfV8mtZekodHVdBkDAaswF1BP1TAenjZErcxPB-zIehxTlMdrtnZ99xrFRvGrBiSI9LcCxVdTQoNYp17Y-jxPk9T5B08z25Co8rzLR8u0-JqurBYvBHrzFtHJcCAc-BRygjNiZYRgiUym-S1vo47hOk5TtOM8NhnJum2b5tm621o26gtr4Euwqa5xrGBTYrHM8ELFfd8l82KjL8gdbzjAMi4HeNlKASB0DdG4JR1QEGVAANzAOqHQWgCTZ2QrufcI8jxj1PPnWS8ki5wyIjPcKEYdLmUjKiFYdhGKUUYZAwaMC4FgAQUgsAqD0GYOONgncqF9zsywjhKq5tpIkJhsXKeoUNK9hjKGAYfQbBy28K4JEsYnBrFYbKdh8DEH4BQWgjBWDTaX0WtfRat9bYP3ts-BRYR0Q0WDAkL8jCeQ6UmKjLwNdERwgiI3MOrEI6FAMZwoxJi+FYMHqzbyBCTz5z5gLVS08nbXm0gOdwKRZZxhrhvDwt49HhNgYY7hvCzECLiSVURFVcJNmSbVfmjiRYRT0sogyai-ErHBEsbwJTbJcVgMkXA1jcAWF4GAKAOgDAuXyqDXBCSbSEMkQXUhsNWmI2DKGYMgyhr2RGeEMZC0JlTJmXM4SizhGlUwvUiRxCoYbNkWk+RbSLCxkjKZfwkxuRQgojk46HtAkjE6nYfZmUjknNGZM6Zsz0DzImtctC+CVknnNsIbgHAPToU3KWFgLS5ENURr0Fx3z3F-N5LMcESU5aPgAjS5GYwIXDNGeM2FFyEVXJzihNCdTOYNIUDaLFOKSh4u4AS1J8MMnhQ+TGVxPyPGQipaLXwaj6FTGMrQ4JOxQlqw4qy457LznwsRfgQRYNJKPMLpsollCmoV1DElREONDIuByb-eI+yIlMD4jrGm+tMyVP4RQZgh40V+UWWK+SErCWvOJdeLwaiBSeC-JSuwnTFi3jWJ4dEel+h9G9WUsAvrUD+r1v9INpiQ2MFRb5J01zqAAA043StLom3+jhjI+HBJ4qEGaBx0UGJXHJStkRWBSL1EJVl9VUB9X66mFa-pVpiQIuthDJA8o4MaEo0baxSooTKpqE7k3drTX20yH4cnAmzVRWweNXBFo4aW8ttNl3RKqaGqQwhZASFqJiladjH4OztUe7oelT2pt7cqgdsw9J3iYnjACE6DLyynbqmdzc53FpfYut9sBhA6DdJw1AGC9DknDfWzdODo34uNGWDgLBZBumwNQYQZoD1C3beFZw3gP5vm-i+Tq-9qUYkGEBPGyM1ijDfE+m4uHdb4cI8RkopG2gDzvnbGodQ5CHk4+k7jTVegVwVRSi9oZXA+FXvSlEXhrDRHQxKPVWHoE4YXYpwNymSNkdgBR0eSTFk7r3fRnTDQONbOvLx6iJkBPPl-sJiznVBg-gAow0YUxwXTrSlA+dZa8OBveqYPziTI1bqC5uasIW3hhdbYewzijjL3gkwZH+f9Qz+CiNmx8YDut7Ky-1FzuXX0FfQEVxmNt77AdC3piL4Vs1NcfC1oTb4r143vOiWuvgvDurkyW9zAbK2FZBluqQ1ZqAsG09VmboH6uixXhLDGA4IRqMQ-jSilFbyOdAldfRbm8secrcaLQWhSOoMZoqc7JRTRsDrMs+tBF432t7LEWWJ71j+FUQ9iibhFjJDoisZDMRdsKYO8uoHIOdBg5EjJc75pQazdfij3HLsIwbDFr4D8yM5ajA6yCSI-hid8QPl3Y+vc4AfprXccVBLqNmgZ72HZA5xhWfMjXJiKJehOCsIL1Awuj493Tiuz9tbm2y4EPLwMHzlFf18RouijC4wjB13r7uJ8jeS-K9wWsZuLcRXIkrsTjhDKMLfH0SWzu46H1d2LgjRHvPqcZlG6XtWuMv26C4AUlB1hJCDAlb21v3WLDt5EGwjvC39Z+6U59QvI8i4N3ALzqmfPHZwVIAAUs8FPBm0+W9jFn1wkRPa9KybMVR7IXZvmWOMKEfgI+d3127o7jMKTGlWlIAQZDfcZ9ltnwfefXA+02P0YEGjVgOa8HPqPovDdL+YOUCHLBV-r83zdnvg4d8D9z17A-yjhQn7V+6psGHl9uHLOq5tXrrrXgvjHuTqDrcNGlWPzMKv5JDtDg2LwKtL7orrMH1hhtloNJlFYIqJgFoC5HqIJFAGGv5uPKgcIDDl3m8iStYGovjL0B4OsIBOEMoskEMDLBPsjF+E7hXmEkMvZEQSQWQanOuHcGVGIlzI0g-lDnQXWAwQmrKr+FnoxN4CKJwRRFzhsI+DohsLziAc5ulIQcQbAKQeQOQdIYoWgRUNgOJAIHLq-k4j0BoawdoRwQ+BZgsKMIYWMJRLYPRPssaOqOqMNpWpYdYXqPAbIfctzCgSwEofQfpowdeJMCiDjEZHEKwT1P+BRBiKvDzidPjOiHRGEREVEe+hITYbqLcPRgxuItzJIrQWkb7mMNem4AKOiC7GOIfl+IsBsAZGHhiFCBGFUeqC7tfuLnUXEcvpRhuvYcoaoUjqyCMKjBvHkX7MPhRGHtzoYSCBtqsKYZhulOEdMVAdHobjEZIY0WWM0fIUKisR0W4W0lkVsbkWsLsYUdkhnk1ijIAvZgZNrsIWAZlE4MaKgBgMgrgOqFQSVk6MaBIBINQPur7kxAZHLKmj1O6skDoiJr3lsSMGhklL0gMuCS5pCdCbCfCTIXcgKlVNuqieiWsWBmED7EZHxkkB8qop1MkLJlSeYVxFCTCegHCQiU0Uya0SyWiRie8SSmHi4DiWiK4DktEJ4LspvByECQBJEN-PsjUbALSRKRQYiRGsiayQqYjhyT0LYA4P+B4H4gvO1nyVnoiD4O4CjCsHjEafloDuKcguafyi0Y0iifKeybdhFOiIlvCLRJMHjMlMkP6QDmTkGeadKeuuinKWyekWoUZl-I6ZZp4N4K6YOnpOEF2kiD4PzqXmCXgQNhcdUQGembCfEYyWGeaBGXmZ0esA4HzmCJSm6aonLNYL0CkElLZmcfgbKJccaaaVTtKaGc8ebD2TaW2m-oTMWW4KWT4I9rMHRP4DRDEHpEZIlM4FMQuUGbcGwGiRdubNgHuOaASrWFIH2eyIOVyOZgOI+EMesMsJ1HCPYGsDqk5ucVAteXSQiSuYKmudabVJgYqZFtQk9ijCqbyUlt1DOU2ZBa2SaUGfScuQkTKfhLmRuXVluQWkMFOUEXRFMDYO1n+EMKeVyPYFjKmaTgRdBQwHeedudhwE+daK+Z6ObsheFIkEGByJEN+cqh+FjAiMsNycsCZAkJxUutxRKfCZQFBWadIVmUsTmeuVGW-omcln4OjmzljoOuiCqRJsiLxgmDXPsjMfXppcGfpY8bchzF2fBZGfmesT0KZHZbieqQSVqQOLxuqhsMlAZHED4A2eBbOYUK5W7oueadmY6H5eiYhVgQdE9l4I6Y+CXuMMZB8i5dcbMe5ZmV5ZlUQsZQFXaYCAOZyNBl4oOi7FsXmqZAwhOs5cKVAqlTARmdIXxQ+YJc+YxpDO+eJa-CPogOqajGMHRMkEGN6UGFMUNYboucVpadlWdhgVgaWfPCiDoQ+LBoGGAjjFonRGsJ1GBd9iIZQJcVtXADtYzAZdQfVdaSZe4asF4CdbeD4UBBdT0JoveI+JPp4LGCZBAgNYNC9ZVW5e9bxfeQJUJS+dNWJbadGWfg4BLKdcDZEB+EBTjBtmeV-Doplo2ZXlQIjfPjcW9TeYzGNQJfhObCJTNTjW-v9fjVOUDcYSDbsu6tRMGG+BOgBKAtYBVQzVVYufSbBQ8uublbNb2JMNRBLMjFPuzi4LsikFWQEXGNEJ1FrnDTTU9a9e5URV5YrbKQ1VgZDfPFrVZejLsj1FXDdXkfdTLVfsjYRQiXVftfRg7XxprcjC7RzjZeCIsHmryfLAMMjD7XXmlf7ajfxY+ZNZzdjZuX9erU7eHZjq7b+UkOJoYTyF+MyvDbKJbfLQiazebOzVNW+dnZRbnaHUlM7YXZHTgVrqjNmhLb4F+KopiFXXODoMQFoOnF2K9NwPdAAFZXAGCoKwBp3jWN1Z2YnBWqkjBhWalEkRRBLDEozoxfxsjATm1gHnAT1T0dAz3z2L0SlwAMDcBugd7VC1jmw8BOFNjhaq2sj9nSVDk-k4EARqI9RQj5L60qyj2QTj2T0qi30vSz0L3XCP0r310TXCVY19lAhfltX-K-lxjFmFJxBrD9DpDij4A6AQBwAmCPWzo51tIAC0iQoYTDywWaQNua45Ba+ytA9AjD2yx1BNAtnBoNT4Dgu5UwQBr4ROMDOl7AxIpINwEAgj148WsspeMspkX4X8Aw7WQYgwsQ+OJdOSbgLlijFwi9kAajsqb4S1E6SUGOOtH4xk7U3VjlfVOFtNcoCoMEy4uYa4MAtjTUcQwYCIfg-1eaVuv5BM62lcoxeR1NSVuFBBw0jkuUZqIT4GKQXaUG6amMDFdKv4Hg9g3I+ye8lMNR-cqjrdbS+5-GA93+B5WkGI1E8sSIQYi2aGFTUclMr1NT2TgYGiQwbivyF6oNPRw4YesQt4XT3piV9Dg2xaXCxiPC1aBIQz7S78e9gm8WK22SSaNE-akQoCrgZtKTPjkKbKpyHKpqhmGRPGARC2QDMGOkMY1EquWuIw3yUwOuxpEumzdTiMHSsTSI1mSZ0QIctg-z+Fjeam5GtTqe7hGO1EdE9jpeWjbiFmrgsscq1g96fSFzSz6UQ2+FS+Wz+MDgWJe+zTPsny94RS9gXRAh3jT1ZLaZJpwOcBSL3eudHDOSLsowAopt+jv5YwJR3WJ6wBjCxLoByzEBltgLxwWzqLWeHWcqWLUsACLsQeNc+MQEcIv8l+ydMe8LzevLjzTUea-eLTCA0+Kp1cdFHytgcrZhOWf2ltFLwL6jOiq8ej4t0Tqw1uPBfitZHT3giz8rpLnrSNaV3LlONjPr4UAww40mHs++819rDmdKGpPVjEI9F91JXE4hVhkhFBWzpxaiLOow4w9FNuRRgwE6g+RkujHqV5+Fdx9RSbyLHxtcOR0j6I5KNCviBh7i9cMYbLYB9NvtbuXbCxqrnTmhLrwYKak6FEANBh4tRhyQO28jNJ-tWzXg0d-asQQ72LkVIeiwDFuLju5j8julHlUAqrDu94Rkv8lNuhkVgCjgzp3ggBTEj4HbnL71i7E629+D3ybpJmJkkmAEt1Jt6l+GtdqrIttrzbIrejKqPQ6OilwoHBYoRb6Uj72lj7FbybRmWi6Hq1uj7s7WpkVZQoqwBHiISHgatdz1LZIHzNWz3WeS4YcIrWCWNl8ITHOhhHlzFtcbw1sJ5HvbILpeOM0mgbPD7gFmAwDgEm+JHyzL59kn07ERNdPHFHvY72NEgHdF6t7qbtX8Wef7NuQ7QH8jRn0FWz82D4T4QnBzh5HTNFFcMlFcpkQpRHUCV98D09SD99qDy9qrrrjgJZLpdr4CkYoKMYw9yQ0Q+yAg+AEAr0UE8AJnrICdxzRkgny2+9XSVZsHt4vQBMdmFDqQQAA */
  id: "crisisManagement",
  initial: "Init",
  states: {
   Init: {
      on: {
        FSC_CONNECTION_REQUEST: {
          target: 'FSCConnected',
          actions: ['logFSCConnectionRequest']
        },
        PSC_CONNECTION_REQUEST: {
          target: 'PSCConnected',
          actions: ['logPSCConnectionRequest']
        }
      },
      actions: {
        logFSCConnectionRequest: (context, event) => {
          console.log("FSC Connection Request received in Init state");
          // Additional logic for FSC connection request
        },
        logPSCConnectionRequest: (context, event) => {
          console.log("PSC Connection Request received in Init state");
          // Additional logic for PSC connection request
        }
      }
    },
    FSCConnected: {
  on: {
    PSC_CONNECTION_REQUEST: {
      target: 'CrisisDetailsExchange',
      actions: ['logPSCConnectionRequest']
    },
    // Add other events and their transitions here
  },
  entry: ['logEntryToFSCConnected'],
  exit: ['logExitFromFSCConnected'],
  // Define any services or activities that should run in this state
  actions: {
    logPSCConnectionRequest: (context, event) => {
      console.log("PSC Connection Request received in FSCConnected state");
      // Additional logic for handling PSC connection request
    },
    logEntryToFSCConnected: (context, event) => {
      console.log("Entering FSCConnected state");
      // Additional logic for entering FSCConnected state
    },
    logExitFromFSCConnected: (context, event) => {
      console.log("Exiting FSCConnected state");
      // Additional logic for exiting FSCConnected state
    },
  },
},

   PSCConnected: {
  on: {
    FSC_CONNECTION_REQUEST: {
      target: 'CrisisDetailsExchange',
      actions: ['logFSCConnectionRequest']
    },
    // Define additional events and their corresponding transitions here
  },
  entry: ['logEntryToPSCConnected'],
  exit: ['logExitFromPSCConnected'],
  // Define any services or activities that should be active in this state
  actions: {
    logFSCConnectionRequest: (context, event) => {
      console.log("FSC Connection Request received in PSCConnected state");
      // Additional logic for handling FSC connection request
    },
    logEntryToPSCConnected: (context, event) => {
      console.log("Entering PSCConnected state");
      // Additional logic for entering PSCConnected state
    },
    logExitFromPSCConnected: (context, event) => {
      console.log("Exiting PSCConnected state");
      // Additional logic for exiting PSCConnected state
    },
  },
},

  CrisisDetailsExchange: {
  on: {
    STATE_FIRE_TRUCK_NUMBER: {
      target: 'NumberOfFireTruckDefined',
      actions: ['logStateFireTruckNumber']
    },
    STATE_POLICE_VEHICLE_NUMBER: {
      target: 'NumberOfPoliceVehicleDefined',
      actions: ['logStatePoliceVehicleNumber']
    },
    ROUTE_FOR_FIRE_TRUCKS: 'RouteForFireTrucksDevelopment',
    ROUTE_FOR_POLICE_VEHICLES: 'RouteForPoliceVehiclesDevelopment'
  },
  entry: ['logEntryToCrisisDetailsExchange'],
  exit: ['logExitFromCrisisDetailsExchange'],
  actions: {
    logStateFireTruckNumber: (context, event) => {
      console.log("State Fire Truck Number specified in CrisisDetailsExchange state");
      // Additional logic for handling State Fire Truck Number
    },
    logStatePoliceVehicleNumber: (context, event) => {
      console.log("State Police Vehicle Number specified in CrisisDetailsExchange state");
      // Additional logic for handling State Police Vehicle Number
    },
    logEntryToCrisisDetailsExchange: (context, event) => {
      console.log("Entering CrisisDetailsExchange state");
      // Additional logic for entering CrisisDetailsExchange state
    },
    logExitFromCrisisDetailsExchange: (context, event) => {
      console.log("Exiting CrisisDetailsExchange state");
      // Additional logic for exiting CrisisDetailsExchange state
    }
  }
},

    Step3Coordination: {
  on: {
    ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment',
    NUMBER_OF_FIRE_TRUCK_DEFINED: 'NumberOfFireTruckDefined',
    NUMBER_OF_POLICE_VEHICLE_DEFINED: 'NumberOfPoliceVehicleDefined',
    STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation'
  },
  entry: ['logEntryToStep3Coordination'],
  exit: ['logExitFromStep3Coordination'],
  actions: {
    logEntryToStep3Coordination: (context, event) => {
      console.log("Entering Step3Coordination state");
      // Additional logic for entering Step3Coordination state
    },
    logExitFromStep3Coordination: (context, event) => {
      console.log("Exiting Step3Coordination state");
      // Additional logic for exiting Step3Coordination state
    }
  }
},

   NumberOfFireTruckDefined: {
  on: {
    ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment',
    NUMBER_OF_POLICE_VEHICLE_DEFINED: 'NumberOfPoliceVehicleDefined',
    STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation'
  },
  entry: ['logEntryToNumberOfFireTruckDefined'],
  exit: ['logExitFromNumberOfFireTruckDefined'],
  actions: {
    logEntryToNumberOfFireTruckDefined: (context, event) => {
      console.log("Entering NumberOfFireTruckDefined state");
      // Additional logic for entering NumberOfFireTruckDefined state
    },
    logExitFromNumberOfFireTruckDefined: (context, event) => {
      console.log("Exiting NumberOfFireTruckDefined state");
      // Additional logic for exiting NumberOfFireTruckDefined state
    }
  }
},

   NumberOfPoliceVehicleDefined: {
  on: {
    ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment',
    NUMBER_OF_FIRE_TRUCK_DEFINED: 'NumberOfFireTruckDefined',
    STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation'
  },
  entry: ['logEntryToNumberOfPoliceVehicleDefined'],
  exit: ['logExitFromNumberOfPoliceVehicleDefined'],
  actions: {
    logEntryToNumberOfPoliceVehicleDefined: (context, event) => {
      console.log("Entering NumberOfPoliceVehicleDefined state");
      // Additional logic for entering NumberOfPoliceVehicleDefined state
    },
    logExitFromNumberOfPoliceVehicleDefined: (context, event) => {
      console.log("Exiting NumberOfPoliceVehicleDefined state");
      // Additional logic for exiting NumberOfPoliceVehicleDefined state
    }
  }
},

    RoutePlanDevelopment: {
  on: {
    ROUTE_FOR_FIRE_TRUCKS_DEVELOPMENT: 'RouteForFireTrucksDevelopment',
    ROUTE_FOR_POLICE_VEHICLES_DEVELOPMENT: 'RouteForPoliceVehiclesDevelopment',
    STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation',
    NUMBER_OF_FIRE_TRUCK_DEFINED: 'NumberOfFireTruckDefined',
    NUMBER_OF_POLICE_VEHICLE_DEFINED: 'NumberOfPoliceVehicleDefined'
  },
  entry: ['logEntryToRoutePlanDevelopment'],
  exit: ['logExitFromRoutePlanDevelopment'],
  actions: {
    logEntryToRoutePlanDevelopment: (context, event) => {
      console.log("Entering RoutePlanDevelopment state");
      // Additional logic for entering RoutePlanDevelopment state
    },
    logExitFromRoutePlanDevelopment: (context, event) => {
      console.log("Exiting RoutePlanDevelopment state");
      // Additional logic for exiting RoutePlanDevelopment state
    }
  }
},

   Steps33a1_33a2Negotiation: {
  on: {
    ROUTE_FOR_FIRE_TRUCKS_DEVELOPMENT: 'RouteForFireTrucksDevelopment',
    ROUTE_FOR_POLICE_VEHICLES_DEVELOPMENT: 'RouteForPoliceVehiclesDevelopment',
    ROUTE_FOR_FIRE_TRUCKS_TO_BE_PROPOSED: 'RouteForFireTrucksToBeProposed',
    ROUTE_FOR_POLICE_VEHICLES_TO_BE_PROPOSED: 'RouteForPoliceVehiclesToBeProposed',
    ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment'
  },
  entry: ['logEntryToSteps33a1_33a2Negotiation'],
  exit: ['logExitFromSteps33a1_33a2Negotiation'],
  actions: {
    logEntryToSteps33a1_33a2Negotiation: (context, event) => {
      console.log("Entering Steps33a1_33a2Negotiation state");
      // Additional logic for entering Steps33a1_33a2Negotiation state
    },
    logExitFromSteps33a1_33a2Negotiation: (context, event) => {
      console.log("Exiting Steps33a1_33a2Negotiation state");
      // Additional logic for exiting Steps33a1_33a2Negotiation state
    }
  }
},

   RouteForFireTrucksDevelopment: {
  on: {
    FIRE_TRUCK_ROUTE_PROPOSED: 'RouteForFireTrucksToBeProposed',
    FIRE_TRUCK_ROUTE_FIXED: 'RouteForFireTrucksFixed',
    FIRE_TRUCK_ROUTE_APPROVED: 'RouteForFireTrucksApproved',
    RETURN_TO_NEGOTIATION: 'Steps33a1_33a2Negotiation'
  },
  entry: ['logEntryToRouteForFireTrucksDevelopment'],
  exit: ['logExitFromRouteForFireTrucksDevelopment'],
  actions: {
    logEntryToRouteForFireTrucksDevelopment: (context, event) => {
      console.log("Entering RouteForFireTrucksDevelopment state");
      // Additional logic for entering RouteForFireTrucksDevelopment state
    },
    logExitFromRouteForFireTrucksDevelopment: (context, event) => {
      console.log("Exiting RouteForFireTrucksDevelopment state");
      // Additional logic for exiting RouteForFireTrucksDevelopment state
    }
  }
},

    RouteForFireTrucksToBeProposed: {
  on: {
    FIRE_TRUCK_ROUTE_PROPOSAL_SUBMITTED: 'RouteForFireTrucksFixed',
    NEGOTIATION_REQUIRED: 'Steps33a1_33a2Negotiation',
    FIRE_TRUCK_ROUTE_APPROVAL_REQUESTED: 'RouteForFireTrucksApproved'
  },
  entry: ['logEntryToRouteForFireTrucksToBeProposed'],
  exit: ['logExitFromRouteForFireTrucksToBeProposed'],
  actions: {
    logEntryToRouteForFireTrucksToBeProposed: (context, event) => {
      console.log("Entering RouteForFireTrucksToBeProposed state");
      // Additional logic for entering RouteForFireTrucksToBeProposed state
    },
    logExitFromRouteForFireTrucksToBeProposed: (context, event) => {
      console.log("Exiting RouteForFireTrucksToBeProposed state");
      // Additional logic for exiting RouteForFireTrucksToBeProposed state
    }
  }
},

    RouteForFireTrucksFixed: {
  on: {
    FIRE_TRUCK_ROUTE_APPROVAL_REQUESTED: 'RouteForFireTrucksApproved',
    NEGOTIATION_REQUIRED: 'Steps33a1_33a2Negotiation',
    ROUTE_REVISION_REQUIRED: 'RouteForFireTrucksToBeProposed'
  },
  entry: ['logEntryToRouteForFireTrucksFixed'],
  exit: ['logExitFromRouteForFireTrucksFixed'],
  actions: {
    logEntryToRouteForFireTrucksFixed: (context, event) => {
      console.log("Entering RouteForFireTrucksFixed state");
      // Additional logic for entering RouteForFireTrucksFixed state
    },
    logExitFromRouteForFireTrucksFixed: (context, event) => {
      console.log("Exiting RouteForFireTrucksFixed state");
      // Additional logic for exiting RouteForFireTrucksFixed state
    }
  }
},

  RouteForFireTrucksApproved: {
  on: {
    DISPATCH_FIRE_TRUCKS: 'Step4Dispatching',
    REVISE_ROUTE: 'RouteForFireTrucksToBeProposed'
  },
  entry: ['logEntryToRouteForFireTrucksApproved'],
  exit: ['logExitFromRouteForFireTrucksApproved'],
  actions: {
    logEntryToRouteForFireTrucksApproved: (context, event) => {
      console.log("Entering RouteForFireTrucksApproved state");
      // Additional logic for entering RouteForFireTrucksApproved state
    },
    logExitFromRouteForFireTrucksApproved: (context, event) => {
      console.log("Exiting RouteForFireTrucksApproved state");
      // Additional logic for exiting RouteForFireTrucksApproved state
    }
  }
},

    RouteForPoliceVehiclesDevelopment: {
  on: {
    PROPOSE_ROUTE: 'RouteForPoliceVehiclesToBeProposed',
    FIX_ROUTE: 'RouteForPoliceVehiclesFixed',
    APPROVE_ROUTE: 'RouteForPoliceVehiclesApproved'
  },
  entry: ['logEntryToRouteForPoliceVehiclesDevelopment'],
  exit: ['logExitFromRouteForPoliceVehiclesDevelopment'],
  actions: {
    logEntryToRouteForPoliceVehiclesDevelopment: (context, event) => {
      console.log("Entering RouteForPoliceVehiclesDevelopment state");
      // Additional logic for entering RouteForPoliceVehiclesDevelopment state
    },
    logExitFromRouteForPoliceVehiclesDevelopment: (context, event) => {
      console.log("Exiting RouteForPoliceVehiclesDevelopment state");
      // Additional logic for exiting RouteForPoliceVehiclesDevelopment state
    }
  }
},

   RouteForPoliceVehiclesToBeProposed: {
  on: {
    ROUTE_PROPOSED: 'RouteForPoliceVehiclesFixed',
    ROUTE_REJECTED: 'RoutePlanDevelopment'
  },
  entry: ['logEntryToRouteForPoliceVehiclesToBeProposed'],
  exit: ['logExitFromRouteForPoliceVehiclesToBeProposed'],
  actions: {
    logEntryToRouteForPoliceVehiclesToBeProposed: (context, event) => {
      console.log("Entering RouteForPoliceVehiclesToBeProposed state");
      // Additional logic for entering RouteForPoliceVehiclesToBeProposed state
    },
    logExitFromRouteForPoliceVehiclesToBeProposed: (context, event) => {
      console.log("Exiting RouteForPoliceVehiclesToBeProposed state");
      // Additional logic for exiting RouteForPoliceVehiclesToBeProposed state
    }
  }
},

   RouteForPoliceVehiclesFixed: {
  on: {
    FSC_AGREEMENT: {
      target: 'RouteForPoliceVehiclesApproved',
      cond: 'isFSCAgree'
    },
    FSC_DISAGREEMENT: 'RouteForPoliceVehiclesToBeProposed'
  },
  entry: ['logEntryToRouteForPoliceVehiclesFixed'],
  exit: ['logExitFromRouteForPoliceVehiclesFixed'],
  actions: {
    logEntryToRouteForPoliceVehiclesFixed: (context, event) => {
      console.log("Entering RouteForPoliceVehiclesFixed state");
      // Additional logic for entering RouteForPoliceVehiclesFixed state
    },
    logExitFromRouteForPoliceVehiclesFixed: (context, event) => {
      console.log("Exiting RouteForPoliceVehiclesFixed state");
      // Additional logic for exiting RouteForPoliceVehiclesFixed state
    },
    isFSCAgree: (context, event) => {
      // Logic to determine if FSC agrees
      // Return true if agree, false otherwise
    }
  }
},

   RouteForPoliceVehiclesApproved: {
  on: {
    PROCEED_TO_DISPATCHING: 'Step4Dispatching'
  },
  entry: ['logEntryToRouteForPoliceVehiclesApproved'],
  exit: ['logExitFromRouteForPoliceVehiclesApproved'],
  actions: {
    logEntryToRouteForPoliceVehiclesApproved: (context, event) => {
      console.log("Entering RouteForPoliceVehiclesApproved state");
      // Additional logic for entering RouteForPoliceVehiclesApproved state
    },
    logExitFromRouteForPoliceVehiclesApproved: (context, event) => {
      console.log("Exiting RouteForPoliceVehiclesApproved state");
      // Additional logic for exiting RouteForPoliceVehiclesApproved state
    }
  }
},

    Step4Dispatching: {
  on: {
    FIRE_TRUCK_DISPATCHED: {
      target: 'AllFireTrucksDispatched',
      cond: 'checkAllFireTrucksDispatched'
    },
    POLICE_VEHICLE_DISPATCHED: {
      target: 'AllPoliceVehiclesDispatched',
      cond: 'checkAllPoliceVehiclesDispatched'
    },
    DISPATCH_COMPLETE: 'Step5Arrival'
  },
  entry: ['logEntryToStep4Dispatching'],
  exit: ['logExitFromStep4Dispatching'],
  actions: {
    logEntryToStep4Dispatching: (context, event) => {
      console.log("Entering Step4Dispatching state");
      // Additional logic for entering Step4Dispatching state
    },
    logExitFromStep4Dispatching: (context, event) => {
      console.log("Exiting Step4Dispatching state");
      // Additional logic for exiting Step4Dispatching state
    },
    checkAllFireTrucksDispatched: (context, event) => {
      // Logic to check if all fire trucks have been dispatched
    },
    checkAllPoliceVehiclesDispatched: (context, event) => {
      // Logic to check if all police vehicles have been dispatched
    }
  }
},

AllFireTrucksDispatched: {
  on: {
    POLICE_VEHICLE_DISPATCHED: {
      target: 'AllPoliceVehiclesDispatched',
      cond: 'checkAllPoliceVehiclesDispatched'
    },
    ALL_VEHICLES_DISPATCHED: 'Step5Arrival'
  },
  entry: ['logEntryToAllFireTrucksDispatched'],
  exit: ['logExitFromAllFireTrucksDispatched'],
  actions: {
    logEntryToAllFireTrucksDispatched: (context, event) => {
      console.log("Entering AllFireTrucksDispatched state");
      // Additional logic for entering AllFireTrucksDispatched state
    },
    logExitFromAllFireTrucksDispatched: (context, event) => {
      console.log("Exiting AllFireTrucksDispatched state");
      // Additional logic for exiting AllFireTrucksDispatched state
    },
    checkAllPoliceVehiclesDispatched: (context, event) => {
      // Logic to check if all police vehicles have been dispatched
    }
  }
},

 AllPoliceVehiclesDispatched: {
  on: {
    FIRE_TRUCK_DISPATCHED: {
      target: 'AllFireTrucksDispatched',
      cond: 'checkAllFireTrucksDispatched'
    },
    ALL_VEHICLES_DISPATCHED: 'Step5Arrival'
  },
  entry: ['logEntryToAllPoliceVehiclesDispatched'],
  exit: ['logExitFromAllPoliceVehiclesDispatched'],
  actions: {
    logEntryToAllPoliceVehiclesDispatched: (context, event) => {
      console.log("Entering AllPoliceVehiclesDispatched state");
      // Additional logic for entering AllPoliceVehiclesDispatched state
    },
    logExitFromAllPoliceVehiclesDispatched: (context, event) => {
      console.log("Exiting AllPoliceVehiclesDispatched state");
      // Additional logic for exiting AllPoliceVehiclesDispatched state
    },
    checkAllFireTrucksDispatched: (context, event) => {
      // Logic to check if all fire trucks have been dispatched
    }
  }
},

   Step5Arrival: {
  on: {
    FIRE_TRUCK_ARRIVED: {
      target: 'FireTrucksArriving',
      actions: ['logFireTruckArrival']
    },
    POLICE_VEHICLE_ARRIVED: {
      target: 'PoliceVehiclesArriving',
      actions: ['logPoliceVehicleArrival']
    },
    ALL_VEHICLES_ARRIVED: 'CompletionOfObjectives'
  },
  entry: ['logEntryToStep5Arrival'],
  exit: ['logExitFromStep5Arrival'],
  actions: {
    logEntryToStep5Arrival: (context, event) => {
      console.log("Entering Step5Arrival state");
      // Additional logic for entering Step5Arrival state
    },
    logExitFromStep5Arrival: (context, event) => {
      console.log("Exiting Step5Arrival state");
      // Additional logic for exiting Step5Arrival state
    },
    logFireTruckArrival: (context, event) => {
      console.log("Fire truck arrived");
      // Additional logic for fire truck arrival
    },
    logPoliceVehicleArrival: (context, event) => {
      console.log("Police vehicle arrived");
      // Additional logic for police vehicle arrival
    }
  }
},

FireTrucksArriving: {
  on: {
    FIRE_TRUCK_ARRIVED: {
      target: 'AllFireTrucksArrived',
      actions: ['logFireTruckArrived']
    },
    POLICE_VEHICLE_ARRIVED: {
      target: 'PoliceVehiclesArriving',
      actions: ['logPoliceVehicleArrival']
    },
    ALL_FIRE_TRUCKS_ARRIVED: {
      target: 'FireTrucksArrival',
      actions: ['logAllFireTrucksArrived']
    }
  },
  entry: ['logEntryToFireTrucksArriving'],
  exit: ['logExitFromFireTrucksArriving'],
  actions: {
    logEntryToFireTrucksArriving: (context, event) => {
      console.log("Entering FireTrucksArriving state");
      // Additional logic for entering FireTrucksArriving state
    },
    logExitFromFireTrucksArriving: (context, event) => {
      console.log("Exiting FireTrucksArriving state");
      // Additional logic for exiting FireTrucksArriving state
    },
    logFireTruckArrived: (context, event) => {
      console.log("Fire truck arrived");
      // Additional logic for fire truck arrival
    },
    logPoliceVehicleArrival: (context, event) => {
      console.log("Police vehicle arrived in FireTrucksArriving state");
      // Additional logic for police vehicle arrival during fire trucks arriving
    },
    logAllFireTrucksArrived: (context, event) => {
      console.log("All fire trucks have arrived");
      // Additional logic for when all fire trucks have arrived
    }
  }
},

  AllFireTrucksArrived: {
  on: {
    POLICE_VEHICLE_ARRIVED: {
      target: 'PoliceVehiclesArriving',
      actions: ['logPoliceVehicleArrival']
    },
    ALL_POLICE_VEHICLES_ARRIVED: {
      target: 'PoliceVehiclesArrival',
      actions: ['logAllPoliceVehiclesArrived']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    }
  },
  entry: ['logEntryToAllFireTrucksArrived'],
  exit: ['logExitFromAllFireTrucksArrived'],
  actions: {
    logEntryToAllFireTrucksArrived: (context, event) => {
      console.log("Entering AllFireTrucksArrived state");
      // Additional logic for entering AllFireTrucksArrived state
    },
    logExitFromAllFireTrucksArrived: (context, event) => {
      console.log("Exiting AllFireTrucksArrived state");
      // Additional logic for exiting AllFireTrucksArrived state
    },
    logPoliceVehicleArrival: (context, event) => {
      console.log("Police vehicle arrived in AllFireTrucksArrived state");
      // Additional logic for police vehicle arrival during all fire trucks arrived
    },
    logAllPoliceVehiclesArrived: (context, event) => {
      console.log("All police vehicles have arrived");
      // Additional logic for when all police vehicles have arrived
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    }
  }
},

 FireTrucksArrival: {
  on: {
    POLICE_VEHICLES_ARRIVING: {
      target: 'PoliceVehiclesArriving',
      actions: ['logPoliceVehiclesArriving']
    },
    ALL_POLICE_VEHICLES_ARRIVED: {
      target: 'PoliceVehiclesArrival',
      actions: ['logAllPoliceVehiclesArrived']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    }
  },
  initial: 'FireTrucksArriving',
  states: {
    FireTrucksArriving: {
      on: {
        ALL_FIRE_TRUCKS_ARRIVED: {
          target: 'AllFireTrucksArrived',
          actions: ['logAllFireTrucksArrived']
        }
      },
      entry: ['logEntryToFireTrucksArriving'],
      exit: ['logExitFromFireTrucksArriving'],
      actions: {
        logEntryToFireTrucksArriving: (context, event) => {
          console.log("Entering FireTrucksArriving state");
          // Additional logic for entering FireTrucksArriving state
        },
        logExitFromFireTrucksArriving: (context, event) => {
          console.log("Exiting FireTrucksArriving state");
          // Additional logic for exiting FireTrucksArriving state
        },
        logAllFireTrucksArrived: (context, event) => {
          console.log("All fire trucks have arrived");
          // Additional logic for all fire trucks arriving
        }
      }
    },
    AllFireTrucksArrived: {
      on: {
        // Transitions and actions for AllFireTrucksArrived state
      },
      entry: ['logEntryToAllFireTrucksArrived'],
      exit: ['logExitFromAllFireTrucksArrived'],
      actions: {
        // Actions for AllFireTrucksArrived state
      }
    }
  },
  entry: ['logEntryToFireTrucksArrival'],
  exit: ['logExitFromFireTrucksArrival'],
  actions: {
    logEntryToFireTrucksArrival: (context, event) => {
      console.log("Entering FireTrucksArrival state");
      // Additional logic for entering FireTrucksArrival state
    },
    logExitFromFireTrucksArrival: (context, event) => {
      console.log("Exiting FireTrucksArrival state");
      // Additional logic for exiting FireTrucksArrival state
    },
    logPoliceVehiclesArriving: (context, event) => {
      console.log("Police vehicles are arriving");
      // Additional logic for police vehicles arriving
    },
    logAllPoliceVehiclesArrived: (context, event) => {
      console.log("All police vehicles have arrived");
      // Additional logic for all police vehicles arrived
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    }
  }
},

 PoliceVehiclesArriving: {
  on: {
    ALL_POLICE_VEHICLES_ARRIVED: {
      target: 'AllPoliceVehiclesArrived',
      actions: ['logAllPoliceVehiclesArrived']
    },
    FIRE_TRUCKS_ARRIVING: {
      target: 'FireTrucksArriving',
      actions: ['logFireTrucksArriving']
    },
    ALL_FIRE_TRUCKS_ARRIVED: {
      target: 'FireTrucksArrival',
      actions: ['logAllFireTrucksArrived']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    }
  },
  entry: ['logEntryToPoliceVehiclesArriving'],
  exit: ['logExitFromPoliceVehiclesArriving'],
  actions: {
    logEntryToPoliceVehiclesArriving: (context, event) => {
      console.log("Entering PoliceVehiclesArriving state");
      // Additional logic for entering PoliceVehiclesArriving state
    },
    logExitFromPoliceVehiclesArriving: (context, event) => {
      console.log("Exiting PoliceVehiclesArriving state");
      // Additional logic for exiting PoliceVehiclesArriving state
    },
    logAllPoliceVehiclesArrived: (context, event) => {
      console.log("All police vehicles have arrived");
      // Additional logic for all police vehicles arrived
    },
    logFireTrucksArriving: (context, event) => {
      console.log("Fire trucks are arriving");
      // Additional logic for fire trucks arriving
    },
    logAllFireTrucksArrived: (context, event) => {
      console.log("All fire trucks have arrived");
      // Additional logic for all fire trucks arrived
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    }
  }
},

   AllPoliceVehiclesArrived: {
  on: {
    FIRE_TRUCKS_ARRIVING: {
      target: 'FireTrucksArriving',
      actions: ['logFireTrucksArriving']
    },
    ALL_FIRE_TRUCKS_ARRIVED: {
      target: 'FireTrucksArrival',
      actions: ['logAllFireTrucksArrived']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    },
    CRISIS_LESS_SEVERE: {
      target: 'CompletionOfObjectives',
      actions: ['logCrisisLessSevere']
    }
  },
  entry: ['logEntryToAllPoliceVehiclesArrived'],
  exit: ['logExitFromAllPoliceVehiclesArrived'],
  actions: {
    logEntryToAllPoliceVehiclesArrived: (context, event) => {
      console.log("Entering AllPoliceVehiclesArrived state");
      // Additional logic for entering AllPoliceVehiclesArrived state
    },
    logExitFromAllPoliceVehiclesArrived: (context, event) => {
      console.log("Exiting AllPoliceVehiclesArrived state");
      // Additional logic for exiting AllPoliceVehiclesArrived state
    },
    logFireTrucksArriving: (context, event) => {
      console.log("Fire trucks are arriving");
      // Additional logic for fire trucks arriving
    },
    logAllFireTrucksArrived: (context, event) => {
      console.log("All fire trucks have arrived");
      // Additional logic for all fire trucks arrived
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    },
    logCrisisLessSevere: (context, event) => {
      console.log("Crisis has become less severe");
      // Additional logic for handling a less severe crisis
    }
  }
},

    PoliceVehiclesArrival: {
  on: {
    POLICE_VEHICLES_ARRIVING: {
      target: 'PoliceVehiclesArriving',
      actions: ['logPoliceVehiclesArriving']
    },
    ALL_POLICE_VEHICLES_ARRIVED: {
      target: 'AllPoliceVehiclesArrived',
      actions: ['logAllPoliceVehiclesArrived']
    },
    FIRE_TRUCKS_ARRIVAL: {
      target: 'FireTrucksArrival',
      actions: ['logFireTrucksArrival']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    },
    CRISIS_LESS_SEVERE: {
      target: 'CompletionOfObjectives',
      actions: ['logCrisisLessSevere']
    }
  },
  entry: ['logEntryToPoliceVehiclesArrival'],
  exit: ['logExitFromPoliceVehiclesArrival'],
  actions: {
    logEntryToPoliceVehiclesArrival: (context, event) => {
      console.log("Entering PoliceVehiclesArrival state");
      // Additional logic for entering PoliceVehiclesArrival state
    },
    logExitFromPoliceVehiclesArrival: (context, event) => {
      console.log("Exiting PoliceVehiclesArrival state");
      // Additional logic for exiting PoliceVehiclesArrival state
    },
    logPoliceVehiclesArriving: (context, event) => {
      console.log("Police vehicles are arriving");
      // Additional logic for police vehicles arriving
    },
    logAllPoliceVehiclesArrived: (context, event) => {
      console.log("All police vehicles have arrived");
      // Additional logic for all police vehicles arrived
    },
    logFireTrucksArrival: (context, event) => {
      console.log("Fire trucks have arrived");
      // Additional logic for fire trucks arrival
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    },
    logCrisisLessSevere: (context, event) => {
      console.log("Crisis has become less severe");
      // Additional logic for handling a less severe crisis
    }
  }
},

  CompletionOfObjectives: {
  on: {
    CRISIS_LESS_SEVERE: {
      target: 'Step5Arrival',
      actions: ['logCrisisLessSevere']
    },
    OBJECTIVES_COMPLETED: {
      target: 'EndOfCrisis',
      actions: ['logObjectivesCompleted']
    },
    CRISIS_MORE_SEVERE: {
      target: 'CrisisDetailsExchange',
      actions: ['logCrisisMoreSevere']
    }
  },
  entry: ['logEntryToCompletionOfObjectives'],
  exit: ['logExitFromCompletionOfObjectives'],
  actions: {
    logEntryToCompletionOfObjectives: (context, event) => {
      console.log("Entering CompletionOfObjectives state");
      // Additional logic for entering CompletionOfObjectives state
    },
    logExitFromCompletionOfObjectives: (context, event) => {
      console.log("Exiting CompletionOfObjectives state");
      // Additional logic for exiting CompletionOfObjectives state
    },
    logCrisisLessSevere: (context, event) => {
      console.log("Crisis has become less severe");
      // Additional logic for handling a less severe crisis
    },
    logObjectivesCompleted: (context, event) => {
      console.log("All objectives have been completed");
      // Additional logic for when all objectives are completed
    },
    logCrisisMoreSevere: (context, event) => {
      console.log("Crisis has become more severe");
      // Additional logic for handling a more severe crisis
    }
  }
},

 EndOfCrisis: {
  type: 'final',
  entry: ['logEntryToEndOfCrisis'],
  exit: ['logExitFromEndOfCrisis'],
  actions: {
    logEntryToEndOfCrisis: (context, event) => {
      console.log("Entering EndOfCrisis state");
      // Additional logic for entering EndOfCrisis state
    },
    logExitFromEndOfCrisis: (context, event) => {
      console.log("Exiting EndOfCrisis state");
      // Additional logic for exiting EndOfCrisis state
    }
  }
},

  },
});

const service = interpret(crisisManagementMachine).onTransition((state) =>
  console.log(state.value)
);

service.start();
