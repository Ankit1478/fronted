import { atom, createStore, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const store = createStore();

const queueAtom = atomWithStorage("queue", []);

export function useQueue() {
  return useAtom(queueAtom, { store });
}

const currentSongIndexAtom = atomWithStorage("current_song_index", 0);

export function useCurrentSongIndex() {
  return useAtom(currentSongIndexAtom, { store });
}

const streamQualityAtom = atomWithStorage(
  "stream_quality",
  "excellent"
);

export function useStreamQuality() {
  return useAtom(streamQualityAtom, { store });
}

const downloadQualityAtom = atomWithStorage(
  "download_quality",
  "excellent"
);

export function useDownloadQuality() {
  return useAtom(downloadQualityAtom, { store });
}

const imageQualityAtom = atomWithStorage("image_quality", "high");

export function useImageQuality() {
  return useAtom(imageQualityAtom, { store });
}

const playerCurrentTimeAtom = atom(0);

export function usePlayerCurrentTime() {
  return useAtom(playerCurrentTimeAtom, { store });
}

const isPlayingAtom = atom(false);

export function useIsPlayerInit() {
  return useAtom(isPlayingAtom, { store });
}

const isTyping = atom(false);

export function useIsTyping() {
  return useAtom(isTyping, { store });
}

const viewSongText = atom(false);

export function useViewSongText() {
  return useAtom(viewSongText, { store });
}