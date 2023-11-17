import { createMachine, interpret } from "xstate";

const logFSCConnectionRequest = (context: any, event: any) => {
  console.log("FSC Connection Request received in Init state");
  // Additional logic for FSC connection request
};
const logPSCConnectionRequestInInit = (context: any, event: any) => {
  console.log("PSC Connection Request received in Init state");
  // Additional logic for PSC connection request in Init state
};
const logPSCConnectionRequestInFSCConnected = (context: any, event: any) => {
  console.log("PSC Connection Request received in FSCConnected state");
  // Additional logic for PSC connection request in FSCConnected state
};
const logEntryToFSCConnected = (context: any, event: any) => {
  console.log("Entering FSCConnected state");
  // Additional logic for entering FSCConnected state
};
const logExitFromFSCConnected = (context: any, event: any) => {
  console.log("Exiting FSCConnected state");
  // Additional logic for exiting FSCConnected state
};
const logFSCConnectionRequestInPSCConnected = (context: any, event: any) => {
  console.log("FSC Connection Request received in PSCConnected state");
  // Additional logic for handling FSC connection request
};
const logEntryToPSCConnected = (context: any, event: any) => {
  console.log("Entering PSCConnected state");
  // Additional logic for entering PSCConnected state
};
const logExitFromPSCConnected = (context: any, event: any) => {
  console.log("Exiting PSCConnected state");
  // Additional logic for exiting PSCConnected state
};
const logStateFireTruckNumber = (context: any, event: any) => {
  console.log("State Fire Truck Number specified in CrisisDetailsExchange state");
  // Additional logic for handling State Fire Truck Number
};
const logStatePoliceVehicleNumber = (context: any, event: any) => {
  console.log("State Police Vehicle Number specified in CrisisDetailsExchange state");
  // Additional logic for handling State Police Vehicle Number
};
const logEntryToCrisisDetailsExchange = (context: any, event: any) => {
  console.log("Entering CrisisDetailsExchange state");
  // Additional logic for entering CrisisDetailsExchange state
};
const logExitFromCrisisDetailsExchange = (context: any, event: any) => {
  console.log("Exiting CrisisDetailsExchange state");
  // Additional logic for exiting CrisisDetailsExchange state
};
const logEntryToStep3Coordination = (context: any, event: any) => {
  console.log("Entering Step3Coordination state");
  // Additional logic for entering Step3Coordination state
};
const logExitFromStep3Coordination = (context: any, event: any) => {
  console.log("Exiting Step3Coordination state");
  // Additional logic for exiting Step3Coordination state
};
const logEntryToNumberOfFireTruckDefined = (context: any, event: any) => {
  console.log("Entering NumberOfFireTruckDefined state");
  // Additional logic for entering NumberOfFireTruckDefined state
};
const logExitFromNumberOfFireTruckDefined = (context: any, event: any) => {
  console.log("Exiting NumberOfFireTruckDefined state");
  // Additional logic for exiting NumberOfFireTruckDefined state
};
const logEntryToNumberOfPoliceVehicleDefined = (context: any, event: any) => {
  console.log("Entering NumberOfPoliceVehicleDefined state");
  // Additional logic for entering NumberOfPoliceVehicleDefined state
};
const logExitFromNumberOfPoliceVehicleDefined = (context: any, event: any) => {
  console.log("Exiting NumberOfPoliceVehicleDefined state");
  // Additional logic for exiting NumberOfPoliceVehicleDefined state
};
const logEntryToRoutePlanDevelopment = (context: any, event: any) => {
  console.log("Entering RoutePlanDevelopment state");
  // Additional logic for entering RoutePlanDevelopment state
};
const logExitFromRoutePlanDevelopment = (context: any, event: any) => {
  console.log("Exiting RoutePlanDevelopment state");
  // Additional logic for exiting RoutePlanDevelopment state
};
const logEntryToSteps33a1_33a2Negotiation = (context: any, event: any) => {
  console.log("Entering Steps33a1_33a2Negotiation state");
  // Additional logic for entering Steps33a1_33a2Negotiation state
};
const logExitFromSteps33a1_33a2Negotiation = (context: any, event: any) => {
  console.log("Exiting Steps33a1_33a2Negotiation state");
  // Additional logic for exiting Steps33a1_33a2Negotiation state
};
const logEntryToRouteForFireTrucksDevelopment = (context: any, event: any) => {
  console.log("Entering RouteForFireTrucksDevelopment state");
  // Additional logic for entering RouteForFireTrucksDevelopment state
};
const logExitFromRouteForFireTrucksDevelopment = (context: any, event: any) => {
  console.log("Exiting RouteForFireTrucksDevelopment state");
  // Additional logic for exiting RouteForFireTrucksDevelopment state
};
const logEntryToRouteForFireTrucksToBeProposed = (context: any, event: any) => {
  console.log("Entering RouteForFireTrucksToBeProposed state");
  // Additional logic for entering RouteForFireTrucksToBeProposed state
};
const logExitFromRouteForFireTrucksToBeProposed = (context: any, event: any) => {
  console.log("Exiting RouteForFireTrucksToBeProposed state");
  // Additional logic for exiting RouteForFireTrucksToBeProposed state
};
const logEntryToRouteForFireTrucksFixed = (context: any, event: any) => {
  console.log("Entering RouteForFireTrucksFixed state");
  // Additional logic for entering RouteForFireTrucksFixed state
};
const logExitFromRouteForFireTrucksFixed = (context: any, event: any) => {
  console.log("Exiting RouteForFireTrucksFixed state");
  // Additional logic for exiting RouteForFireTrucksFixed state
};
const logEntryToRouteForFireTrucksApproved = (context: any, event: any) => {
  console.log("Entering RouteForFireTrucksApproved state");
  // Additional logic for entering RouteForFireTrucksApproved state
};
const logExitFromRouteForFireTrucksApproved = (context: any, event: any) => {
  console.log("Exiting RouteForFireTrucksApproved state");
  // Additional logic for exiting RouteForFireTrucksApproved state
};
const logEntryToRouteForPoliceVehiclesDevelopment = (context: any, event: any) => {
  console.log("Entering RouteForPoliceVehiclesDevelopment state");
  // Additional logic for entering RouteForPoliceVehiclesDevelopment state
};
const logExitFromRouteForPoliceVehiclesDevelopment = (context: any, event: any) => {
  console.log("Exiting RouteForPoliceVehiclesDevelopment state");
  // Additional logic for exiting RouteForPoliceVehiclesDevelopment state
};
const logEntryToRouteForPoliceVehiclesToBeProposed = (context: any, event: any) => {
  console.log("Entering RouteForPoliceVehiclesToBeProposed state");
  // Additional logic for entering RouteForPoliceVehiclesToBeProposed state
};
const logExitFromRouteForPoliceVehiclesToBeProposed = (context: any, event: any) => {
  console.log("Exiting RouteForPoliceVehiclesToBeProposed state");
  // Additional logic for exiting RouteForPoliceVehiclesToBeProposed state
};
const logEntryToRouteForPoliceVehiclesFixed = (context: any, event: any) => {
  console.log("Entering RouteForPoliceVehiclesFixed state");
  // Additional logic for entering RouteForPoliceVehiclesFixed state
};
const logExitFromRouteForPoliceVehiclesFixed = (context: any, event: any) => {
  console.log("Exiting RouteForPoliceVehiclesFixed state");
  // Additional logic for exiting RouteForPoliceVehiclesFixed state
};
const isFSCAgree = (context: any, event: any) => {
  // Logic to determine if FSC agrees
  // Return true if agree, false otherwise
};
const logEntryToRouteForPoliceVehiclesApproved = (context: any, event: any) => {
  console.log("Entering RouteForPoliceVehiclesApproved state");
  // Additional logic for entering RouteForPoliceVehiclesApproved state
};
const logExitFromRouteForPoliceVehiclesApproved = (context: any, event: any) => {
  console.log("Exiting RouteForPoliceVehiclesApproved state");
  // Additional logic for exiting RouteForPoliceVehiclesApproved state
};
const logEntryToStep4Dispatching = (context: any, event: any) => {
  console.log("Entering Step4Dispatching state");
  // Additional logic for entering Step4Dispatching state
};
const logExitFromStep4Dispatching = (context: any, event: any) => {
  console.log("Exiting Step4Dispatching state");
  // Additional logic for exiting Step4Dispatching state
};
const checkAllFireTrucksDispatched = (context: any, event: any) => {
  // Logic to check if all fire trucks have been dispatched
};
const checkAllPoliceVehiclesDispatched = (context: any, event: any) => {
  // Logic to check if all police vehicles have been dispatched
};
const logEntryToAllFireTrucksDispatched = (context: any, event: any) => {
  console.log("Entering AllFireTrucksDispatched state");
  // Additional logic for entering AllFireTrucksDispatched state
};
const logExitFromAllFireTrucksDispatched = (context: any, event: any) => {
  console.log("Exiting AllFireTrucksDispatched state");
  // Additional logic for exiting AllFireTrucksDispatched state
};
const checkAllPoliceVehiclesDispatched2 = (context: any, event: any) => {
  // Logic to check if all police vehicles have been dispatched
};
const logEntryToAllPoliceVehiclesDispatched = (context: any, event: any) => {
  console.log("Entering AllPoliceVehiclesDispatched state");
  // Additional logic for entering AllPoliceVehiclesDispatched state
};
const logExitFromAllPoliceVehiclesDispatched = (context: any, event: any) => {
  console.log("Exiting AllPoliceVehiclesDispatched state");
  // Additional logic for exiting AllPoliceVehiclesDispatched state
};
const checkAllFireTrucksDispatched2 = (context: any, event: any) => {
  // Logic to check if all fire trucks have been dispatched
};
const logEntryToStep5Arrival = (context: any, event: any) => {
  console.log("Entering Step5Arrival state");
  // Additional logic for entering Step5Arrival state
};
const logExitFromStep5Arrival = (context: any, event: any) => {
  console.log("Exiting Step5Arrival state");
  // Additional logic for exiting Step5Arrival state
};
const logFireTruckArrival = (context: any, event: any) => {
  console.log("Fire truck arrived");
  // Additional logic for fire truck arrival
};
const logPoliceVehicleArrival = (context: any, event: any) => {
  console.log("Police vehicle arrived");
  // Additional logic for police vehicle arrival
};
const logEntryToFireTrucksArriving = (context: any, event: any) => {
  console.log("Entering FireTrucksArriving state");
  // Additional logic for entering FireTrucksArriving state
};
const logExitFromFireTrucksArriving = (context: any, event: any) => {
  console.log("Exiting FireTrucksArriving state");
  // Additional logic for exiting FireTrucksArriving state
};
const logFireTruckArrived = (context: any, event: any) => {
  console.log("Fire truck arrived");
  // Additional logic for fire truck arrival
};
const logPoliceVehicleArrival2 = (context: any, event: any) => {
  console.log("Police vehicle arrived in FireTrucksArriving state");
  // Additional logic for police vehicle arrival during fire trucks arriving
};
const logAllFireTrucksArrived = (context: any, event: any) => {
  console.log("All fire trucks have arrived");
  // Additional logic for when all fire trucks have arrived
};
const logEntryToAllFireTrucksArrived = (context: any, event: any) => {
  console.log("Entering AllFireTrucksArrived state");
  // Additional logic for entering AllFireTrucksArrived state
};
const logExitFromAllFireTrucksArrived = (context: any, event: any) => {
  console.log("Exiting AllFireTrucksArrived state");
  // Additional logic for exiting AllFireTrucksArrived state
};
const logPoliceVehicleArrival3 = (context: any, event: any) => {
  console.log("Police vehicle arrived in AllFireTrucksArrived state");
  // Additional logic for police vehicle arrival during all fire trucks arrived
};
const logAllPoliceVehiclesArrived = (context: any, event: any) => {
  console.log("All police vehicles have arrived");
  // Additional logic for when all police vehicles have arrived
};
const logCrisisMoreSevere = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logEntryToFireTrucksArriving2 = (context: any, event: any) => {
  console.log("Entering FireTrucksArriving state");
  // Additional logic for entering FireTrucksArriving state
};
const logExitFromFireTrucksArriving2 = (context: any, event: any) => {
  console.log("Exiting FireTrucksArriving state");
  // Additional logic for exiting FireTrucksArriving state
};
const logAllFireTrucksArrived2 = (context: any, event: any) => {
  console.log("All fire trucks have arrived");
  // Additional logic for all fire trucks arriving
};
const logEntryToFireTrucksArrival = (context: any, event: any) => {
  console.log("Entering FireTrucksArrival state");
  // Additional logic for entering FireTrucksArrival state
};
const logExitFromFireTrucksArrival = (context: any, event: any) => {
  console.log("Exiting FireTrucksArrival state");
  // Additional logic for exiting FireTrucksArrival state
};
const logPoliceVehiclesArriving = (context: any, event: any) => {
  console.log("Police vehicles are arriving");
  // Additional logic for police vehicles arriving
};
const logAllPoliceVehiclesArrived2 = (context: any, event: any) => {
  console.log("All police vehicles have arrived");
  // Additional logic for all police vehicles arrived
};
const logCrisisMoreSevere2 = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logEntryToPoliceVehiclesArriving = (context: any, event: any) => {
  console.log("Entering PoliceVehiclesArriving state");
  // Additional logic for entering PoliceVehiclesArriving state
};
const logExitFromPoliceVehiclesArriving = (context: any, event: any) => {
  console.log("Exiting PoliceVehiclesArriving state");
  // Additional logic for exiting PoliceVehiclesArriving state
};
const logAllPoliceVehiclesArrived3 = (context: any, event: any) => {
  console.log("All police vehicles have arrived");
  // Additional logic for all police vehicles arrived
};
const logFireTrucksArriving = (context: any, event: any) => {
  console.log("Fire trucks are arriving");
  // Additional logic for fire trucks arriving
};
const logAllFireTrucksArrived3 = (context: any, event: any) => {
  console.log("All fire trucks have arrived");
  // Additional logic for all fire trucks arrived
};
const logCrisisMoreSevere3 = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logEntryToAllPoliceVehiclesArrived = (context: any, event: any) => {
  console.log("Entering AllPoliceVehiclesArrived state");
  // Additional logic for entering AllPoliceVehiclesArrived state
};
const logExitFromAllPoliceVehiclesArrived = (context: any, event: any) => {
  console.log("Exiting AllPoliceVehiclesArrived state");
  // Additional logic for exiting AllPoliceVehiclesArrived state
};
const logFireTrucksArriving2 = (context: any, event: any) => {
  console.log("Fire trucks are arriving");
  // Additional logic for fire trucks arriving
};
const logAllFireTrucksArrived4 = (context: any, event: any) => {
  console.log("All fire trucks have arrived");
  // Additional logic for all fire trucks arrived
};
const logCrisisMoreSevere4 = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logCrisisLessSevere = (context: any, event: any) => {
  console.log("Crisis has become less severe");
  // Additional logic for handling a less severe crisis
};
const logEntryToPoliceVehiclesArrival = (context: any, event: any) => {
  console.log("Entering PoliceVehiclesArrival state");
  // Additional logic for entering PoliceVehiclesArrival state
};
const logExitFromPoliceVehiclesArrival = (context: any, event: any) => {
  console.log("Exiting PoliceVehiclesArrival state");
  // Additional logic for exiting PoliceVehiclesArrival state
};
const logPoliceVehiclesArriving2 = (context: any, event: any) => {
  console.log("Police vehicles are arriving");
  // Additional logic for police vehicles arriving
};
const logAllPoliceVehiclesArrived4 = (context: any, event: any) => {
  console.log("All police vehicles have arrived");
  // Additional logic for all police vehicles arrived
};
const logFireTrucksArrival = (context: any, event: any) => {
  console.log("Fire trucks have arrived");
  // Additional logic for fire trucks arrival
};
const logCrisisMoreSevere5 = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logCrisisLessSevere2 = (context: any, event: any) => {
  console.log("Crisis has become less severe");
  // Additional logic for handling a less severe crisis
};
const logEntryToCompletionOfObjectives = (context: any, event: any) => {
  console.log("Entering CompletionOfObjectives state");
  // Additional logic for entering CompletionOfObjectives state
};
const logExitFromCompletionOfObjectives = (context: any, event: any) => {
  console.log("Exiting CompletionOfObjectives state");
  // Additional logic for exiting CompletionOfObjectives state
};
const logCrisisLessSevere3 = (context: any, event: any) => {
  console.log("Crisis has become less severe");
  // Additional logic for handling a less severe crisis
};
const logObjectivesCompleted = (context: any, event: any) => {
  console.log("All objectives have been completed");
  // Additional logic for when all objectives are completed
};
const logCrisisMoreSevere6 = (context: any, event: any) => {
  console.log("Crisis has become more severe");
  // Additional logic for handling a more severe crisis
};
const logEntryToEndOfCrisis = (context: any, event: any) => {
  console.log("Entering EndOfCrisis state");
  // Additional logic for entering EndOfCrisis state
};
const logExitFromEndOfCrisis = (context: any, event: any) => {
  console.log("Exiting EndOfCrisis state");
  // Additional logic for exiting EndOfCrisis state
};

