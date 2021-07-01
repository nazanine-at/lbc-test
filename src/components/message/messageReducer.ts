export const selectMessage = (state = {}, { type, payload }: any) => {
  switch (type) {
    case 'message/selectMessage':
      return payload
    case 'message/unselectMessage':
      return {}
    default:
      return state
  }
}
