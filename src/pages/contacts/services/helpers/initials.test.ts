import { getInitials } from './initials.helper'

describe('Initials', () => {
  it('should return initials from proper name and lastname', () => {
    expect(getInitials('Admam', 'Smith')).toEqual('AS')
  })

  it('should return first initial when second field is empty', () => {
    expect(getInitials('Admam', '')).toEqual('A')
  })

  it('should return second initial when first field empty', () => {
    expect(getInitials('', 'Smith')).toEqual('S')
  })

  it('When space before or after the name ignore it', () => {
    expect(getInitials(' Admam  ', 'Smith ')).toEqual('AS')
    expect(getInitials('     Admam', ' Smith  ')).toEqual('AS')
  })
  it('When special sign ignore it', () => {
    expect(getInitials('Admam!', 'Smith$')).toEqual('AS')
  })
})