export const crisisManagementMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMBOBLWmCyBDAdrjALZj4AuAdAJL7rkDEAYgMoDCA+mwPIByvAUTYAVanw4AlAQEUAqgJbCA2gAYAuolAAHAPZZy6Hfk0gAHogBMAdgAsKyjYDMARhsAOAJw2LP7wBoQAE9LZwA2G0pnRytogFYLZ0S3KIBfFIC0TBwCIjBSCho6RgAFdi4+QRExXkkZeUVVDSQQXX1DY2bzBAsnC0pYm0HosLcLN0cbAOCEF1D7WOcVFVDY+PDxizSMjCxYPEISMipWNjYjfDBkckgGUs4efiFRcSk5BWV1E1b6dpMuu1W-RUjgsHnCE1CzjcVimlg8sQ8lA8yMGsTcsUhzgsji2IEyu32uXyVDuZ3wFyuNxO5UeVRedXejS+eh+Rj+iDsFliQJBYKcNkh0NhMzC80Wy1WFnWINx+OyBzyR0obB2mAAImByLh0AAbWACUzIAAWBBgDEUAEFhAIOExqFIOMIJLI2ABpDi8WTYABCAgkTOa3wMbM6iESFmFoUcjjc-TcUccGJUTmistVexyhwKKqysA1Wt1+sNJvwZst1o4xW4ABlqGwbQA1AQACTr1Ztnp9foD2hZwY6oC6WIjQUQoR89mi2KsyecsWTHjTucJWaoOd2+e1eoNxtNYAYEm4sgrTG4Elt9ptTpdrpYPZafd+oYQiRUsZUthnbgFiyjI+mMahFYkShKEHgWMmNjgdOS4EpmirZumm6FjuJZmoex42qe55VrW9YcE2rZsO2d6fIGj4hoOYYgpGYTAZ4HhWFENjzq4mzpHi6YrghVAsNcWiOGcOioBA6CEP2B5HhWxTVhaNRqgITbVtwxTYAIvAfE0vZtJRZhjv+iBWFGiIeCozhWBOoyxDGsHykSSp8WAAlCSJYm4BJna+ue3BMBeDrXm6HAKXaghqveQZPlRL4qAZCDgrG37mVy4KJDYtkZgqxKUI5zk6MJonie0DCeX6HA+ZWNZ1o2LZtjawXUKF4UUQOekIOBkaxFYwEfl4iSzGMbjpdxWU5YJeWuYVRjmtapQcNGFrOHNjgWhYHoCAA4twohWtUTU6S1XQWcKTGMUiQHfsi8TIs4Q3wVlvAAK7EAARmAqDcAAZkw6CoGAwioA9yAANYah9Yk3Bh0myfJikCMpqnqZpzL7eyCDfo4DgCjE0ZGciwLCvOb6UMsPQJB4YTgaEt2ZUqj0vW9n3fb9-2AyDYBgxcEDFV6Xllb5uFVQRNXEXVAghQIYVkdprIHYg6IY4MQHRtEYGmY4kY2FCDgWRZ2LIhMaUcXKGX2QUdOve9X0-X9APA6D4Nc4oAizfNi3zatgibdtzy8HtMuo+MzhIio1kfsCyRRLFoSjEHVhovGLEh1GN1G1xd2009FufcUOg6ugyBgA2YBGvnOpgPbnOSZhlbQ0FsPw2pGl+-2qNHaObWOKBkSDG4wLAkxNmp8u6dm5nDMfTnecF0XJfIGXFc3CV3m+Xa-nOoF9WNVLD4o8+8uY0rOOq-j7dRl3SxLCs-JOINQ9wTTo-05bk-54Xxel+X7MO9NzssEtC3-w9htLa1Adp8GbpFVqYRwhAnnLybwDFIxeAVvCZw4EPBuF7t+ampsqASB0A9a4xQdQEA1AANzADqHQWhiRVxPGePyV5163jrkpFSjckbkV3lFeIx0jJByjL3ecGIoLkxwauSg+DCFgGIaQsAFCqE0KOHQrCDCBb4UIrVP+Ck2EIybtvCKukhwxWFKZJYSIJjogWAKaOsRxE8UkQQohJD8DkModQ2hTsXbLTdstIBXtQE+wgUYywjhTqYK8EBCC8ZISxVsMsEC1kPCdwvuiexWUpHOLkQojxyil580YY6ZhddxaSy0jvf2z5xymPcPRZILFsTRnhHYu+dkJGZJkS4txijaH5PKuo6qRF2wlIahLYJssXz+HbqMaOkQ+pQTnPGKU6SHL8VgNGXAvjcAWF4GAKAOgDDuSKpDVR55V5MJvNo+u7DEbjNRliYUWIVkFByusxwmylrbN2fsw5EkTm2jUZVDRwsSKsLhjc-R5TDETJ6OZSgESsbRNAg89uM5EiRDCUscmiYlbPN4msjZWydl7IOegI5U1-nYUKQFFhwhuAcF9JWQ8VYWBjIMc1VGes6mRIsm+ZFsUMTn3BPrWpCw8XZQJe8ol3zSXkvwCogFOEgWDK0Y6eljLijMu4KyspyNKlRVhdyxFfLYnHTCH0MC1hO5RgWFYW+2xh4P3xU5N5HyNnEp+WSv5UkbQyTkmChutz2XcNau1du5MfCUCAnOSCTh5zsQdffXBjjpFMGEkzG2rM8zyPcUoigzBLxFJvJIH1TKVLarZVCjlz4WKxhsDECyVkuRhOjMKZIQIL5GVBGEliOJWkm3aU4sAabUAZpZsDbNOS82MHOUWwKlLqAAA1K16pbjW2Z9apxNqSa29usLIgfmjMkOOyx0bio6SOsdtsgaTtzbQ2dNKS3VwtMUTV3Amy6q4fq1q9a60NrGFyZtyT1btzCYiJinIZzgTMomKw56h2XutuOm93Tcn5qkMIWQEgah0rWgEsBvtg3fv+Bu-926W0gemE4MCcZGLhHhBBBNnFHXJovempD17YDCB0N6GRqBqF6CpIWx9-y30sotNWDgLBZDemwNQYQ1pP3SzXVFMIAxYHAlBAg5EBNogRBBJ3O19a6P2uY0mwdqb2PM049x3jxR+OtEXsA721RahyEvEpipKnWo9A-PCzwxqYkoumJ1LW1kZwYhcJ3NELTE1tIcWx0dHGs22b4wJ2AQm17Fv+S+t9DYJNufqIpu5z41MRGEZprwYwdPtwGD0KNyCESNvHCxeDlmkvWazd9UwmWLnztLblw8+XJOvCKyur93mhxJGJp+N8P5lg0T3ep0YiVknLDBKBUzxthpKkS1err6Aetc09iAgjhWPMldU4sd8s3vyQgW7FMJmDg6WPhN4Vr-adsFD28lid3WIalqkA2agLBXOjYu0RybcsnAH2xirPGlHEDxAWP0WDEEFhJxTnFgdCWENWczROi0WgtD8YoVzNUIPihWjYM2alzDSJVpDUOSmM3UronGBMN8kYLL9DAp4UYtgIlteuIhzrhPiek4hopEHNoTmXagSzj8bO0TRjsG4YUMYg7fmsorcccxkjC+HcJF+0935zzgKh6dtwtWsqfdaeXU3YrQncJQKUyKVCMQiX27HX28F49QCbt+s8y63p6cou0i67cCAd2GHwbbOoRBDjEZMTFU+G5HYHmeH9Q9ocYIN99sufUx5fIt6Y4xkTwuMxgliAwnDp+N7nV+WfzdcZ42lxzXNRM2-G8pyBXRQIY2RPzwYJ74weHj7YYmGIMGYrGCHevAfG+m+D3AVL9n0sA+rlIAAUk8HvXm+-UTCBiu7JMljJFCG20YfREy1vrYkKwYjPsjz9+1zPZuQ--a5tSC060pACA4WLwHyRAwWr3rXnDH3jwSDjF6DAmiE8Dg2fydRTRFwbyniD2zy-2YDKApxYF-3-0AMh0PziijBAOH3AL5XH2mT11RxilGCgnCENh9xfxQKN0X3QObxDyJxJx0DJ2t24HrAljVSCkp2p1bF4HWmL2C1j3FRyhsDVEwC0HcmNDEigALSyw3lEOEBp332hU5TgUiFWGBETHjBcEGDbUGHhQwVcDe3iEf1kP4nkMUOUJLlLFuGVSFiGTqi0J0M8z0OfC5CiEMLgRMOTnMNPnjFd3JiiGsLCTAlizM3ixGkcIUNgCUPIBULcNwKp20Npx4GwBkgEHtyIJCW6AWAxjnBCLRDCMmFq1cDjDojMPnEhCYMSJxyygtB1B1H2wnVSPSONBuAGU8NqhEJYByN8OLwNjrQmE6jGFcCiRhFPk7koBcAvwgghDBC2zTmQM6O6N+xQ2cIyKNBuAk0k00RFm0R8ObF0OrSimoyDmxBaIGAH3rTbTnH6EiWTE6jtStXFV2PfxXzzEOIGO-2E2KWyLEJuKZ0QCmIcBmMbXmJ1kjGe0fz6liLBC6j+K6IBOzz6JcJOOrDOJBQUFGPGOuL8NuNalhP5FmPqQWNMUnwgjnAmEWFWCxgcKcliAtFQAwDIVwB1HUL63dAtAkAkGoA-UmMSERHMmhETB6F6DjkeR6FjFAgRA9wRBGDCQ5K0C5J5PQD5IFKGPOOGRFLFIlJKJhWkIQAgItWxDsHcAuk8G1N1N5P5IYFOOGIuI4FNPFKhOIxhMWGlLtRiHiCGGsFiEeXVIsTtXHHjnFR6JvW5N5NUMFLnWFNFN9IpOhO6HiThNcACx8FJmFB8BgTCSlGTG-GsE-HjP2NgCTP1JTKNOJO9IzPNMZ39JfFGF02-HhWDK8HAhVgSO2xYITLrL1LIRTI9IfXpxbLNL9KhxzMcHsCcHzKq18Fih6BgTVlcCcHVOeKxL2LF0TPHMGI8ONJtB9LbNXWIIBG5DgVBHBB-CFD3QM2DmRAA01lWIPNHPrL4I9KbK8L-kvPnOIKtWXLMILPXOLM7giHCDtQNlsE7kXCQOTV2J-JPK5jYDFNBz-mwDPBtFZSbCkGL05DvMq0fMFEWIAnLMoCMiugWDRA-CMhrKPLHNdMNLPOJKAtbIakkItPuV4Vq2hFCCjTDJZKiBWBYoJ2PPYvdMJIqjwhVS9OAqzI7J6BBH6EGCcCYmjjGAmGLLjhEsWWiB7VSmQuYOQPQtkqwpBxBw4DwodEIr9Gj34prTMjIt5AoqhCophMlGJnRx6DtQxKxzaN90oCsv1P5PCtrN-MnPkunMuVnMzMmM7hVKAi8AYqwXMmLOhHsHHChBcGTGBDnHFRxJb1ircP-M4sAqSqvIm2IJcDQUiGDLlLDMVPbmZJMgSFBDBCXNrSphQokTKq4PHJTISrdG4rNN4qkLbhC3cG5GYihAYK5ABFKqXwwPKtGsqvirBMSpUpIpDg8ofP5EopyvqOGFH0Mx6CHO2OTWGrgAqrUJspwvsvwqk1hmItctU2qVqy6hEpjE8GVgsjRHMtCpYP+PWs4IeowtTJpUmvFOmq+p80qMiGhE6vRHMgGEeU8CDmBHhAlARF6APPurYv1IJMk3GpYX2qRq6ASEBG8vRttSxr3Xu1oLjgjWsnKOJsho-2ht5JuGersocoIo+pcvbIXISBYlRqYiSQxrjlqIAjsH+vQQ90YhjEQu5o4N5tJr4MFr-hIj-ics+vFtApRoZtlqZoVrDBOisIsjnEtXjDRDWq1sBN-LdIAtVUvMRpNtKJ3OAhjWjl7ilHMmcEeR7SiMM1-XAixEQIsrup5tdvHLdKqsUs9NBWpp9omURMMNPSDshCYmxueySWaNWGQSY2HOQJJrdoFMpvhuGykJYn9uaMwRinztDr3VMljnRAwWhGnxsWdqb21uroYD1tesctFobvrRzsDtbpDo1zAmAnWBiLmGeOhAHuX2z2HtHoNveqIrFuvN9sbunpbuDoLo6oT1d3iIgiVnrVjrBuQLOGIC0DLn7E+m4GegACtLgDAKFYAR7sK7Kd6jb976rSjGqgzZTQyFSIyOr8yHBfxH8wRz94xxVH7n7NR2g37P7v6ya-7uBvRd8qgmw-58jCjisaaORDqeRjqIRvLHkB5XdlqIDyYwJUGdAn6X7MGPp36v6rhcH-7bLcK3rgGDrAR7y+RaHnyAJlh7AVqgIBhoQZwgI0gOJ8AdAIA4ATAK7cED6JkABaTuYUPRuOBwZEMx+MVPICO+7RiRWgegXRzlM2tGi2zGq27oNBbkawAED3GKLwLYljCRE4MkCka4CABx58JclwWiuwP65OGcNxum+wRZGR0RLkMEUq9gYJ7+yAcJg1CyCIOOAeLtCOdugCeY2gwOMyZITm1BpCTULcIsXcUsMAXJn9e06JlYZU9WqEDXLqREeg5HFEcyefQahxUaFyAqOVVp-4O1bWLdQDHdRHBATWRYKNJ7KEGKKCYEcVc2ceBMheMJ0BiZG+YOHWRWLEAUJZwRPKmKWcGNB0nZseZ+BOj+A56Z2PAUZq3K8cUyOYICDqYETS9wROXcp5UZjJIdWRVxHNMPCgd5l8AYQfD8aOGINBdGGB6YeEDS+IGMWFFMUGmxsZyVN1d5D1WVbzfwg1LFeFEEDnGIawMYM1OFMIMJRIKIBicu26izVAjraSnPadeFqZACcYCIB8xMfGzqayAauO7ltg0ctfBzQTQ53vUovSkS+Edna1awy-WrSEbkaOEEEOT3UEVYBfUcr-eF2wPoaJc1LwfJ1YYswFx4lYS1fKhIaV++1jf3H8iXXgnJo5gS7Fv5qDPqEOdXUDTWbWGxFkuIJahfEmy3YkeFsYecOZNEHwGMWYsEJBKUS+u1GZNBKU+Nl5lvBVjfZVg-UosxXsj8C-ZJUmJ3IycrRYEENBQYHu4tl2zAw7f1lVmFHnUYN8BlkER-FYePZYqEUCO0g11IcF3bf3Ku31sneFxiPoOOMYEMpWawCw9TTWMyNXRpNeudl5FI4E1wqAZNqEIOMxYDBEUCD3K5iYBraOmccs2l782svEo43tyt45pYCIaDKJNYFEPhYCfJkEE68COOTWwewEr9kE+FpcyEeFM-B05JTwDWOtCCPp6IO15i4951HU6uwVlYbkWwTWaOVckOR5KEEyeRrqNFgDKS5DHW1Q5NmJ+FGIvS8YDHJZ7y7qOYQt78OOPqD91i38n9ylqkisqNR-VYTBEYExF80EBwAfYELZ5Pfx8zBxCKg05NlEWizBLqcszm4ssCIy97BZbuo9mVnTmKpOnUaK8Trai9gNiJ5MNdoziyFexMHKjEUSwIv8cvVowlrKXTqKtC+z-mitqTroaLXGrkMfMEa6b8PzkS8IQL2lntdejaka5M0seFwmfoTGv5j3GMqRpHDV059U4DIzGDjeza6L+FmU7kdZucR-CCKp7GyfJMIT8A0TgjygKuhz5r67GbetObe7P8R1mMECJiBIOIHwRiNhjhjBowLB3hn+zRtzvJqWlc9wNcosjq2xTSzweU1PZMD10LpUAQfACAT6dcTAQViD13VkmcfuOjR5BepESLCYZBZBFONIIAA */
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
          actions: ['logPSCConnectionRequestInInit']
        }
      },
    },
    FSCConnected: {
      on: {
        PSC_CONNECTION_REQUEST: {
          target: 'CrisisDetailsExchange',
          actions: ['logPSCConnectionRequestInFSCConnected']
        },
      },
      entry: ['logEntryToFSCConnected'],
      exit: ['logExitFromFSCConnected'],
    },
    PSCConnected: {
      on: {
        FSC_CONNECTION_REQUEST: {
          target: 'CrisisDetailsExchange',
          actions: ['logFSCConnectionRequestInPSCConnected']
        },
        // Define additional event: anys and their corresponding transitions here
      },
      entry: ['logEntryToPSCConnected'],
      exit: ['logExitFromPSCConnected'],
      // Define any services or activities that should be active in this state
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

    },
    NumberOfFireTruckDefined: {
      on: {
        ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment',
        NUMBER_OF_POLICE_VEHICLE_DEFINED: 'NumberOfPoliceVehicleDefined',
        STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation'
      },
      entry: ['logEntryToNumberOfFireTruckDefined'],
      exit: ['logExitFromNumberOfFireTruckDefined'],

    },

    NumberOfPoliceVehicleDefined: {
      on: {
        ROUTE_PLAN_DEVELOPMENT: 'RoutePlanDevelopment',
        NUMBER_OF_FIRE_TRUCK_DEFINED: 'NumberOfFireTruckDefined',
        STEPS_33A1_33A2_NEGOTIATION: 'Steps33a1_33a2Negotiation'
      },
      entry: ['logEntryToNumberOfPoliceVehicleDefined'],
      exit: ['logExitFromNumberOfPoliceVehicleDefined'],

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

    },
    RouteForFireTrucksToBeProposed: {
      on: {
        FIRE_TRUCK_ROUTE_PROPOSAL_SUBMITTED: 'RouteForFireTrucksFixed',
        NEGOTIATION_REQUIRED: 'Steps33a1_33a2Negotiation',
        FIRE_TRUCK_ROUTE_APPROVAL_REQUESTED: 'RouteForFireTrucksApproved'
      },
      entry: ['logEntryToRouteForFireTrucksToBeProposed'],
      exit: ['logExitFromRouteForFireTrucksToBeProposed'],

    },
    RouteForFireTrucksFixed: {
      on: {
        FIRE_TRUCK_ROUTE_APPROVAL_REQUESTED: 'RouteForFireTrucksApproved',
        NEGOTIATION_REQUIRED: 'Steps33a1_33a2Negotiation',
        ROUTE_REVISION_REQUIRED: 'RouteForFireTrucksToBeProposed'
      },
      entry: ['logEntryToRouteForFireTrucksFixed'],
      exit: ['logExitFromRouteForFireTrucksFixed'],

    },
    RouteForFireTrucksApproved: {
      on: {
        DISPATCH_FIRE_TRUCKS: 'Step4Dispatching',
        REVISE_ROUTE: 'RouteForFireTrucksToBeProposed'
      },
      entry: ['logEntryToRouteForFireTrucksApproved'],
      exit: ['logExitFromRouteForFireTrucksApproved'],

    },

    RouteForPoliceVehiclesDevelopment: {
      on: {
        PROPOSE_ROUTE: 'RouteForPoliceVehiclesToBeProposed',
        FIX_ROUTE: 'RouteForPoliceVehiclesFixed',
        APPROVE_ROUTE: 'RouteForPoliceVehiclesApproved'
      },
      entry: ['logEntryToRouteForPoliceVehiclesDevelopment'],
      exit: ['logExitFromRouteForPoliceVehiclesDevelopment'],

    },

    RouteForPoliceVehiclesToBeProposed: {
      on: {
        ROUTE_PROPOSED: 'RouteForPoliceVehiclesFixed',
        ROUTE_REJECTED: 'RoutePlanDevelopment'
      },
      entry: ['logEntryToRouteForPoliceVehiclesToBeProposed'],
      exit: ['logExitFromRouteForPoliceVehiclesToBeProposed'],
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

    },

    RouteForPoliceVehiclesApproved: {
      on: {
        PROCEED_TO_DISPATCHING: 'Step4Dispatching'
      },
      entry: ['logEntryToRouteForPoliceVehiclesApproved'],
      exit: ['logExitFromRouteForPoliceVehiclesApproved'],
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
    },

    AllFireTrucksDispatched: {
      on: {
        POLICE_VEHICLE_DISPATCHED: {
          target: 'AllPoliceVehiclesDispatched',
          cond: 'checkAllPoliceVehiclesDispatched2'
        },
        ALL_VEHICLES_DISPATCHED: 'Step5Arrival'
      },
      entry: ['logEntryToAllFireTrucksDispatched'],
      exit: ['logExitFromAllFireTrucksDispatched'],

    },

    AllPoliceVehiclesDispatched: {
      on: {
        FIRE_TRUCK_DISPATCHED: {
          target: 'AllFireTrucksDispatched',
          cond: 'checkAllFireTrucksDispatched2'
        },
        ALL_VEHICLES_DISPATCHED: 'Step5Arrival'
      },
      entry: ['logEntryToAllPoliceVehiclesDispatched'],
      exit: ['logExitFromAllPoliceVehiclesDispatched'],

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

    },

    FireTrucksArriving: {
      on: {
        FIRE_TRUCK_ARRIVED: {
          target: 'AllFireTrucksArrived',
          actions: ['logFireTruckArrived']
        },
        POLICE_VEHICLE_ARRIVED: {
          target: 'PoliceVehiclesArriving',
          actions: ['logPoliceVehicleArrival2']
        },
        ALL_FIRE_TRUCKS_ARRIVED: {
          target: 'FireTrucksArrival',
          actions: ['logAllFireTrucksArrived']
        }
      },
      entry: ['logEntryToFireTrucksArriving'],
      exit: ['logExitFromFireTrucksArriving'],

    },

    AllFireTrucksArrived: {
      on: {
        POLICE_VEHICLE_ARRIVED: {
          target: 'PoliceVehiclesArriving',
          actions: ['logPoliceVehicleArrival3']
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

    },
    FireTrucksArrival: {

      on: {
        POLICE_VEHICLES_ARRIVING: {
          target: 'PoliceVehiclesArriving',
          actions: ['logPoliceVehiclesArriving']
        },
        ALL_POLICE_VEHICLES_ARRIVED: {
          target: 'PoliceVehiclesArrival',
          actions: ['logAllPoliceVehiclesArrived2']
        },
        CRISIS_MORE_SEVERE: {
          target: 'CrisisDetailsExchange',
          actions: ['logCrisisMoreSevere2']
        }
      },
      initial: 'FireTrucksArriving',
      states: {
        FireTrucksArriving: {
          on: {
            ALL_FIRE_TRUCKS_ARRIVED: {
              target: 'AllFireTrucksArrived',
              actions: ['logAllFireTrucksArrived2']
            }
          },
          entry: ['logEntryToFireTrucksArriving2'],
          exit: ['logExitFromFireTrucksArriving2'],

        },
        AllFireTrucksArrived: {
          on: {
            // Transitions and actions for AllFireTrucksArrived state
          },
          entry: ['logEntryToAllFireTrucksArrived'],
          exit: ['logExitFromAllFireTrucksArrived'],

        }
      },
      entry: ['logEntryToFireTrucksArrival'],
      exit: ['logExitFromFireTrucksArrival'],

    },

    PoliceVehiclesArriving: {
      on: {
        ALL_POLICE_VEHICLES_ARRIVED: {
          target: 'AllPoliceVehiclesArrived',
          actions: ['logAllPoliceVehiclesArrived3']
        },
        FIRE_TRUCKS_ARRIVING: {
          target: 'FireTrucksArriving',
          actions: ['logFireTrucksArriving']
        },
        ALL_FIRE_TRUCKS_ARRIVED: {
          target: 'FireTrucksArrival',
          actions: ['logAllFireTrucksArrived3']
        },
        CRISIS_MORE_SEVERE: {
          target: 'CrisisDetailsExchange',
          actions: ['logCrisisMoreSevere3']
        }
      },
      entry: ['logEntryToPoliceVehiclesArriving'],
      exit: ['logExitFromPoliceVehiclesArriving'],

    },

    AllPoliceVehiclesArrived: {
      on: {
        FIRE_TRUCKS_ARRIVING: {
          target: 'FireTrucksArriving',
          actions: ['logFireTrucksArriving2']
        },
        ALL_FIRE_TRUCKS_ARRIVED: {
          target: 'FireTrucksArrival',
          actions: ['logAllFireTrucksArrived4']
        },
        CRISIS_MORE_SEVERE: {
          target: 'CrisisDetailsExchange',
          actions: ['logCrisisMoreSevere4']
        },
        CRISIS_LESS_SEVERE: {
          target: 'CompletionOfObjectives',
          actions: ['logCrisisLessSevere']
        }
      },
      entry: ['logEntryToAllPoliceVehiclesArrived'],
      exit: ['logExitFromAllPoliceVehiclesArrived'],

    },

    PoliceVehiclesArrival: {
      on: {
        POLICE_VEHICLES_ARRIVING: {
          target: 'PoliceVehiclesArriving',
          actions: ['logPoliceVehiclesArriving2']
        },
        ALL_POLICE_VEHICLES_ARRIVED: {
          target: 'AllPoliceVehiclesArrived',
          actions: ['logAllPoliceVehiclesArrived4']
        },
        FIRE_TRUCKS_ARRIVAL: {
          target: 'FireTrucksArrival',
          actions: ['logFireTrucksArrival']
        },
        CRISIS_MORE_SEVERE: {
          target: 'CrisisDetailsExchange',
          actions: ['logCrisisMoreSevere5']
        },
        CRISIS_LESS_SEVERE: {
          target: 'CompletionOfObjectives',
          actions: ['logCrisisLessSevere2']
        }
      },
      entry: ['logEntryToPoliceVehiclesArrival'],
      exit: ['logExitFromPoliceVehiclesArrival'],

    },

    CompletionOfObjectives: {
      on: {
        CRISIS_LESS_SEVERE: {
          target: 'Step5Arrival',
          actions: ['logCrisisLessSevere3']
        },
        OBJECTIVES_COMPLETED: {
          target: 'EndOfCrisis',
          actions: ['logObjectivesCompleted']
        },
        CRISIS_MORE_SEVERE: {
          target: 'CrisisDetailsExchange',
          actions: ['logCrisisMoreSevere6']
        }
      },
      entry: ['logEntryToCompletionOfObjectives'],
      exit: ['logExitFromCompletionOfObjectives'],

    },

    EndOfCrisis: {
      type: 'final',
      entry: ['logEntryToEndOfCrisis'],
      exit: ['logExitFromEndOfCrisis'],

    }
  }
});

const service = interpret(crisisManagementMachine).onTransition((state) =>
  console.log(state.value)
);

service.start();
