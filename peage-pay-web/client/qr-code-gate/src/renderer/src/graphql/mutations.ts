import { gql } from '../__generated__'

export const START_TRIP_RFID = gql(`
  mutation START_TRIP_RFID($startTripRfidInput: RfidInput!) {
    startTripRfid(startTripRfidInput: $startTripRfidInput)
  }
`)

export const END_TRIP_RFID = gql(`
  mutation END_TRIP_RFID($endTripRfidInput: RfidInput!) {
    endTripRfid(endTripRfidInput: $endTripRfidInput)
  }
`)
