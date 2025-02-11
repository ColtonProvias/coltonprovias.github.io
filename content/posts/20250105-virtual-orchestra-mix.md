---
title: Syncing and Editing a Virtual Orchestra
date: 2025-02-12
tags: ["orchestra", "technical-production", "music"]
categories: ["music"]
---

This is part 2 of a 2 part series on how a the Googler Virtual Orchestra piece
[Finlandia](https://www.youtube.com/watch?v=eNN0KUki-hg) was done from an audio
perspective.

## File Preparation

Once the recordings were completed, we could now begin processing all of the
files. The files we received were in a myriad of formats from different phones,
cameras, audio recorders, etc. For the video editing team, this meant
re-encoding all of the files into a singular format then providing a low-scale
proxy and a screenshot to speed up editing. The audio side here was a bit
easier.

A for loop was written in the shell to loop through all of the files and to run
them through ffmpeg to extract the audio (if needed) and convert it to a WAV
format. The tracks were also named to a format of
`{instrument_part}_{performer}_{take}.wav` for organization purposes.

## Synchronization

Every take wass then brought into the same Logic Pro X file as the ref track.
Thanks to the file naming, the individual takes were quickly sorted next to the
original tracks from the ref track. The first goal was to find the best takes
and to combine them onto a single track per performer/part pair. Once that was
done, the next step was to normalize the region gain across the entire file and
to begin the process of synchronization.

Syncrhonizing Finlandia had a few challenges. As an almost 9 minute piece, there
was some drift within the recording speed of different recorders. Fortunately
having the original MIDI data from the ref track next to the tracks made it easy
to play the age-old game of lining up the large transient to what looks to be
the correct note start. The process for a rough sync took an hour or two, but
the piece quickly took shape.

(I would insert examples of the piece at this stage here, but these early mixes
contain some musician voices that may be better kept unreleased.)

With a rough sync done, we could finally start to hear that the ref track worked
successfully. Several more hours later and most of the more moderate sync issues
were resolved enough to get us to our desired "live" feel.

## Mixing and Editing

Now that all of the parts were synced, the attention then changes to mixing and
editing. A bus was created for each part, then a bus above that for each
instrument family (strings, woodwinds, brass, percussion, ...and saxophones?),
and a final bus for the orchestra without ref track. The process now became
quite methodical.

On a per part basis, I had to go through each musician playing that part and
ensure their performance mostly aligned with the ref track. Wrong pitches were
cut out, notes held too long were muted, notes that were played too early were
either muted if there was already enough coverage in the section or trimmed and
shifted to fit. Every track was panned to its approximate position within the
orchestra to help build the stereo image.

Let me take a quick diversion here to talk about recording equipment. Some
musicians used pro audio equipment to capture their sound. Their recordings had
great dynamic range and caught many details of their instrument. In isolation,
they sounded great. However, most musician recordings were on cell phones. Cell
phones aren't as detailed and often utilize dynamic range compression, thus
making much of the recording the same loudness. You could still tell when a
musician was playing forte or piano based upon their timbre. This discrepancy
meant that one set of musicians now had to sound more like the other.
Unfortunately for those who had the pro audio equipment, they lost the battle
and got the compression and gain automation treatment.

Once the musician's performance was edited, now it could be mixed. The tracks
were balanced against one another to create a cohesive section playing a single
part. For me this was a magical moment where you could hear the ensemble sound
develop. Violins may sound scratchy solo, but they become lush and cohesive once
at the same loudness. After all of the tracks in a part were balanced, dynamics
were readded by drawing volume autmation into the bus tracks.

Once all of the parts had been mixed, we could step up the tree and mix across
sections. Violin 1 inner and violin 1 outer would be balanced against the
basses, cellos, and other strings. Any issues in dynamics were addressed once
again with a general preference for higher-level mixing.

The process then repeated at the orchestra level to create the final mix.

Once the mix was done, there was some collaboration with the music director to
fine tune the mix to their preference before finally exporting it for sync to
video.

The entire project took about 3-4 months to execute but produced a project that
we were proud to release.

Recordings of the
[full and per-section mix](https://soundcloud.com/coltonprovias/sets/finlandia-sep-21/s-vTDJrNYRWAu?si=f67adfcf1c3e46278ddf82045a3c0a67&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing)
are available for listening.
