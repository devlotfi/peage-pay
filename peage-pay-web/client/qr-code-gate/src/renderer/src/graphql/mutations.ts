import { gql } from '../__generated__'

export const START_TRIP_QR_CODE = gql(`
  mutation START_TRIP_QR_CODE($startTripQrCodeInput: QRCodeInput!) {
    startTripQRCode(startTripQRCodeInput: $startTripQrCodeInput)
  }
`)

export const END_TRIP_QR_CODE = gql(`
  mutation END_TRIP_QR_CODE($endTripQrCodeInput: QRCodeInput!) {
    endTripQRCode(endTripQRCodeInput: $endTripQrCodeInput)
  }
`)
