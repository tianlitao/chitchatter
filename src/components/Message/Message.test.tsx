import { render, screen } from '@testing-library/react'
import { SettingsContext } from 'contexts/SettingsContext'

import { ReceivedMessage, UnsentMessage } from 'models/chat'
import { userSettingsContextStubFactory } from 'test-utils/stubs/settingsContext'

import { getPeerName } from '../PeerNameDisplay/getPeerName'

import { Message, MessageProps } from './Message'

const mockUserId = 'user-123'

const mockUnsentMessage: UnsentMessage = {
  id: 'abc123',
  text: 'unsent message',
  timeSent: 1,
  authorId: mockUserId,
}

const mockReceivedMessage: ReceivedMessage = {
  id: 'abc123',
  text: 'received message',
  timeSent: 1,
  authorId: mockUserId,
  timeReceived: 2,
}

const userSettingsStub = userSettingsContextStubFactory({
  userId: mockUserId,
})

const MockMessage = (props: MessageProps) => (
  <SettingsContext.Provider value={userSettingsStub}>
    <Message {...props} />
  </SettingsContext.Provider>
)

describe('Message', () => {
  test('renders unsent message text', () => {
    render(
      <MockMessage
        message={mockUnsentMessage}
        userId={mockUserId}
        showAuthor={false}
      />
    )

    screen.getByText(mockUnsentMessage.text)
  })

  test('renders received message text', () => {
    render(
      <MockMessage
        message={mockReceivedMessage}
        userId={mockUserId}
        showAuthor={false}
      />
    )

    screen.getByText(mockReceivedMessage.text)
  })

  test('renders message author', () => {
    render(
      <MockMessage
        message={mockReceivedMessage}
        userId={mockUserId}
        showAuthor={true}
      />
    )

    screen.getByText(getPeerName(mockUserId))
  })
})
