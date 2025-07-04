import JingleSession from './JingleSession';
import XmppConnection from './XmppConnection';
import JitsiLocalTrack from '../RTC/JitsiLocalTrack';
import { CodecMimeType } from '../../service/RTC/CodecMimeType';
import JitsiRemoteTrack from '../RTC/JitsiRemoteTrack';

export default class JingleSessionPC extends JingleSession {
  static parseVideoSenders: ( jingleContents: Object ) => string | null;
  constructor( sid: string, localJid: string, remoteJid: string, connection: XmppConnection, mediaConstraints: unknown, iceConfig: unknown, isP2P: boolean, isInitiator: boolean ); // TODO:
  doInitialize: ( options: {} ) => void;
  sendIceCandidate: ( candidate: RTCIceCandidate ) => void;
  sendIceCandidates: ( candidates: RTCIceCandidate[] ) => void;
  addIceCandidates: ( elem: unknown ) => void; // TODO:
  getConfiguredVideoCodec: () => CodecMimeType;
  acceptOffer: ( jingleOffer: Object, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  invite: ( localTracks?: JitsiLocalTrack[] ) => void;
  sendSessionInitiate: ( offerSdp: string ) => void;
  setAnswer: ( jingleAnswer: unknown ) => void; // TODO:
  setOfferAnswerCycle: ( jingleOfferAnswerIq: Object, success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, localTracks?: JitsiLocalTrack[] ) => void; // TODO:
  setVideoCodecs: ( preferred?: CodecMimeType, disabled?: CodecMimeType ) => void;
  setReceiverVideoConstraint: ( maxFrameHeight: number ) => void;
  setSenderMaxBitrates: () => Promise<void>;
  setSenderVideoConstraint: ( maxFrameHeight: number ) => Promise<unknown>; // TODO:
  setSenderVideoDegradationPreference: () => Promise<void>;
  terminate: ( success: ( params: unknown ) => unknown, failure: ( params: unknown ) => unknown, options: { reason: string, reasonDescription: string, requestRestart?: boolean, sendSessionTerminate?: boolean } ) => void; // TODO:
  onTerminated: ( reasonCondition: unknown, reasonText: unknown ) => void; // TODO:
  onXmppStatusChanged: ( status: Strophe.Status ) => void;
  addRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStream: ( elem: unknown ) => void; // TODO:
  removeRemoteStreamsOnLeave: ( id: string ) => Promise<JitsiRemoteTrack>;
  replaceTrack: ( oldTrack: JitsiLocalTrack | null, newTrack: JitsiLocalTrack | null ) => Promise<unknown>; // TODO:
  addTrackAsUnmute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  removeTrackAsMute: ( track: JitsiLocalTrack ) => Promise<unknown>; // TODO:
  setMediaTransferActive: ( videoActive: boolean ) => Promise<unknown>; // TODO:
  modifyContents: ( jingleContents: Object ) => void;
  notifyMySSRCUpdate: ( oldSDP: unknown, newSDP: unknown ) => void; // TODO:
  newJingleErrorHandler: ( request: unknown, failureCb: ( error: Error ) => void ) => ( this: JingleSessionPC ) => unknown; // TODO:
  getIceConnectionState: () => unknown; // TODO:
  close: () => void;
  toString: () => string;
}
