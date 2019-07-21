import React from 'react';

const getViewBox = name => {
  switch (name) {
    case 'logo-de':
      return '0 0 338.54 88.46';
    case 'logo-en':
      return '0 0 358.39 88.46';
    default:
      return '0 0 32 32';
  }
};

const icon = name => {
  switch (name) {
    case 'logo-de':
      return (
        <g id='Layer_2' data-name='Layer 2'>
          <g id='Layer_1-2' data-name='Layer 1'>
            <path d='M69.29 31.15v-4.69a6.27 6.27 0 0 0-1.9-4.46A6.74 6.74 0 0 0 58 22a6.24 6.24 0 0 0-1.91 4.49v4.69A6.26 6.26 0 0 0 58 35.65a6.76 6.76 0 0 0 9.4 0 6.29 6.29 0 0 0 1.9-4.5m7.92-4.69v4.69a14.1 14.1 0 0 1-4.29 10.12 14.57 14.57 0 0 1-20.47 0 14.1 14.1 0 0 1-4.29-10.12v-4.69a14.1 14.1 0 0 1 4.29-10.12 14.6 14.6 0 0 1 20.47 0 14.1 14.1 0 0 1 4.28 10.12zm49.6 13.83a4 4 0 0 1-7.92 0V16.11a4 4 0 0 1 7.92 0zm0-36.06a4 4 0 1 1-4-4 4 4 0 0 1 3.99 4zm-36.12 9.5a14.6 14.6 0 0 1 16.84 2.61 14.1 14.1 0 0 1 4.29 10.12v13.83a4 4 0 0 1-7.92 0V26.46A6.24 6.24 0 0 0 102 22a6.74 6.74 0 0 0-9.4 0 6.27 6.27 0 0 0-1.9 4.49v13.8a4 4 0 1 1-7.92 0V4.23a4 4 0 1 1 7.92 0zm118.42 2.94l.33-.33a14.61 14.61 0 0 1 20.48 0 14.13 14.13 0 0 1 4.28 10.12v13.83a4 4 0 1 1-7.91 0V26.46a6.28 6.28 0 0 0-1.92-4.46 6.74 6.74 0 0 0-9.4 0 6.28 6.28 0 0 0-1.91 4.49v13.8a4 4 0 1 1-7.91 0V26.46a6.28 6.28 0 0 0-1.91-4.46 6.74 6.74 0 0 0-9.4 0 6.28 6.28 0 0 0-1.91 4.49v13.8a4 4 0 1 1-7.91 0V16.11a4 4 0 0 1 7.33-2.11 14.61 14.61 0 0 1 17.43 2.3zm40.33 23.62a4 4 0 1 1-7.91 0V16.11a4 4 0 1 1 7.91 0zm0-36.06a4 4 0 1 1-3.95-4 4 4 0 0 1 3.94 4zM273 12.15a4 4 0 0 1 0 7.91h-3v14.81a1.5 1.5 0 0 0 .36 1.07 1.79 1.79 0 0 0 1.23.39h5a4 4 0 1 1 0 7.92h-5a9.45 9.45 0 0 1-6.73-2.66 9.28 9.28 0 0 1-2.78-6.72V20.06h-2.95a4 4 0 1 1 0-7.91h2.95V4.23a4 4 0 0 1 7.92 0v7.92zM36.67 41.59a3.86 3.86 0 0 1-.88 1.41 3.91 3.91 0 0 1-1.36.85h-.07a3.78 3.78 0 0 1-1.15.22h-.3a3.72 3.72 0 0 1-1.27-.07h-.07a3.7 3.7 0 0 1-1.28-.78l-.05-.05h-.05a4 4 0 0 1-.9-1.42v-.14a2.17 2.17 0 0 1-.07-.24l-5.94-21.86-5.83 21.76c0 .08-.05.16-.07.24v.07a4 4 0 0 1-.91 1.42A3.82 3.82 0 0 1 15 44h-.06a3.79 3.79 0 0 1-1.16.22h-.29a3.79 3.79 0 0 1-1.18-.22h-.07a3.84 3.84 0 0 1-1.24-.79v-.05h-.05a3.9 3.9 0 0 1-.91-1.42v-.14l-.06-.24L.14 5.25a3.95 3.95 0 1 1 7.63-2L13.62 25l5.83-21.75c0-.11.06-.21.1-.32v-.14a3.89 3.89 0 0 1 .87-1.33 3.9 3.9 0 0 1 1.3-.86h.13L22 .5a3.91 3.91 0 0 1 1.14-.22h.27a3.79 3.79 0 0 1 1.17.22H24.8a3.92 3.92 0 0 1 1.23.83l.06.06A3.82 3.82 0 0 1 27 2.85v.07c0 .11.07.21.1.32L32.94 25l5.84-21.8a4 4 0 0 1 7.64 2l-9.65 36a2.17 2.17 0 0 1-.07.24v.07zm105.14-1.3a4 4 0 0 1-7.92 0V16.11a4 4 0 0 1 7.34-2.11 14.6 14.6 0 0 1 17.42 2.3 14.09 14.09 0 0 1 4.28 10.12v13.87a4 4 0 1 1-7.91 0V26.46a6.28 6.28 0 0 0-1.91-4.46 6.74 6.74 0 0 0-9.4 0 6.27 6.27 0 0 0-1.9 4.49z' />
            <path
              fill='#1a47d4'
              d='M117.51 72.85h-6.39v-7.43h6.39a3.48 3.48 0 0 1 1.36.28 3.6 3.6 0 0 1 1.15.78 4 4 0 0 1 .8 1.22 3.85 3.85 0 0 1 .28 1.44 3.79 3.79 0 0 1-.25 1.34 3.69 3.69 0 0 1-.7 1.18l-.14.13a3.51 3.51 0 0 1-2.5 1.06m7.1 5a8.13 8.13 0 0 0-1.52-2.45l-.46-.5.46-.51a7.76 7.76 0 0 0 1.52-2.39 7.81 7.81 0 0 0 0-5.78 7.74 7.74 0 0 0-4.19-4.22 7.38 7.38 0 0 0-2.91-.59h-8.41a2 2 0 0 0-2 2v23a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.43.59h8.4a7.62 7.62 0 0 0 2.93-.58 7.83 7.83 0 0 0 2.48-1.7l.15-.17a7.8 7.8 0 0 0 1.55-8.13zm-7.11 6.54h-6.38V77h6.38a3.45 3.45 0 0 1 1.36.28 3.4 3.4 0 0 1 1.15.78 3.65 3.65 0 0 1 .8 1.21 3.83 3.83 0 0 1 .28 1.43 3.79 3.79 0 0 1-.94 2.52l-.14.14a3.73 3.73 0 0 1-1.14.78 3.53 3.53 0 0 1-1.37.28zm60.7-15.18a2 2 0 0 0-.59 1.43v15.8a2 2 0 0 0 .59 1.43 2.07 2.07 0 0 0 1.44.59 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43V70.67a2 2 0 0 0-.59-1.43 2 2 0 0 0-1.43-.59 2.07 2.07 0 0 0-1.44.59zm0-7.35a2 2 0 0 0-.59 1.43v.16a2 2 0 0 0 2 2 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43v-.16a2 2 0 0 0-.59-1.43 2 2 0 0 0-1.43-.59 2 2 0 0 0-1.41.64zm-18.91 7.35a2 2 0 0 0-1.43-.59 7.64 7.64 0 0 0-1.61.17 8.27 8.27 0 0 0-1.52.52l-.46.22-.38-.35a2 2 0 0 0-.64-.42 2 2 0 0 0-2.18.45 2 2 0 0 0-.58 1.43v15.8a2 2 0 0 0 .58 1.43 2 2 0 0 0 1.43.59 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43V75.91a3.13 3.13 0 0 1 .25-1.22 3.35 3.35 0 0 1 .7-1 3.41 3.41 0 0 1 2.38-1 2 2 0 0 0 1.43-3.46zm28.71 0a2 2 0 0 0-.59 1.43v15.8a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.43.59 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43V75.91a3.13 3.13 0 0 1 .25-1.22 3.35 3.35 0 0 1 .7-1 3.46 3.46 0 0 1 1.1-.71 3.27 3.27 0 0 1 1.29-.26 3.43 3.43 0 0 1 1.28.25 3.28 3.28 0 0 1 1.1.72 3 3 0 0 1 .7 1 3.09 3.09 0 0 1 .25 1.22v10.45a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.43.59 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43V75.91a6.94 6.94 0 0 0-.56-2.78 7.25 7.25 0 0 0-1.6-2.37 7.47 7.47 0 0 0-5.19-2.11 7.64 7.64 0 0 0-1.61.17 7.18 7.18 0 0 0-1.52.52l-.47.21-.37-.35a2.13 2.13 0 0 0-.64-.41 2 2 0 0 0-.75-.14 2 2 0 0 0-1.45.59zm-15.38 15.72a2 2 0 0 0-1.42-.58h-2.54V63.4a2 2 0 0 0-.59-1.43 2 2 0 0 0-2.87 0 2 2 0 0 0-.59 1.43v20.29a5 5 0 0 0 .33 1.79 4.55 4.55 0 0 0 .92 1.49 4.46 4.46 0 0 0 1.47 1 4.34 4.34 0 0 0 1.5.35h2.37a2 2 0 0 0 1.42-3.44zm-38.25-9a3.13 3.13 0 0 1 .25-1.22 3.22 3.22 0 0 1 .71-1 3.31 3.31 0 0 1 1.09-.71 3.27 3.27 0 0 1 1.29-.26 3.41 3.41 0 0 1 2.39 1 3.35 3.35 0 0 1 .7 1 3.27 3.27 0 0 1 .24 1.22v.78h-6.67zm8.09 9a2 2 0 0 0-1.43-.58h-6.66v-3.62h8.69a2 2 0 0 0 2-2v-2.8a7.11 7.11 0 0 0-.56-2.78 7.31 7.31 0 0 0-4-3.93 7.32 7.32 0 0 0-2.8-.55 7.31 7.31 0 0 0-5.19 2.12 7.19 7.19 0 0 0-1.62 2.37 7.06 7.06 0 0 0-.56 2.77v7.78a5 5 0 0 0 .32 1.79 4.58 4.58 0 0 0 .93 1.49A4.32 4.32 0 0 0 133 88a4.39 4.39 0 0 0 1.51.35H141a2 2 0 0 0 2-2 2 2 0 0 0-.54-1.42z'
            />
            <path
              d='M295 34.73v8.13l7.64-3.71a19.38 19.38 0 1 0-7.64-4.42'
              fillRule='evenodd'
              fill='#0f0'
            />
            <path
              fill='#1a47d4'
              d='M293.72 42.86v-7.6a20.58 20.58 0 1 1 9 5.22l-7.13 3.46a1.2 1.2 0 0 1-.62.17 1.25 1.25 0 0 1-1.25-1.25m2.5-8.13v6.13l5.85-2.86a1.28 1.28 0 0 1 .93 0 18.09 18.09 0 1 0-7.15-4.12 1.22 1.22 0 0 1 .39.9z'
            />
            <path
              d='M338.54 19.69a1.25 1.25 0 1 1-2.49 0A24.61 24.61 0 0 0 333 8.26a1.25 1.25 0 1 1 2.18-1.21 27.36 27.36 0 0 1 2.47 6.11 27 27 0 0 1 .9 6.53'
              fill='#0f0'
            />
            <path
              fill='#1a47d4'
              d='M305.89 15.79a1.25 1.25 0 0 1-2.49 0 4.83 4.83 0 0 1 2.39-4.24 4.8 4.8 0 0 1 2.43-.66 4.79 4.79 0 0 1 4.19 2.46 4.77 4.77 0 0 1 .62 2.42 7.55 7.55 0 0 1-2.12 5.3 4.94 4.94 0 0 0-1.44 3.31 1.25 1.25 0 1 1-2.5 0 7 7 0 0 1 2-4.87 5.47 5.47 0 0 0 1.56-3.74 2.41 2.41 0 0 0-.3-1.18 2.34 2.34 0 0 0-.85-.86 2.37 2.37 0 0 0-1.17-.32 2.31 2.31 0 0 0-1.17.32 2.19 2.19 0 0 0-.85.86 2.31 2.31 0 0 0-.31 1.18M307 29.17a1.25 1.25 0 0 1 2.5 0v.18a1.25 1.25 0 1 1-2.5 0z'
            />
          </g>
        </g>
      );
    case 'logo-en':
      return (
        <g id='Layer_2' data-name='Layer 2'>
          <g id='Layer_1-2' data-name='Layer 1'>
            <path
              d='M314.82 34.73v8.13l7.64-3.71a19.38 19.38 0 1 0-7.64-4.42'
              fillRule='evenodd'
              fill='#0f0'
            />
            <path
              fill='#1a47d4'
              d='M313.57 42.86v-7.6a20.59 20.59 0 1 1 9 5.22l-7.13 3.46a1.18 1.18 0 0 1-.62.17 1.25 1.25 0 0 1-1.25-1.25m2.5-8.13v6.13l5.85-2.86a1.28 1.28 0 0 1 .9-.07 18.09 18.09 0 1 0-7.15-4.12 1.19 1.19 0 0 1 .4.9z'
            />
            <path
              d='M358.39 19.69a1.25 1.25 0 0 1-2.49 0 24.64 24.64 0 0 0-.82-5.92 24.19 24.19 0 0 0-2.24-5.54 1.26 1.26 0 0 1 .49-1.7 1.25 1.25 0 0 1 1.69.49 26.73 26.73 0 0 1 3.37 12.64'
              fill='#0f0'
            />
            <path
              fill='#1a47d4'
              d='M325.75 15.79a1.25 1.25 0 0 1-2.49 0 4.76 4.76 0 0 1 .61-2.44 4.85 4.85 0 0 1 1.77-1.8 4.8 4.8 0 0 1 4.86 0 4.93 4.93 0 0 1 1.77 1.8 4.86 4.86 0 0 1 .61 2.42 7.55 7.55 0 0 1-2.13 5.3 4.94 4.94 0 0 0-1.44 3.31 1.25 1.25 0 1 1-2.5 0 7 7 0 0 1 2-4.87 5.47 5.47 0 0 0 1.57-3.74 2.3 2.3 0 0 0-.3-1.18 2.32 2.32 0 0 0-4 0 2.3 2.3 0 0 0-.3 1.18M326.82 29.17a1.25 1.25 0 0 1 2.5 0v.18a1.25 1.25 0 1 1-2.5 0z'
            />
            <path d='M59.08 40.29a4 4 0 0 1-7.92 0V4.23a4 4 0 1 1 7.92 0zM80.21 40.29a4 4 0 1 1-7.92 0V26.46a4 4 0 1 1 7.92 0z' />
            <path d='M59.08 26.46a4 4 0 0 1-7.92 0 14.1 14.1 0 0 1 4.29-10.12 14.6 14.6 0 0 1 20.47 0 14.1 14.1 0 0 1 4.29 10.12 4 4 0 1 1-7.92 0 6.27 6.27 0 0 0-1.9-4.46A6.75 6.75 0 0 0 61 22a6.27 6.27 0 0 0-1.9 4.49M240.76 4.23a4 4 0 1 1-4-4 4 4 0 0 1 4 4zm0 36.06a4 4 0 1 1-7.92 0V16.11a4 4 0 1 1 7.92 0zM251.26 4.23a4 4 0 1 1 7.92 0v7.92h3a4 4 0 0 1 0 7.91h-3v14.81a1.5 1.5 0 0 0 .36 1.07 1.79 1.79 0 0 0 1.23.39h5a4 4 0 1 1 0 7.92h-5a9.45 9.45 0 0 1-6.77-2.66 9.28 9.28 0 0 1-2.78-6.72V20.06h-2.95a4 4 0 1 1 0-7.91h2.95zM17.44 41.31a4 4 0 0 1-7.64-2l9.66-36.1a4 4 0 1 1 7.64 2z' />
            <path d='M36.76 39.27a4 4 0 1 1-7.64 2L19.46 5.25a4 4 0 0 1 7.64-2zM17.44 39.27a4 4 0 1 1-7.64 2L.13 5.25a4 4 0 1 1 7.64-2z' />
            <path d='M36.76 41.31a4 4 0 1 1-7.64-2l9.66-36.1a4 4 0 0 1 7.64 2zM207.39 14.5V14.28a4.13 4.13 0 0 1 .88-1.32 3.84 3.84 0 0 1 1.32-.87H209.8a3.87 3.87 0 0 1 1-.18h.48a4 4 0 0 1 1 .18H212.49a3.93 3.93 0 0 1 2.19 2.19V14.5a2.17 2.17 0 0 1 .07.24l2.66 9.93 2.68-10a3.94 3.94 0 1 1 7.62 2l-6.48 24.16-.06.24V41.29a3.89 3.89 0 0 1-.87 1.33 4.16 4.16 0 0 1-1.32.87H218.77a4 4 0 0 1-1 .18h-.48a4 4 0 0 1-1-.18H216.08a4.1 4.1 0 0 1-1.32-.87 3.89 3.89 0 0 1-.87-1.33V41.07a2.17 2.17 0 0 1-.07-.24L211.15 31l-2.67 9.94-.06.24V41.4a3.89 3.89 0 0 1-.87 1.33 4.16 4.16 0 0 1-1.32.87H206.01a4 4 0 0 1-1 .18h-.48a4 4 0 0 1-1-.18H203.32a4.1 4.1 0 0 1-1.32-.87 3.89 3.89 0 0 1-.87-1.33V41.18a2.17 2.17 0 0 1-.07-.24l-6.47-24.16a3.94 3.94 0 1 1 7.62-2l2.67 10 2.66-9.93c0-.08.05-.16.07-.24M128.26 40.29a4 4 0 0 1-7.92 0V16.11a4 4 0 1 1 7.92 0z' />
            <path d='M128.26 26.46a4 4 0 1 1-7.92 0 14.1 14.1 0 0 1 4.29-10.12 14.62 14.62 0 0 1 10.23-4.19v7.91a6.73 6.73 0 0 0-4.7 1.91 6.27 6.27 0 0 0-1.9 4.49' />
            <path
              d='M134.86 12.15a5.15 5.15 0 0 0 0 7.91 10.79 10.79 0 0 1 1.13.1 3.13 3.13 0 0 0 1.57-.21c3.36-1.4 2.73-7.8-2.7-7.8'
              fillRule='evenodd'
            />
            <path d='M280.39 40.29a4 4 0 1 1-7.92 0V4.23a4 4 0 1 1 7.92 0zM301.52 40.29a4 4 0 1 1-7.92 0V26.46a4 4 0 1 1 7.92 0z' />
            <path d='M280.39 26.46a4 4 0 1 1-7.92 0 14.1 14.1 0 0 1 4.29-10.12 14.6 14.6 0 0 1 20.47 0 14.1 14.1 0 0 1 4.29 10.12 4 4 0 1 1-7.92 0 6.24 6.24 0 0 0-1.91-4.46 6.74 6.74 0 0 0-9.4 0 6.27 6.27 0 0 0-1.9 4.49M94 32.58v2.29a1.46 1.46 0 0 0 .37 1.07 1.74 1.74 0 0 0 1.22.39H106a4 4 0 1 1 0 7.92H95.57a9.46 9.46 0 0 1-6.73-2.66 9.28 9.28 0 0 1-2.78-6.72v-10.2a14.13 14.13 0 0 1 4.29-10.12 14.6 14.6 0 0 1 20.47 0 14.13 14.13 0 0 1 4.29 10.12 2.17 2.17 0 0 1 0 .26v3.7a4 4 0 0 1-3.95 3.95zm0-7.91h13.21a6.29 6.29 0 0 0-1.9-4.49 6.76 6.76 0 0 0-9.4 0A6.26 6.26 0 0 0 94 24.67zM151.11 32.58v2.29a1.5 1.5 0 0 0 .36 1.07 1.75 1.75 0 0 0 1.23.39h10.39a4 4 0 0 1 0 7.92H152.7a9.45 9.45 0 0 1-6.7-2.66 9.28 9.28 0 0 1-2.78-6.72v-10.2a14.13 14.13 0 0 1 4.29-10.12 14.6 14.6 0 0 1 20.47 0 14.13 14.13 0 0 1 4.28 10.12v4a4 4 0 0 1-3.95 3.95zm0-7.91h13.21a6.3 6.3 0 0 0-1.91-4.49 6.76 6.76 0 0 0-9.4 0 6.29 6.29 0 0 0-1.9 4.49z' />
            <path
              fill='#1a47d4'
              d='M141.46 72.85h-6.38v-7.43h6.38a3.45 3.45 0 0 1 1.36.28 3.4 3.4 0 0 1 1.15.78 3.8 3.8 0 0 1 .8 1.22 3.85 3.85 0 0 1 .28 1.44 4 4 0 0 1-.24 1.34 4.1 4.1 0 0 1-.7 1.18l-.14.13a3.6 3.6 0 0 1-1.15.78 3.45 3.45 0 0 1-1.36.28m7.1 5a7.76 7.76 0 0 0-1.56-2.42l-.46-.5.46-.51a8 8 0 0 0 1.57-2.42 7.81 7.81 0 0 0 0-5.78 7.74 7.74 0 0 0-4.19-4.22 7.46 7.46 0 0 0-2.92-.59h-8.41a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h8.41a7.44 7.44 0 0 0 5.4-2.28L147 86a7.9 7.9 0 0 0 2.07-5.31 7.81 7.81 0 0 0-.51-2.81zm-7.1 6.54h-6.38V77h6.38a3.52 3.52 0 0 1 1.36.28 3.6 3.6 0 0 1 1.15.78 3.62 3.62 0 0 1 .79 1.21 3.85 3.85 0 0 1 0 2.78 3.65 3.65 0 0 1-.7 1.17l-.14.14a3.61 3.61 0 0 1-1.14.78 3.45 3.45 0 0 1-1.32.28zm60.7-15.18a2 2 0 0 0-.59 1.43v15.8a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.43.59 2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43V70.67a2 2 0 0 0-.59-1.43 2 2 0 0 0-2.86 0zm0-7.35a2 2 0 0 0-.59 1.43v.16a2 2 0 1 0 4 0v-.16a2 2 0 0 0-.59-1.43 2 2 0 0 0-2.86 0zm-18.92 7.35a2 2 0 0 0-1.43-.59 7.48 7.48 0 0 0-1.6.17 8.11 8.11 0 0 0-1.53.52l-.46.22-.37-.35a2.13 2.13 0 0 0-.65-.42 2 2 0 0 0-.75-.14 2 2 0 0 0-1.43.59 2 2 0 0 0-.59 1.43v15.8a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.43.59 2 2 0 0 0 2-2V75.91a3.12 3.12 0 0 1 .24-1.22 3.22 3.22 0 0 1 .71-1 3.41 3.41 0 0 1 2.38-1 2 2 0 0 0 1.43-.6 2 2 0 0 0 0-2.86zm28.71 0a2 2 0 0 0-.59 1.43v15.8a2 2 0 0 0 2 2 2 2 0 0 0 1.43-.59 2 2 0 0 0 .58-1.43V75.91a3.13 3.13 0 0 1 .25-1.22 3.22 3.22 0 0 1 .71-1 3.48 3.48 0 0 1 2.38-1 3.49 3.49 0 0 1 1.29.25 3.27 3.27 0 0 1 1.8 1.75 3.27 3.27 0 0 1 .24 1.22v10.45a2 2 0 0 0 .59 1.43 2 2 0 0 0 1.44.59 2 2 0 0 0 2-2V75.91a7.11 7.11 0 0 0-.56-2.78 7.31 7.31 0 0 0-4-3.93 7.24 7.24 0 0 0-2.8-.55 7.48 7.48 0 0 0-1.6.17 7.26 7.26 0 0 0-1.53.52l-.46.21-.37-.35a2.31 2.31 0 0 0-.65-.41 2 2 0 0 0-2.18.45zm-15.37 15.72a2 2 0 0 0-1.43-.58h-2.54V63.4A2 2 0 0 0 192 62a2 2 0 0 0-2.86 0 2 2 0 0 0-.58 1.43v20.26a5 5 0 0 0 .32 1.79 4.55 4.55 0 0 0 .92 1.49 4.46 4.46 0 0 0 1.47 1 4.39 4.39 0 0 0 1.51.35h2.36a2 2 0 0 0 2-2 2 2 0 0 0-.56-1.39zm-38.25-9a3.31 3.31 0 0 1 .24-1.22 3.22 3.22 0 0 1 .71-1 3.48 3.48 0 0 1 2.38-1 3.49 3.49 0 0 1 1.29.25 3.38 3.38 0 0 1 1.1.72 3 3 0 0 1 .7 1 3.09 3.09 0 0 1 .24 1.22v.78h-6.66zm8.08 9a2 2 0 0 0-1.42-.58h-6.66v-3.62H167a2 2 0 0 0 1.43-.59 2 2 0 0 0 .59-1.43v-2.8a7.11 7.11 0 0 0-.56-2.78 7.41 7.41 0 0 0-1.62-2.37 7.49 7.49 0 0 0-2.39-1.56 7.33 7.33 0 0 0-2.81-.55 7.31 7.31 0 0 0-5.19 2.12 7.22 7.22 0 0 0-1.63 2.37 7.06 7.06 0 0 0-.56 2.77v7.78a5 5 0 0 0 .32 1.79 4.58 4.58 0 0 0 .93 1.49 4.31 4.31 0 0 0 3 1.4H165a2 2 0 0 0 2-2 2 2 0 0 0-.59-1.44z'
            />
          </g>
        </g>
      );
    default:
      return 'x';
  }
};

const Logo = ({ name = '', width = '', height = '', className='' }) => (
  <svg
    viewBox={getViewBox(name)}
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    className={className}
  >
    {icon(name)}
  </svg>
);

export default Logo;
