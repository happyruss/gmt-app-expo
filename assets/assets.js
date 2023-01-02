import blackBackground from './whiteBackground.jpg'
import voice0 from './second/mp3/01voice_01.mp3'
import binaural0 from './second/mp3/01binaural_01.mp3'
import isochronic0 from './second/mp3/01isochronic_01.mp3'
import nature0 from './second/mp3/01nature_01.mp3'
import pinknoise0 from './second/mp3/01music_01.mp3'
import voice1 from './second/mp3/02voice_01.mp3'
import binaural1 from './second/mp3/02binaural_01.mp3'
import isochronic1 from './second/mp3/02isochronic_01.mp3'
import nature1 from './second/mp3/02nature_01.mp3'
import pinknoise1 from './second/mp3/02music_01.mp3'
import voice2 from './second/mp3/03voice_01.mp3'
import binaural2 from './second/mp3/03binaural_01.mp3'
import isochronic2 from './second/mp3/03isochronic_01.mp3'
import nature2 from './second/mp3/03nature_01.mp3'
import pinknoise2 from './second/mp3/03music_01.mp3'
import voice3 from './second/mp3/04voice_01.mp3'
import binaural3 from './second/mp3/04binaural_01.mp3'
import isochronic3 from './second/mp3/04isochronic_01.mp3'
import nature3 from './second/mp3/04nature_01.mp3'
import pinknoise3 from './second/mp3/04music_01.mp3'
import playWhite from './play.png'
import pauseWhite from './pause.png'

export default {
  background: blackBackground,
  play: playWhite,
  pause: pauseWhite,
  tracks: [
    {
      binaural: binaural0,
      voice: voice0,
      nature: nature0,
      pinknoise: pinknoise0,
      isochronic: isochronic0,
    },
    {
      binaural: binaural1,
      voice: voice1,
      nature: nature1,
      pinknoise: pinknoise1,
      isochronic: isochronic1,
    },
    {
      binaural: binaural2,
      voice: voice2,
      nature: nature2,
      pinknoise: pinknoise2,
      isochronic: isochronic2,
    },
    {
      binaural: binaural3,
      voice: voice3,
      nature: nature3,
      pinknoise: pinknoise3,
      isochronic: isochronic3,
    },
  ],
}
