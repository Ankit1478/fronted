import { clsx } from "clsx"
import { customAlphabet } from 'nanoid'
import { twMerge } from "tailwind-merge"
import nacl from 'tweetnacl';
import { v4 } from 'uuid';

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const nanoid = customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  7
) // 7-character random string

export async function fetcher(
  input,
  init
) {
  const res = await fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    if (json.error) {
      const error = new Error(json.error) & {}
      error.status = res.status
      throw error
    } else {
      throw new Error('An unexpected error occurred')
    }
  }

  return res.json()
}

export function formatDate(input) {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}

export const formatNumber = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value)

export const runAsyncFnWithoutBlocking = (fn) => {
  fn();
};

export const sleep = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const getStringFromBuffer = (buffer) =>
  Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

export const ResultCode = {
  InvalidCredentials: 'INVALID_CREDENTIALS',
  InvalidSubmission: 'INVALID_SUBMISSION',
  UserAlreadyExists: 'USER_ALREADY_EXISTS',
  UnknownError: 'UNKNOWN_ERROR',
  UserCreated: 'USER_CREATED',
  UserLoggedIn: 'USER_LOGGED_IN'
}

export const getMessageFromCode = (resultCode) => {
  switch (resultCode) {
    case ResultCode.InvalidCredentials:
      return 'Invalid credentials!'
    case ResultCode.InvalidSubmission:
      return 'Invalid submission, please try again!'
    case ResultCode.UserAlreadyExists:
      return 'User already exists, please log in!'
    case ResultCode.UserCreated:
      return 'User created, welcome!'
    case ResultCode.UnknownError:
      return 'Something went wrong, please try again!'
    case ResultCode.UserLoggedIn:
      return 'Logged in!'
  }
}

export function toHexString(byteArray) {
  return Array.prototype.map.call(byteArray, function (byte) {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('');
}

export function toByteArray(hexString) {
  var result = [];
  for (var i = 0; i < hexString.length; i += 2) {
    result.push(parseInt(hexString.substr(i, 2), 16));
  }
  return new Uint8Array(result);
}

export function decrypt(payload = new URLSearchParams(window.location.search)?.get('token')) {
  if (!payload) return {};

  const bytes = nacl.sign.open(
    toByteArray(payload),
    toByteArray(process.env.NEXT_PUBLIC_SERVER_PUBLIC_KEY)
  );

  return JSON.parse(Buffer.from(bytes).toString());
}

export const uuid = () => `${Date.now().toString(16)}-${v4()}`;

export const cleanKeyForFirebaseDatabase = (str) => {
  const filterFor = ['.', '#', '$', '[', ']', '/', '\\', ' '];

  for (const char of filterFor) {
    str = str.replaceAll(char, '');
  }

  return str.toLowerCase();
};

export const arrayToString = (arr) =>
  arr.length == 1 ? arr[0] :
    arr.length == 2 ? arr[0] + ' and ' + arr[1] :
      arr.slice(0, arr.length - 1).join(', ') + ', and ' + arr[arr.length - 1];

export const formatTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
};

export const fixAudioForSafariMobile = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  audioContext.resume();

  const el = document.createElement('audio');
  el.src = "/sounds/placeholder.mp3";
  const source = audioContext.createMediaElementSource(el);
  source.connect(audioContext.destination);
  el.play();
};