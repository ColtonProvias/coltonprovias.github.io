---
title: Syncing A Live Orchestra to Video
date: 2025-01-20
tags: ["orchestra", "technical-production", "music"]
categories: ["music"]
---

I lead the technical production for the
[Googler Orchestra](https://googlerorchestra.com), an orchestra comprised of
Google/Alphabet musicians. This entails coordinating the technical requirements
that a show main demand. Sometimes it's just coordinating simple stage movements
for a basic show, and sometimes it stretches to cover lights, cameras, audio,
graphics, and other show elements.

For the 2024 annual holiday concert, our music director
[Nick Mazuk](https://nickmazuk.com) proposed synchronizing the orchestra to an
animated film. This raises a simple question: how does one sync a live orchestra
to video without detracting from the experience for the audience?

The answer is a specialized video. And a click track. And by breaking the
orchestra's habits.

## Preparing the Audience Video

For those who have ever watched a movie in concert, you may have noticed that
there are two videos playing in sync. The primary video, which I will refer to
here as the audience video, contains the clean plate that is presented to the
audience. The other is a video meant for the conductor.

For this show, we first had to acquire the performance rights and the media
assets. This was rather simple...except we didn't get the media assets until
just a couple of weeks out to the concert. The clean plate asset we received
required a couple of cuts for count-in buffer, alignment to the score, and
show/logo graphics at start and end of the playback for a smoother transition.
This was easily done in DaVinci Resolve in just a few minutes. We now had our
clean plate for projection to the audience.

## Preparing the Conductor Video

The conductor of the orchestra serves multiple jobs. The most basic is acting as
a visual metronome. More importantly, they are a leader who injects an
interpretation of the music into the orchestra and guides the orchestra through
the piece. Thus to get an orchestra to sync to an animated movie, the conductor
needs additional information that they must use in deciding what information the
orchestra needs.

The conductor video we received provided very minimal additional information. It
was the equivalent of asking for directions from San Diego to New York and being
told "start by driving down this street" with almost no other information.
Animated movies tend to make use of
[Mickey Mousing](https://en.wikipedia.org/wiki/Mickey_Mousing), which is a
technique where the music acts as the sound effects for actions on screen.
Mickey Mousing requires near frame-perfect precision. It was clear the conductor
video needed an overhaul.

The first step of creating the video was to build a click track. I brought the
audience video with synced music into Logic Pro and spent hours mapping every
measure (and many beats) to the recording. Key points required additional care.
Given that the animated film was on the older side, the amount of fluctuation in
timing meant that hundreds of points needed to be created.

With the click track done, the conductor video could now be built using
[Video Sync 6](https://non-lethal-applications.com/video-sync-6). The audience
plate was pulled in and connected to Logic Pro using MTC/MTU for syncrhonized
playback. The conductor/music director provided notes on key hits throughout the
piece. With this information, I was able to walk through the piece and add
punches for each downbeat. A punch is traditionally a hole made in a frame that
presents itself as a quick round white flash on screen. Hit points and rehearsal
marks, along with the start and end of the piece, were marked with 4 beat
streamers. Streamers are colored bars that move from left to right across the
screen, often ending at a punch. Traditionally they were made by scratching
diagonally across several feet of film prior to the hit point.

These visual overlays plus the auditory beeps and clicks help to provide the
conductor with enough information to keep the piece in sync.

## Syncrhonize the ~~Watches~~ Videos!

In venue to sync the audience and conductor video, we used Video Sync's
multi-screen playback feature. The clean plate was presented on two projects to
the left and right of the orchestra, while the conductor video was on a laptop
in front of the conductor. Getting video to the projectors required sending an
HDMI signal over SDI, even for a relatively short distance as it was outside of
HDMI's range.

## Breaking Habits

Playing in any ensemble, whether it is an orchestra or a band, is an exercise in
team dynamics. The conductor merely provides a strong suggestion of a tempo or a
particular style, but much of the actual interpreptation comes from subtle cues
among the musicians. Your goal as a muisician is partially to build an ensemble
sound, which involves blending into your surrounding peers. If a few violins
start playing louder, the rest of the section may follow. If two out of three
trombones start playing a note staccato, the other trombone will follow. While
the conductor is a strong leader in rehearsal, the ensemble often takes the lead
during the show with the conductor being there to course correct as needed.

This dynamic changes once you are performing to video. The source-of-truth on
tempo is no longer an average from across the orchestra, but a very distinct
point in time rendered digitally. This introduces conflict into a musician's
training as they now have to fight years of learning to sync to each other and
instead strictly follow the conductor (or click) during the show. The conductor
moves from the peripheral toward the center of their attention.

It's a difficult habit to break, but the musicians were able to break it after a
few rehearsals. Once we were finally in the performance space, the musicians and
conductor were able to perform in sync with the video. It was a delight for the
audiences, and a relief for those of us who spent the past few weeks getting it
prepared.
