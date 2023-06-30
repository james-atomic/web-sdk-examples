// This file contains sample payloads for events that may be received by the SDK event observer.

const cardCompletedPayload = {
  eventName: "card-completed",
  analyticsEvent: "card-completed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  sdkContext: {
    containerId: "container_123",
  },
};

const cardDismissedPayload = {
  eventName: "card-dismissed",
  analyticsEvent: "card-dismissed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  sdkContext: {
    containerId: "container_123",
  },
};

const cardSnoozedPayload = {
  eventName: "card-snoozed",
  analyticsEvent: "card-snoozed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  sdkContext: {
    containerId: "container_123",
  },
};

const cardFeedUpdatedPayload = {
  eventName: "card-feed-updated",
  analyticsEvent: "card-feed-updated",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  properties: {
    cardCount: 5,
  },
};

const cardDisplayedPayload = {
  eventName: "card-displayed",
  analyticsEvent: "card-displayed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
};

const cardVotedUpPayload = {
  eventName: "card-voted-up",
  analyticsEvent: "card-voted-up",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
};

const cardVotedDownPayload = {
  eventName: "card-voted-down",
  analyticsEvent: "card-voted-down",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    reason: "other",
    source: "overflow-menu",
    message: "my feedback message",
  },
};

const runtimeVarsUpdatedPayload = {
  eventName: "runtime-vars-updated",
  analyticsEvent: "runtime-vars-updated",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    resolvedVariables: {
      runtimeVariable1: "value1",
    },
  },
};

const streamDisplayedPayload = {
  eventName: "stream-displayed",
  analyticsEvent: "stream-displayed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
};

const userRedirectedPayload = {
  eventName: "user-redirected",
  analyticsEvent: "user-redirected",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    linkMethod: "button",
    url: "https://example.com",
    payload: {},
  },
};

const snoozeOptionsDisplayedPayload = {
  eventName: "snooze-options-displayed",
  analyticsEvent: "snooze-options-displayed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
};

const snoozeOptionsCanceledPayload = {
  eventName: "snooze-options-canceled",
  analyticsEvent: "snooze-options-canceled",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
};

const cardSubviewDisplayedPayload = {
  eventName: "card-subview-displayed",
  analyticsEvent: "card-subview-displayed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    subviewId: "subview_123",
    subviewTitle: "Example Subview Title",
    subviewLevel: 1,
  },
};

const cardSubviewExitedPayload = {
  eventName: "card-subview-exited",
  analyticsEvent: "card-subview-exited",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    subviewId: "subview_123",
    subviewTitle: "Example Subview Title",
    subviewLevel: 1,
  },
};

const videoPlayedPayload = {
  eventName: "video-played",
  analyticsEvent: "video-played",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    media: "example.mp4",
    mediaURL: "https://example.com/example.mp4",
  },
};

const videoCompletedPayload = {
  eventName: "video-completed",
  analyticsEvent: "video-completed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  sdkContext: {
    containerId: "container_123",
  },
  streamContext: {
    streamLength: 5,
    streamLengthVisible: 3,
    cardPositionInStream: 1,
  },
  cardContext: {
    cardInstanceId: "card_123",
    cardInstanceStatus: "active",
    cardViewState: "topview",
  },
  properties: {
    media: "example.mp4",
    mediaURL: "https://example.com/example.mp4",
  },
};

const sdkInitializedPayload = {
  eventName: "sdk-initialized",
  analyticsEvent: "sdk-initialized",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
};

const requestFailedPayload = {
  eventName: "request-failed",
  analyticsEvent: "request-failed",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
  properties: {
    path: "example/api/path",
    statusCode: 500,
  },
  sdkContext: {
    containerId: "container_123",
  },
  cardContext: {
    cardInstanceId: "card_123",
  },
};

const notificationReceivedPayload = {
  eventName: "notification-received",
  analyticsEvent: "notification-received",
  id: "event_123",
  endUserId: "user_123",
  timestamp: "2020-01-01T00:00:00.000Z",
  sdkContext: {
    containerId: "container_123",
  },
  cardContext: {
    cardInstanceId: "card_123",
  },
  eventContext: {
    userLocalTimestamp: "2020-01-01T00:00:00.000Z",
  },
};
